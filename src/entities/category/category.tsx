import {useContext} from 'react';
import {CategoryContext} from "../../shared/context/CategoryContext.tsx";
import {Link} from "react-router-dom";

const Category = () => {
    const categories = useContext(CategoryContext);
    return (
        <div>
            {categories.map((category) => (
                <div key={category.id}>
                    <Link to={`/${category.id}`}>{category.title}</Link>
                </div>
            ))}
        </div>
    );
};

export default Category;