
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddProductInput {
    name: string;
    description?: Nullable<string>;
    price: number;
    image?: Nullable<string>;
}

export interface UpdateProductInput {
    name: string;
    description?: Nullable<string>;
    price: number;
    image?: Nullable<string>;
}

export interface IQuery {
    getProducts(take?: Nullable<number>, offset?: Nullable<number>): Product[] | Promise<Product[]>;
    getProduct(id: string): Product | Promise<Product>;
    getProductsCount(): number | Promise<number>;
}

export interface IMutation {
    addProduct(addProductInput?: Nullable<AddProductInput>): Product | Promise<Product>;
    updateProduct(id?: Nullable<string>, updateProductInput?: Nullable<UpdateProductInput>): Product | Promise<Product>;
}

export interface Product {
    id: string;
    createdAt?: Nullable<Date>;
    updatedAt?: Nullable<Date>;
    name: string;
    description?: Nullable<string>;
    price: number;
    image?: Nullable<string>;
}

type Nullable<T> = T | null;
