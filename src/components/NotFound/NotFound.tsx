import { Article } from '../Article';
import { default as S } from './NotFound.styled';

const NotFound = () => {
    return (
        <Article textAlign='middle'>
            <p>
                Sorry, but this page does not exist.
            </p>
        </Article>
    );
}

export default NotFound;