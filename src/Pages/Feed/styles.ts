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

.btn-new{
        border-radius: 5px;
        border: none;
        padding: 0.5rem;
        background: ${props => props.theme.colors.white} ;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8)
        }
    }
`;

export const ContainerMain = styled.main`
display: flex;
justify-content: center;
align-items: center;
padding-top: 2.5rem;

.card {
    background: ${props => props.theme.colors.white};
    border-radius: 5px;
    margin-bottom: 1rem;
}

.cards .card h2 {
    display: flex;
    flex-wrap: wrap;
    max-width: 500px;
    color: ${props => props.theme.colors.blue100};
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

    color: ${props => props.theme.colors.black};
}

.btns {
    display: flex;
    justify-content: space-between;
}

.btns button {
    color: rgba(255, 255, 255, 0.938);
    font-size: 1.3rem;
    border: 0;

    border-radius: 10px;

    font-family: Roboto;
    font-weight: 700;
    
    cursor: pointer;

    padding: 5px 40px;
    margin: 1rem;
}

.btn-edit button{
    background-color: #80D8FF;
}

.btn-readmore button{
    background-color: #3DECB1;
    
}

.btn-delete button{
    background-color: rgb(241, 45, 45);
}

.loading {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;
