import axios from 'axios';
import {INewProduct, IProduct} from "../shared/model/product.model.ts";

const rootUrl = "http://localhost:8080/products";

export const getProductsByCategoryId = async (categoryId: number) => {
    return axios.get<IProduct[]>(`${rootUrl}?catId=${categoryId}`);
};

export const createProduct = async (product: INewProduct) => {
    return axios.post(rootUrl, product);
};