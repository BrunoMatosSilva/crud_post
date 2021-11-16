import styled from 'styled-components';

export const ContainerHeader = styled.header`
display: flex;
padding: 20px;
flex-direction: row;
justify-content: center;
background-color: ${props => props.theme.colors.gray400};

div { 
    width: 1180px;
    display: flex;
    justify-content: space-between; 
}
`;

export const ContainerMain = styled.main`
display: flex;
justify-content: center;
align-items: center;
padding-top: 2.5rem;

.card {
    background: ${props => props.theme.colors.gray500};
    border-radius: 5px;
    margin-bottom: 1rem;
}

.cards .card h2 {
    display: flex;
    flex-wrap: wrap;
    max-width: 500px;
    color: ${props => props.theme.colors.orange};
    padding-left: 1rem;
}

img {
    width: 20px;
    margin-left: 40px;

    cursor: pointer;
}

.cards .card header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 15px;
}

.card header h2 {
    font-family: Noto Sans;
    font-weight: 700;

    color: #D2DAF5;

    font-size: 1.7rem;
}

.line {
    background-color: #3E445B;
    height: 2px;
}

p {
    margin-top: 20px;
    font-size: 1.2rem;
    
    max-width: 500px;

    font-family: Noto Sans;
    font-weight: 500;
    
    padding: 0 1rem 1rem 1rem;

    color: ${props => props.theme.colors.white};
}
`;