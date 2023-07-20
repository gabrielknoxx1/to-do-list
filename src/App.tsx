import { ThemeProvider } from "styled-components";
import { Board } from "./pages/Board";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Board />
      <GlobalStyle />
    </ThemeProvider>
  );
}
