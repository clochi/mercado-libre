import { Product } from './product';

export interface Item {
    author?: {
        name: string;
        lastname: string;
    };
    categories: string[];
    items: Product[];
}
