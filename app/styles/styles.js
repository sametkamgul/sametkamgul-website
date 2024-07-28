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
                    width: 100%;
                }
                #__next {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    width: 100%;
                }
            `}
        />
        {children}
    </>
);

export default GlobalStyle;
