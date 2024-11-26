export interface IProduct {
    id?: string | any;
    title: string;
    price: string;
    description: string;
    category:{
        name:string;
        imgURL: string;
    };
    imgURL: string;
    colors: string[];
}

export interface IformInput {
    id: string   ;
    name : 'title'| "description" | "imgURL" | "price";
    label:string;
    type:string
}

export interface Icategory {
    id : string ;
    name : string ; 
    imgURL : string 
}