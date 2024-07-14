import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Drawyer from "@/components/drawyer/index";

describe("Drawyer component", () => {
  const renderComponent = (props = {}) => {
    return render(
      <Drawyer id="test-id" {...props}>
        <p>drawyer content</p>
      </Drawyer>
    );
  };
  it("render without any error or crashing", () => {
    const { container } = renderComponent();
    expect(container).toBeInTheDocument();
  });
  it("applies the correct position class", () => {
    const { container } = renderComponent({ position: "drawer-start" });
    expect(container.firstChild).toHaveClass("drawer drawer-start z-[1000]");
  });
  it("renders children correctly", () => {
    renderComponent();
    expect(screen.getByText(/drawyer content/i)).toBeInTheDocument();
  });
  it("renders the background image correctly", () => {
    renderComponent();
    const img = screen.getByAltText("drawer");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      "src",
      "/_next/image?url=%2Fimages%2Fpaper.jpg&w=828&q=75"
    );
  });
  it("renders with additional className", () => {
    const { container } = renderComponent({ className: "extra-class" });
    expect(container.querySelector(".relative")).toHaveClass("extra-class");
  });
  it("opens the drawer when the checkbox is checked", () => {
    renderComponent();
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it("closes the drawer when overlay is clicked", () => {
    renderComponent();
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    const overlay = screen.getByLabelText("close sidebar");
    fireEvent.click(overlay);
    expect(checkbox).not.toBeChecked();
  });
});
