import {createContext} from "react";
import {ICategory} from "../model/category.model.ts";

export const CategoryContext = createContext<ICategory[]>([]);
