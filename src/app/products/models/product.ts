import { Price } from './price';

export interface Product {
    condition: string;
    id: string;
    free_shipping: boolean;
    picture: string;
    price: Price;
    title: string;
    ubication: string;
}
