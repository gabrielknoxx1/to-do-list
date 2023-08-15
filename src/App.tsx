import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { Board } from "./pages/Board";
import { client } from "./services/api/apollo";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={defaultTheme}>
        <Board />
        <GlobalStyle />
      </ThemeProvider>
    </ApolloProvider>
  );
}
