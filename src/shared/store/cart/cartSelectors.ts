import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const cartItemsSelector = createSelector(
    (state: RootState) => state.cart.items,
    (items) => items
);

export const cartSingleItemSelector = createSelector(
    (state: RootState, id: string) => ({
        items: state.cart.items,
        id: id
    }),
    ({ id, items }) => {
        return items.find((item) => item[0].id === id)?.[1];
    }
);

export const cartPriceSelector = createSelector(
    (state: RootState) => state.cart.price,
    (price) => price
);

export const cartCountSelector = createSelector(
    (state: RootState) => state.cart.items,
    (items) => items.length
);