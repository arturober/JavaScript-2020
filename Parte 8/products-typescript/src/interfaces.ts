export interface IProduct {
    id?: number; 
    name: string; 
    description: string; 
    photo: string;
}

export interface ResponseProducts {
    products: IProduct[]
}

export interface ResponseProduct {
    product: IProduct
}
