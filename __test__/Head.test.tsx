import React from "react";
import "@testing-library/jest-dom";
import { render as rtlRender, screen } from "@testing-library/react";
import configureStore, { MockStoreEnhanced } from "redux-mock-store"; // FOR CREATE A MOCK STORE
import { Provider } from "react-redux";
import { RootState } from "@/libs/store";
import Header from "@/components/header/Header";
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
describe("Header component", () => {
  let store: MockStoreEnhanced<RootState, {}>;

  beforeEach(() => {
    store = mockStore({
      user: initialUserData,

      stick: initialStickData,
    });
  });
  it("Render the header without any error", () => {
    const { container } = render(<Header heading="Test" />, { store });
    expect(container).toBeInTheDocument();
  });

  it("renders the header with heading", () => {
    render(<Header heading="Test1" />, { store });
    const headingElement = screen.getByText("Test1");
    expect(headingElement).toBeInTheDocument();
  });

  it("renders the value if provided", () => {
    render(<Header heading="Notifications" value={5} />, { store });
    const valueElement = screen.getByText("5");
    expect(valueElement).toBeInTheDocument();
  });

  it("does not render the value if not provided", () => {
    render(<Header heading="Notifications" />, { store });
    const valueElement = screen.queryByText("5");
    expect(valueElement).not.toBeInTheDocument();
  });
  it("render the user name's first letter initial from the store", () => {
    store = mockStore({
      user: {
        ...initialUserData,
        userData: { ...initialUserData.userData, name: "Jilshad" },
      },
      stick: initialStickData,
    });
    render(<Header heading="test" />, { store });
    const initialElement = screen.getByText("J");
    expect(initialElement).toBeInTheDocument();
  });

  it("The user name button contain link to the settings", () => {
    render(<Header heading="test" />, { store });
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "/settings");
  });
});
