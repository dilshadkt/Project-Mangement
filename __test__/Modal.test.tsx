import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import Modal from "@/components/modal/index";
import { editSticks, setSticks } from "@/libs/features/stick/stickSlice";
import { deleteStick, saveChanges } from "@/services/stickService";
import { RootState } from "@/libs/store";
import { initialUserData } from "@/constants";

// Mock the stickService module
jest.mock("@/services/stickService", () => ({
  deleteStick: jest.fn(),
  saveChanges: jest.fn(),
}));

const middlewares: any = [];
const mockStore = configureStore<RootState>(middlewares);

describe("Modal", () => {
  let store: MockStoreEnhanced<RootState, {}>;
  beforeEach(() => {
    store = mockStore({
      stick: {
        stick: {
          stiks: [
            {
              _id: "test-id",
              title: "Test Title",
              desc: "<p>Test Description</p>",
            },
          ],
        },
        error: null,
        loading: false,
        fetchError: "",
        success: false,
      },
      user: initialUserData,
    });
  });
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <Modal stickId="test-id" />
      </Provider>
    );
  it("renders the modal with initial data", () => {
    renderComponent();
    expect(screen.getByPlaceholderText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });
  it("enables edit mode when edit button is clicked", () => {
    renderComponent();
    fireEvent.click(screen.getByTitle("Edit"));
    expect(screen.getByPlaceholderText("Test Title")).not.toHaveAttribute(
      "readOnly"
    );
  });

  it("saves changes and updates the store", async () => {
    const mockSaveChanges = saveChanges as jest.MockedFunction<
      typeof saveChanges
    >;
    mockSaveChanges.mockResolvedValue({
      _id: "test-id",
      title: "Updated Title",
      desc: "<p>Updated Description</p>",
    });

    renderComponent();
    fireEvent.click(screen.getByTitle("Edit"));
    fireEvent.change(screen.getByPlaceholderText("Test Title"), {
      target: { value: "Updated Title" },
    });
    fireEvent.click(screen.getByTitle("Save"));

    await waitFor(() => {
      expect(saveChanges).toHaveBeenCalledWith("test-id", {
        title: "Updated Title",
      });
      expect(store.getActions()).toContainEqual(
        editSticks({
          id: "test-id",
          stick: {
            _id: "test-id",
            title: "Updated Title",
            desc: "<p>Updated Description</p>",
          },
        })
      );
    });
  });
  it("deletes the stick and updates the store", async () => {
    const mockDeleteStick = deleteStick as jest.MockedFunction<
      typeof deleteStick
    >;
    mockDeleteStick.mockResolvedValue();

    renderComponent();
    fireEvent.click(screen.getByTitle("delete"));

    await waitFor(() => {
      expect(deleteStick).toHaveBeenCalledWith("test-id");
      expect(store.getActions()).toContainEqual(setSticks([]));
    });
  });
});
