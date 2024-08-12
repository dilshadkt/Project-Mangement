export type PrimaryButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  loading?: boolean;
};

export type ActionButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  ButtonStyle?: string;
  isLoading?: boolean;
};
