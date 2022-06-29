import React, { SyntheticEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartSingleItemSelector } from '../../store/cart/cartSelectors';
import cartSlice from '../../store/cart/cartSlice';
import { RootState } from '../../store/store';
import { Product } from '../../types/store';
import Card, { CardProps } from '../Card/Card'
import { default as S } from './StoreCard.styled';


interface StoreCardProps extends Omit<CardProps, 'children'> {
    product: Product;
    stock: number;
}

const StoreCard: React.FC<StoreCardProps> = (props) => {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => cartSingleItemSelector(state, props.product.id));

    const handleIncrement = () => {
        if (count) {
            dispatch(cartSlice.actions.modifyCount([props.product, count + 1]));
        }
    }

    const handleAddToCart = () => {
        dispatch(cartSlice.actions.add(props.product));
    }

    const handleDecrement = () => {
        if (count) {
            dispatch(cartSlice.actions.modifyCount([props.product, count - 1]));
        }
    }

    const CurrentDisplay = (
        <S.ButtonsHolder>
            {count !== undefined ?
                <>
                    <S.DecreaseCount onClick={handleDecrement}>-</S.DecreaseCount>
                    <S.Count>{count}</S.Count>
                    <S.IncreaseCount onClick={handleIncrement}>+</S.IncreaseCount>
                </>
                :
                <S.AddToCart onClick={handleAddToCart} >
                    Add To Cart
                </S.AddToCart>
            }
        </S.ButtonsHolder>
    );

    return (
        <Card {...props}>
            {CurrentDisplay}
        </Card>
    )
}

export default StoreCard;