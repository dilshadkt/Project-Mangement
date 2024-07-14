import React from "react";
import "@testing-library/jest-dom";
import { render as rtlRender, screen } from "@testing-library/react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import configureStore, { MockStoreEnhanced } from "redux-mock-store"; // FOR CREATE A MOCK STORE
import { Provider } from "react-redux";
import { RootState } from "@/libs/store";
import { initialStickData, initialUserData } from "@/constants";

const middlewares: any = [];
const mockStore = configureStore<RootState>(middlewares);

interface RenderOption {
  initialState?: Partial<RootState>;
  store?: MockStoreEnhanced<RootState, {}>;
}

const render = (
  component: React.ReactElement,
  {
    initialState,
    store = mockStore(initialState as RootState),
  }: RenderOption = {}
) => {
  return rtlRender(<Provider store={store}>{component}</Provider>);
};
describe("Primary button", () => {
  let store: MockStoreEnhanced<RootState, {}>;

  beforeEach(() => {
    store = mockStore({
      user: initialUserData,
      stick: initialStickData,
    });
  });
  it("renders the button without any error", () => {
    const { container } = render(<PrimaryButton text="Test" />, { store });
    expect(container).toBeInTheDocument();
  });

  it("renders the button with text", () => {
    render(<PrimaryButton text="Test" />, { store });
    const buttonElement = screen.getByRole("button", { name: /Test/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it("disables the button and shows loading image when loading", () => {
    store = mockStore({
      user: { ...initialUserData, loading: true },
      stick: initialStickData,
    });

    render(<PrimaryButton text="Click me" />, { store });

    const loadingImage = screen.getByAltText("loading");
    expect(loadingImage).toBeInTheDocument();
  });
});
