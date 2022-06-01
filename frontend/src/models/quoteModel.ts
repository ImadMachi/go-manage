import { Customer } from "./customerModel";
import { Product } from "./productModel";

export interface Quote  {
    id: number;
    var: number;
    customer: Customer;
    creationDate:string;
    quoteProducts:[
        {
            id:number;
            qty:number;
            product:Product
        }
    ]
}