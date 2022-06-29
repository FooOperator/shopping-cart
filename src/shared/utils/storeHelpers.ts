import { Product } from "../types/store";
import { formatCurrency } from "./manipulations";

export const calculateCartPrice = (cart: [Product, number][], discounts: [string[], number][]): number => {
    const price = cart.reduce((price, [product, count]) => {
        const discount = discounts.find((disc) => disc[0].includes(product.id))?.[1];
        let currentPrice = product.price * count;

        if (discount) {
            currentPrice -= (currentPrice * discount);
        }

        return price + currentPrice;
    }, 0);

    return +price.toPrecision(2);
}