import useAuth0 from '@auth0/auth0-react/src/use-auth0';
import { default as S } from './User.styled';
import { LoginButton, LogoutButton } from '../../AuthButtons';
import { useEffect } from 'react';

const User: React.FC = () => {
    const { isLoading, loginWithPopup, user, isAuthenticated } = useAuth0();

    useEffect(() => {
        console.log('user: ', user?.email);
        console.log('is authenticated: ', isAuthenticated);
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return (
            <S.Container>
                <LoginButton />
            </S.Container>
        );
    }

    return (
        <S.Container>
            <LogoutButton />
        </S.Container>
    );
}

export default User;