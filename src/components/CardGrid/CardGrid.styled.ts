import styled from "styled-components"
import Card from "../Card/Card";

const Grid = styled.div`
    display: grid;
    padding: 1rem;
    gap: .1rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

`;

export default { Grid }
