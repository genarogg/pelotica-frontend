import Link from "next/link";

interface AProps {
  to: string;
  text?: string;
  type?: string;
  children?: React.ReactNode;
}

const A: React.FC<AProps> = ({ to, text, children, type }) => {
  if (type === "a") {
    return (
      <a href={to} target="_blank" rel="noreferrer">
        {text || children}
      </a>
    );
  }

  return <Link href={to}>{text || children}</Link>;
};

export default A;
