import { Price } from './price';

export interface ItemDetail {
    condition: string;
    id: string;
    free_shipping: boolean;
    picture: string;
    price: Price;
    title: string;
    sold_quantity: number;
    description: string;
    categories: string[];
    author: any;
}
