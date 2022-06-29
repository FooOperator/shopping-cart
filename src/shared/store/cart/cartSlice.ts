import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/store";
import { calculateCartPrice } from "../../utils/storeHelpers";

type CartState = {
    items: [Product, number][];
    price: number;
}

const initialState: CartState = {
    items: [],
    price: 0
}

const cartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        modifyCount(state, action: PayloadAction<[Product, number]>) {
            const { items } = state;
            const [product, newCount] = action.payload;

            const indexOf = items.findIndex((item) => item[0].id === product.id);

            if (indexOf > -1) {
                state.items[indexOf] = [product, newCount];
                const newCartPrice = calculateCartPrice(state.items, []);
                state.price = newCartPrice;
            }
        },
        add(state, action: PayloadAction<Product>) {
            const product = action.payload;
            state.items.unshift([product, 1]);
            state.price += product.price;
        },
        remove(state, action: PayloadAction<string>) {
            const id = action.payload;
            const filteredItems = state.items.filter((item) => item[0].id !== id);
            const newCartPrice = calculateCartPrice(filteredItems, []);
            return {
                ...state,
                price: newCartPrice,
                items: filteredItems
            }
        },
        clear(state) {
            state.items = [];
            state.price = 0;
        }
    }
});

export default cartSlice;