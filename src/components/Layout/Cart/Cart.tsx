import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartItemsSelector } from '../../../store/cart/cartSelectors';
import cartSlice from '../../../store/cart/cartSlice';
import CartItem from './CartItem/CartItem';
import { default as S } from './Cart.styled';


interface SidebarProps {
    close: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ close }) => {
    const cart = useSelector(cartItemsSelector);
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

    return (
        <S.Sidebar ref={ref}>
            <S.X onClick={close}>X</S.X>
            <S.Title>Cart</S.Title>
            <S.ButtonsHolder>
                <S.Button onClick={handleCheckout}>Checkout</S.Button>
                <S.Button onClick={handleClearCart}>Clear Cart</S.Button>
            </S.ButtonsHolder>
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
    );
}

export default Sidebar;