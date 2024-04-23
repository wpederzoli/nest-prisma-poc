import Link from "next/link";
import Logo from "../Icons/Logo";
import { Button } from "../Button";

type TopbarProps = {
  btnText: string;
  styles?: string;
};

const Topbar: React.FC<TopbarProps> = ({ btnText, styles }: TopbarProps) => {
  styles = `flex justify-between items-center w-full ${styles}`;

  return (
    <div className={styles}>
      <div className="">
        <Logo width={167} height={26} />
      </div>
      <Link href="/create">
        <Button text={btnText} className="" fontStyle="text-white" />
      </Link>
    </div>
  );
};

export default Topbar;
