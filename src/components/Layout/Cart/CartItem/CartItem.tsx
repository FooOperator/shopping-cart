import React from 'react'
import Card, { CardProps } from '../../../Card/Card'
import { default as S } from './CartItem.styled';


interface CartItemProps extends Omit<CardProps, 'children'> { }

const CartItem: React.FC<CartItemProps> = (props) => {
    return (
        <S.CartItem>
            <Card {...props} height={80} variant='row'>

            </Card>
        </S.CartItem>
    )
}

export default CartItem