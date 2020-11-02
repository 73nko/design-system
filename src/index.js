import React, { useState } from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, darkTheme, defaultTheme } from "./utils";
import {
    PrimaryButton,
    SecondaryButton,
    TertiaryButton,
} from "./components/Buttons";

export const App = () => {
    const [useDarkTheme, setUseDarkTheme] = useState(false);
    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
            <button
                style={{
                    margin: "0 16px 24px",
                    padding: "8px",
                    background: "none",
                    cursor: "pointer",
                    border: "2px solid #000",
                    marginTop: "60px",
                }}
                onClick={() => setUseDarkTheme(true)}
            >
                Dark theme
            </button>
            <button
                style={{
                    margin: "0 16px 24px",
                    padding: "8px",
                    background: "none",
                    cursor: "pointer",
                    border: "2px solid #000",
                    marginTop: "60px",
                }}
                onClick={() => setUseDarkTheme(false)}
            >
                Default theme
            </button>

            <div
                style={{
                    background: useDarkTheme
                        ? defaultTheme.primaryColor
                        : darkTheme.primaryColor,
                    width: "100vw",
                    height: "90vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <GlobalStyle />
                <PrimaryButton>Primary Button</PrimaryButton>
                <SecondaryButton>Secondary Button</SecondaryButton>
                <TertiaryButton>Tertiary Button</TertiaryButton>
            </div>
        </ThemeProvider>
    );
};

ReactDom.render(<App />, document.querySelector("#root"));
