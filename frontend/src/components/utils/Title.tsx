type TitleProps = {
  text: string;
  className?: string;
};

export default function Title({ text, className }: TitleProps) {
  return <h1 className={`text-white font-poppins-extre-bold ${className}`}>{text}</h1>;
}
