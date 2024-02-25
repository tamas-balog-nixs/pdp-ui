import React, {useState} from "react";
import {getProductsByCategoryId} from "../../services/product-service.ts";
import {useParams} from "react-router-dom";
import {IProduct} from "../../shared/model/product.model.ts";

interface ImageWithFallbackProps {
    src: string;
    alt: string;
    fallbackSrc: string;
}

const ProductList = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const {categoryId} = useParams();

    React.useEffect(() => {
        getProductsByCategoryId(Number(categoryId))
            .then(response => setProducts(response.data));
    }, [categoryId]);

    const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({src, alt, fallbackSrc}) => {
        const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
            event.currentTarget.src = fallbackSrc;
        };

        return (<img src={src} alt={alt} onError={handleError} style={{width: '200px', height: '200px'}}/>);
    };

    return (
        <div>
            {products.map((product) => (
                <div className="card mb-3" key={product.id}>
                    <div className="row g-0">
                        <div className="col-md-4 m-auto ps-3 py-3">
                            <div className="text-center">
                                <ImageWithFallback
                                    src={`http://localhost:8080/images/${product.thumbnailImage}`}
                                    fallbackSrc="/defaultThumbnailImage.png"
                                    alt={product.title}
                                />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text"><small
                                    className="text-body-secondary">{product.price} Ft</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;