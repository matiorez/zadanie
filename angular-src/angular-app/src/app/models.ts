export interface Offer {
    id?: number;
    title: string;
    description: string;
    price: number;
    category: number;
}
export interface Category {
    id?: number;
    name: string;
    ordering: string;
}