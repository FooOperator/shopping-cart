import { default as S } from './Article.styled';

interface ArticleProps {
    children: React.ReactNode;
    textAlign: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
}

const Article: React.FC<ArticleProps> = ({ children, textAlign = 'left' }) => {
    return (
        <S.Article textAlign={textAlign}>
            {children}
        </S.Article>
    );
}

export default Article;