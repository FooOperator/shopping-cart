import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { cartCountSelector } from '../../../shared/store/cart/cartSelectors';
import CustomLink from '../../CustomLink/CustomLink';
import UserWidget from '../UserWidget/UserWidget';
import { default as S } from './Navbar.styled';

interface NavbarProps {
    open: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ open }) => {
    const cartCount = useSelector(cartCountSelector);
    const [atTheTop, setAtTheTop] = useState<boolean>(true);

    useEffect(() => {
        const toggleNavType = (e: Event) => {
            setAtTheTop(window.scrollY === 0);
        }

        document.addEventListener('scroll', toggleNavType);

        return () => {
            document.removeEventListener('scroll', toggleNavType);
        }
    }, []);

    return (
        <S.Nav atTheTop={atTheTop}>
            <CustomLink to='/' variant='brand'>
                Ecommerce
            </CustomLink>
            <S.List>
                <CustomLink to='/store' variant='nav'>
                    Store
                </CustomLink>
                <CustomLink to='/about' variant='nav'>
                    About
                </CustomLink>
            </S.List>
            <S.CartButton onClick={open} >
                <S.CartIcon size={35} />
                {cartCount > 0 && <S.Badge over99={cartCount > 99}>{cartCount}</S.Badge>}
            </S.CartButton>
            <UserWidget />
        </S.Nav>
    )
}

export default Navbar