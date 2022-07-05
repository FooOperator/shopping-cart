import { useEffect, useState } from 'react';
import { User, CartButton } from './..'
import { default as S } from './Navbar.styled';
import CustomLink from '../../CustomLink/CustomLink';

interface NavbarProps {
    open: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ open }) => {
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
                <CustomLink to='/shop' variant='nav'>
                    Shop
                </CustomLink>
                <CustomLink to='/about' variant='nav'>
                    About
                </CustomLink>
            </S.List>
            <S.RightSide>
                <CartButton open={open} />
                <User />
            </S.RightSide>
        </S.Nav>
    )
}

export default Navbar;