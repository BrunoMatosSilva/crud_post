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

.card-post {
    background-color: ${props => props.theme.colors.gray400};
    padding: 30px 70px;
    border-radius: 15px;
}

.card-post h1{
    font-family: Roboto;
    font-weight: 800;
    text-align: center;

    color: ${props => props.theme.colors.orange};

    font-size: 3rem;
    margin-bottom: 5px;
}

.line-post {
    height: 2px;
    background-color: #3E445B;
}

.card-body-post {
    margin-top: 25px;

}

.fields {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 7px;
    font-size: 1.2rem;

    color: #D2DAF5;

    font-family: Roboto;
}

input, textarea {
    width: 100%;
    border-radius: 10px;
    border: 0;
    outline: 0;

    font-size: 1.2rem;

    padding-left: 15px;
}

input {
    height: 45px;
}

textarea {
    height: 190px;
    resize: none;

    padding-top: 10px;
}

.btn-post{
    margin-top: 30px;
    text-align: center;

}

.btn-post button{
    font-family: Roboto;
    font-weight: 800;
    font-size: 1.3rem;

    padding: 5px 50px;
    color: ${props => props.theme.colors.gray400};
    background-color: #3DECB1;

    border: 0;
    border-radius: 10px;

    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.8) ;
    }

}

.error-message {
    padding-top: 0.5rem;
    color: rgb(240, 47, 47);
    font-weight: bold;
}
`;