import axios from 'axios';
import {ICategory} from "../shared/model/category.model.ts";

const url = "http://localhost:8080/categories";

export const getCategories = async () => {
    return axios.get<ICategory[]>(url);
};