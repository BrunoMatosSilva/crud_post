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