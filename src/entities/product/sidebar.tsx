import {useContext} from "react";
import {CategoryContext} from "../../shared/context/CategoryContext.tsx";
import {Link, useParams} from "react-router-dom";


const Sidebar = () => {
    const categories = useContext(CategoryContext);
    const {categoryId} = useParams();

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
            <a href="/"
               className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span className="fs-4">Categories</span>
            </a>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
                {categories.map(category => (
                    <li className="nav-item" key={category.id}>
                        <Link
                            className={`nav-link ${category.id.toString() == categoryId ? "active" : "link-body-emphasis"}`}
                            to={`/${category.id}`}>
                            {category.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;