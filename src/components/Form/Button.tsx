export interface ButtonProps {
  label: string;
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  fullWidth,
  onClick,
  disabled,
  className,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${fullWidth ? "w-full" : "w-fit"} ${className} rounded-full border border-gray-400 px-4 py-2 transition duration-300 ease-out hover:bg-black/5`}
    >
      {label}
    </button>
  );
};

export default Button;
