import React, {useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import {getCategories} from "./services/category-service.ts";
import {ICategory} from "./shared/model/category.model.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./shared/layout/layout.tsx";
import {CategoryContext} from "./shared/context/CategoryContext.tsx";
import Product from "./entities/product/product.tsx";
import ProductAdd from "./entities/product/product-add.tsx";
import Category from "./entities/category/category.tsx";


function App() {
    const [categories, setCategories] = useState<ICategory[]>([]);

    React.useEffect(() => {
        getCategories().then(response => setCategories(response.data));
    }, []);

    return (
        <CategoryContext.Provider value={categories}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Category/>}/>
                        <Route path=":categoryId" element={<Product/>}/>
                        <Route path="add-product" element={<ProductAdd/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </CategoryContext.Provider>
    )
}

export default App
