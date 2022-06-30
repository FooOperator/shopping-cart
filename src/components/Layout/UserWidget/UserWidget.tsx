import useAuth0 from '@auth0/auth0-react/src/use-auth0';
import { default as S } from './UserWidget.styled';

const UserWidget: React.FC = () => {
    const { loginWithRedirect, loginWithPopup, user, isAuthenticated } = useAuth0();

    const handleSignIn = () => {
        loginWithPopup();
    }

    if (!isAuthenticated) {
        return (
            <S.Container>
                <S.Button onClick={handleSignIn}>Sign In</S.Button>
                <S.Button>Sign Up</S.Button>
            </S.Container>
        );
    }

    return (
        <S.Container>
            <S.IconHolder>
                <S.Icon />
            </S.IconHolder>
        </S.Container>
    );
}

export default UserWidget;