import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { verifyToken } from "@/utils/verifyToken";
import { logout } from "@/libs/features/user/userSlice";
import isAuth from "@/components/protect/IsAuth";

//MOCKING NECESSARY MODULES
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));
jest.mock("@/utils/verifyToken", () => ({
  verifyToken: jest.fn(),
}));
jest.mock("@/libs/features/user/userSlice", () => ({
  logout: jest.fn(),
}));

const MockComponent = () => <div>Protected Content</div>;
const WrappedComponent = isAuth(MockComponent);

describe("is Auth HOC", () => {
  const mockDispatch = jest.fn();
  const mockRouterReplace = jest.fn();
  beforeEach(() => {
    (useDispatch as any).mockReturnValue(mockDispatch);
    (useRouter as jest.Mock).mockReturnValue({ replace: mockRouterReplace });
    jest.clearAllMocks();
  });
  it("renders loading state initially", () => {
    (verifyToken as jest.Mock).mockResolvedValue({ status: false });

    render(<WrappedComponent />);

    expect(screen.getByAltText("loading")).toBeInTheDocument();
  });

  it("redirects to login if not authenticated", async () => {
    (verifyToken as jest.Mock).mockResolvedValue({ status: false });

    render(<WrappedComponent />);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(logout());
      expect(mockRouterReplace).toHaveBeenCalledWith("/auth/login");
    });
  });
  it("renders the component if authenticated", async () => {
    (verifyToken as jest.Mock).mockResolvedValue({ status: true });

    render(<WrappedComponent />);

    await waitFor(() => {
      expect(screen.getByText("Protected Content")).toBeInTheDocument();
    });
  });
});
