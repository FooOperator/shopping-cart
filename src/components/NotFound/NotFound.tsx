import { default as S } from './NotFound.styled';

const NotFound = () => {
    return (
        <S.Container>
            <S.Notice>
                Sorry, but this page does not exist.
            </S.Notice>
        </S.Container>
    );
}

export default NotFound;