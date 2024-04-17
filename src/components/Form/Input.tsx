interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  wrapperClassName?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  type = "text",
  onChange,
  disabled,
  label,
  wrapperClassName,
}) => {
  return (
    <div className={wrapperClassName}>
      {label && <p className="mb-2 text-xl  text-black">{label}</p>}
      <input
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        className="
            w-full
            rounded-md 
            border-2 
            border-slate-200
            bg-slate-50
            p-4 
            text-lg
            text-black
            outline-none
            transition
            focus:border-2
            focus:border-sky-400
            disabled:cursor-not-allowed
            disabled:bg-slate-400
            disabled:opacity-70
          "
      />
    </div>
  );
};

export default Input;
