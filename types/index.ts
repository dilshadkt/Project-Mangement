export type PrimaryButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  loading?: boolean;
};
