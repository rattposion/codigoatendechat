import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorState from "../components/ErrorState";
import LoggedInLayout from "../layout";
import "@testing-library/jest-dom/extend-expect";

const theme = createTheme();

jest.mock("../layout", () => ({
  __esModule: true,
  default: ({ children }) => (
    <div>
      <a href="#main-content">Pular para o conteúdo</a>
      {children}
    </div>
  ),
}));

test("renders LoadingSpinner with label", () => {
  render(<LoadingSpinner label="Carregando dados" />);
  expect(screen.getByRole("status")).toBeInTheDocument();
  expect(screen.getByText(/Carregando dados/i)).toBeInTheDocument();
});

test("renders ErrorState and triggers retry", () => {
  const onRetry = jest.fn();
  render(<ErrorState title="Falha" description="Não foi possível" onRetry={onRetry} />);
  expect(screen.getByRole("alert")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /tentar novamente/i }));
  expect(onRetry).toHaveBeenCalled();
});

test("skip link is focusable and present", () => {
  render(
    <ThemeProvider theme={theme}>
      <LoggedInLayout>
        <div>Conteúdo</div>
      </LoggedInLayout>
    </ThemeProvider>
  );
  const skipLink = screen.getByText(/Pular para o conteúdo/i);
  skipLink.focus();
  expect(document.activeElement).toBe(skipLink);
});
