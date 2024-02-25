export interface IProduct {
    id: number;
    title: string;
    catId: number;
    image: string;
    thumbnailImage: string;
    price: number;
    description: string;
}

export interface INewProduct {
    title: string;
    catId: number;
    image: string;
    price: number;
    description: string;
}
