import styled from 'styled-components';

export const Container = styled.main`

button {
    background: transparent;
    border: none;

    .icon-return {
        font-size: 2.5rem;
        color: ${props => props.theme.colors.orange};
        transition: all 0.2s ease-in-out;

        &:hover {
            filter: brightness( 0.8 );
        }
    }
}
`;