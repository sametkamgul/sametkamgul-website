import { Global, css } from '@emotion/react';

const GlobalStyle = ({ children }) => (
    <>
        <Global
            styles={css`
                html,
                body {
                    font-family: 'Geist Sans', sans-serif;
                    scoll-behavior: smooth;
                    cursor: default;
                }
                #__next {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }
            `}
        />
        {children}
    </>
);

export default GlobalStyle;
