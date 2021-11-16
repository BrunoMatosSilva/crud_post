import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};

  scrollbar-width: thin;          /* "auto" or "thin" */
  scrollbar-color: ${props => props.theme.colors.gray400} ${props => props.theme.colors.orange};   /* scroll thumb and track */
  }

  body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: ${props => props.theme.colors.gray400};        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: ${props => props.theme.colors.orange};    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px solid ${props => props.theme.colors.gray400};  /* creates padding around scroll thumb */
}

  h1 {
  background-color: ${props => props.theme.colors.orange};
  background: -webkit-linear-gradient(45deg,#FF7F00, #FFFF00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
