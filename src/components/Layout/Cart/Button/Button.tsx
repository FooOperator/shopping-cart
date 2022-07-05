import { useSelector } from 'react-redux';
import { cartCountSelector } from '../../../../shared/store/cart/cartSelectors';
import { default as S } from './Button.styled';

interface ButtonProps {
    open: () => void;
}

const Button: React.FC<ButtonProps> = ({ open }) => {
    const count = useSelector(cartCountSelector);
    return (
        <S.CartButton onClick={open} >
            <S.CartIcon size={40} />
            {count > 0 && <S.Badge over99={count > 99}>{count}</S.Badge>}
        </S.CartButton>
    );
}

export default Button;