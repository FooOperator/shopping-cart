import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartCountSelector, cartItemsSelector, cartPriceSelector } from '../../../shared/store/cart/cartSelectors';
import cartSlice from '../../../shared/store/cart/cartSlice';
import { default as S } from './Cart.styled';
import { CartItem } from '../';


interface SidebarProps {
    close: () => void;
}

const Cart: React.FC<SidebarProps> = ({ close }) => {
    const cart = useSelector(cartItemsSelector);
    const price = useSelector(cartPriceSelector);
    const count = useSelector(cartCountSelector);
    const countIsValid = count > 0;
    const dispatch = useDispatch();
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target)) {
                close();
            }
        }

        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        }
    }, []);

    const handleClearCart = () => {
        dispatch(cartSlice.actions.clear());
    }

    const handleCheckout = () => {

    }

    const Content = () => {
        if (!countIsValid) {
            return <S.Warning>No items</S.Warning>
        }
        return (
            <S.CostGroup>
                <S.CostLabel>
                    You Will Pay:
                </S.CostLabel>
                <S.Cost>
                    {price}
                </S.Cost>
            </S.CostGroup>
        );
    }

    return (
        <>
            <S.Sidebar ref={ref}>
                <S.CloseButton onClick={close} />
                <S.Title>Cart</S.Title>
                <S.ButtonsHolder>
                    <S.Button onClick={handleCheckout} disabled={!countIsValid}>Checkout</S.Button>
                    <S.Button onClick={handleClearCart} disabled={!countIsValid}>Clear Cart</S.Button>
                </S.ButtonsHolder>
                <Content />
                <S.CartList >
                    {
                        cart.map((item, index) => {
                            const [product, count] = item;
                            const legend = `${product.price} x ${count}`;
                            return (
                                <CartItem
                                    key={index}
                                    {...product}
                                    thumbnail={product.image}
                                    legend={legend}
                                />
                            );
                        })
                    }
                </S.CartList>
            </S.Sidebar>
        </>
    );
}

export default Cart;