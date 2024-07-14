import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import StickPaper from "@/components/Stick-paper";

const mockSetSelectedStick = jest.fn();

const renderComponent = (props = {}) => {
  const defaultProps = {
    title: "Test Title",
    id: "test-id",
    image: null,
    desc: "<p>Test Description</p>",
    setSelectedStick: mockSetSelectedStick,
  };

  return render(<StickPaper {...defaultProps} {...props} />);
};

describe("stick paper", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("render the component without any errors", () => {
    const { container } = renderComponent();
    expect(container).toBeInTheDocument();
  });
  it("render the title", () => {
    renderComponent();
    const titleElement = screen.getByText("Test Title");
    expect(titleElement).toBeInTheDocument();
  });
  it("renders the description", () => {
    renderComponent();
    const descElement = screen.getByText("Test Description");
    expect(descElement).toBeInTheDocument();
  });
  it("calls handlemodal on double click ", () => {
    renderComponent();
    const stickPaperElement = screen.getByText("Test Title").closest("div");
    if (stickPaperElement) {
      fireEvent.doubleClick(stickPaperElement);
      expect(mockSetSelectedStick).toHaveBeenCalledWith("test-id");
    } else {
      throw new Error("stick paper element not found");
    }
  });
  it("renders the default texture image", () => {
    renderComponent();
    const textureImage = screen.getByAltText("paper texture");
    expect(textureImage).toBeInTheDocument();
  });
  it("render the provided image", () => {
    const imageUrl = "/image-url.jpg";
    renderComponent({ image: imageUrl });
    const textureImage = screen.getByAltText("bg-image");
    expect(textureImage).toBeInTheDocument();
  });
  it("does not render the description if not provided", () => {
    renderComponent({ desc: null });

    const descElement = screen.queryByText("<p>Test Description</p>");
    expect(descElement).not.toBeInTheDocument();
  });
});
