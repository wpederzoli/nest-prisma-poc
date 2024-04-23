type LabelProps = {
  text: string;
  className: string;
};

const Label: React.FC<LabelProps> = ({ text, className }: LabelProps) => {
  const style = `text-center text-white rounded-[41px] font-poppins p-2 pl-3 pr-3 ${className}`;
  return <div className={style}>{text}</div>;
};

export default Label;
