import Sidebar from "./sidebar.tsx";
import ProductList from "./product-list.tsx";
import {Link} from "react-router-dom";

const Product = () => {
    return (
        <div className="row">
            <div className="col-3">
                <Sidebar/>
            </div>
            <div className="col-9">
                <Link to={"/add-product"} className="btn btn-success mb-2">New Product</Link>
                <ProductList/>
            </div>
        </div>
    );
};

export default Product;