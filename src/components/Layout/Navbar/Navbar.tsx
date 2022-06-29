import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { cartCountSelector } from '../../../store/cart/cartSelectors';
import CustomLink from '../../CustomLink/CustomLink';
import { default as S } from './Navbar.styled';

interface NavbarProps {
    open: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ open }) => {
    const cartCount = useSelector(cartCountSelector);
    const theme = useTheme();
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

    useEffect(() => {
        console.log('at the top: ', atTheTop);
    }, [atTheTop]);

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
            <S.Cart onClick={open}>
                <S.Span>
                    Cart
                </S.Span>
                <S.Span>
                    {cartCount > 0 && `${cartCount}`}
                </S.Span>
            </S.Cart>
        </S.Nav>
    )
}

export default Navbar