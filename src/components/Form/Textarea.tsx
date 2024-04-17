interface TextareaProps {
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
  wrapperClassName?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  value,
  onChange,
  disabled,
  label,
  wrapperClassName,
}) => {
  return (
    <div className={wrapperClassName}>
      {label && <p className="mb-2 text-xl text-black">{label}</p>}
      <textarea
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="
            w-full
            rounded-md 
            border-2 
            border-gray-200
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
      ></textarea>
    </div>
  );
};

export default Textarea;
