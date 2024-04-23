type TextInputProps = {
  label: string;
  placeholder: string;
  value: string | number;
  onChange: (e: string | number) => void;
  type?: string;
  className?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  type,
  value,
  onChange,
  className,
}: TextInputProps) => {
  return (
    <div className={className}>
      <label className="text-neutral-400 text-sm font-medium font-['DM Sans'] leading-[21px]">
        {label}
      </label>
      <div className="relative">
        <input
          placeholder={placeholder}
          className="appearance-none bg-zinc-800 text-sm text-neutral-400 w-full focus:outline-none focus:border-zinc-400 h-10 rounded-lg border border-zinc-500 p-1"
          onChange={(e) => onChange(e.target.value)}
          type={type}
        />
        {type == "number" && (
          <h1 className="text-white absolute right-2 top-2">€</h1>
        )}
      </div>
    </div>
  );
};

export default TextInput;
