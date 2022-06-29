import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/store";
import CATALOG_ITEMS from '../../data/catalog';


type CatalogState = {
    items: [Product, number][]
}

const initialState: CatalogState = {
    items: CATALOG_ITEMS
}


const catalogSlice = createSlice({
    initialState,
    name: 'catalog',
    reducers: {
        modifyStock(state, action: PayloadAction<[Product, number]>) {
            const { items } = state;
            const [product, newCount] = action.payload;
            const indexOf = items.findIndex((item) => item[0] === product);
            const target = state.items[indexOf];
            state.items[indexOf] = [target[0], newCount];
        }
    }
});

export default catalogSlice;