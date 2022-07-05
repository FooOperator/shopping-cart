import styled from "styled-components";

const Article = styled.article<{ textAlign: 'string' }>`
    text-align: ${({ textAlign }) => textAlign};
    padding: 2rem;
    
    p {

    }
    
    h1 {
        font-size: 2rem;
    }
    h2 {
        font-size: 1.8rem;
    }
    h3 {
        font-size: 1.6rem;
    }
    h4 {
        font-size: 1.4rem;
    }
    h5 {
        font-size: 1.2rem;
    }
    h6 {
        font-size: 1.1rem;
    }
`;

export default {
    Article
}