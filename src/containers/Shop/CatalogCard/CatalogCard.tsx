import { Add, Remove } from '@styled-icons/ionicons-outline';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartSingleItemSelector } from '../../../shared/store/cart/cartSelectors';
import cartSlice from '../../../shared/store/cart/cartSlice';
import { RootState } from '../../../shared/store/store';
import { Product } from '../../../shared/types/store';
import { CardProps, Card } from '../../../components/Card';
import { default as S } from './CatalogCard.styled';


interface CatalogCardProps extends Omit<CardProps, 'children'> {
    product: Product;
    stock: number;
}

const CatalogCard: React.FC<CatalogCardProps> = (props) => {
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
            if (count - 1 === 0) {
                dispatch(cartSlice.actions.remove(props.product.id));
            } else {
                dispatch(cartSlice.actions.modifyCount([props.product, count - 1]));
            }
        }
    }

    const CurrentDisplay = (
        <S.ButtonsHolder>
            {count !== undefined ?
                <>
                    <S.DecreaseCount onClick={handleDecrement}><Remove size={30} /></S.DecreaseCount>
                    <S.Count>{count}</S.Count>
                    <S.IncreaseCount onClick={handleIncrement}><Add size={30} /></S.IncreaseCount>
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

export default CatalogCard;