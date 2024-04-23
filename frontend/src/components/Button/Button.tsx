type ButtonProps = {
  text?: string;
  onClick?: () => void;
  className?: string;
  fontStyle?: string;
  disable?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  fontStyle,
  disable,
}: ButtonProps) => {
  const style = `px-4 py-3.5 bg-mvst_yellow rounded-[30px] justify-center items-center gap-2.5 inline-flex ${className}`;
  const fontS = `w-[83px] text-center text-[14px] font-normal font-poppins leading-[14px] grow shrink ${fontStyle}`;

  return (
    <div className={style} onClick={onClick}>
      <button className={fontS} disabled={disable}>
        {text}
      </button>
    </div>
  );
};

export default Button;
