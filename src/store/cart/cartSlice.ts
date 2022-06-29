import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/store";

type CartState = {
    items: [Product, number][]
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        modifyCount(state, action: PayloadAction<[Product, number]>) {
            const { items } = state;
            const [product, newCount] = action.payload;

            const indexOf = items.findIndex((item) => item[0].id === product.id);
            console.log(product);
            console.log(`state of items: `, state.items);

            if (indexOf > -1) {
                console.log('found, incrementing count')
                const target = state.items[indexOf];
                console.log(newCount);
                return {
                    items: [
                        ...state.items.slice(0, indexOf),
                        [target[0], newCount],
                        ...state.items.slice(indexOf)
                    ]
                }
            }
        },
        add(state, action: PayloadAction<Product>) {
            const product = action.payload;
            state.items.unshift([product, 1]);
        },
        remove(state, action: PayloadAction<string>) {
            const id = action.payload;
            console.log('hi');

            return {
                state,
                items: state.items.filter((item) => item[0].id !== id)
            }
        },
        clear(state) {
            state.items = [];
        }
    }
});

export default cartSlice;