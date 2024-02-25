import {ChangeEvent, FormEvent, useContext, useState} from "react";
import {CategoryContext} from "../../shared/context/CategoryContext.tsx";
import {createProduct} from "../../services/product-service.ts";
import {INewProduct} from "../../shared/model/product.model.ts";
import {createThumbnail, upload} from "../../services/image-service.ts";
import {useNavigate} from "react-router-dom";

const ProductAdd = () => {
    const categories = useContext(CategoryContext);
    const [newProduct, setNewProduct] = useState<INewProduct>({
            title: '',
            catId: 0,
            image: '',
            price: 0,
            description: ''
        }
    );

    const [file, setFile] = useState<File | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {id, value} = e.target;
        setNewProduct({...newProduct, [id]: value});
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const navigate = useNavigate();
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (file !== null) {
            const uploadResult = await upload(file);
            const newProductWithImage = {...newProduct, image: uploadResult.data};
            setNewProduct(newProductWithImage);

            const createResult = await createProduct(newProductWithImage);
            createThumbnail({productId: createResult.data.id})

            if (createResult.status === 200) {
                navigate(`/${newProductWithImage.catId}`);
            }
        }
    }

    return (
        <div>
            <h1>Add Product</h1>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" onChange={handleChange} required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="catId" className="form-label">Category ID</label>
                    <select className="form-select" id="catId" defaultValue={0} onChange={handleChange}>
                        <option>Select...</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.title}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="price" className="form-label">Price</label>
                    <div className="input-group">
                        <input type="number" className="form-control" id="price" onChange={handleChange} required/>
                    </div>
                </div>
                <div className="form-floating">
                        <textarea className="form-control" placeholder="Give a description" id="description"
                                  onChange={handleChange}></textarea>
                    <label htmlFor="description">Description</label>
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="image">Upload</label>
                    <input type="file" className="form-control" id="image" onChange={handleFileChange}/>
                </div>

                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Add</button>
                </div>
            </form>
        </div>
    );
};

export default ProductAdd;