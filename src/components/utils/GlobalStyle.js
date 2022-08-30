import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  color: #010101;}

ul {
  padding: 0;
  margin: 0;
  list-style-type: none; 
}

h1, h2, h3, p {
  padding: 0;
  margin: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}
`;