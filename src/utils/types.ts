export type Product = {
    id: number;
    title: string;
    image: string;
    price?: number;
    description?: string;
    offer?: string;
};

export type CartItem = {
    product: Product;
    quantity: number;
};

export type Cart = {
    items: CartItem[];
};

export type User = {
    id: number;
    name: string;
    email: string;
};
