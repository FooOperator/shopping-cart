import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const catalogItemsSelector = createSelector(
    (state: RootState) => state.catalog.items,
    (items) => items
);
