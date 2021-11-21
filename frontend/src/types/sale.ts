import { seller } from "./seller"

export type Sale ={
    id: number; 
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller : seller;
    
}
//Aqui temos um objecto, um tipo que vai casar coom a resposta da busca Paginada do POSTMAN
export type SalePage = {
    content?: Sale[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;

}

export type SaleSum = {
    sellerName: string;
    sum: number;
    
}

//Aqui no export type SaleSum foi definido um Tipo que tinhamos no postman


export type SaleSuccess = {
    sellerName: string;
    visited: number;
    deals: number;
}