import { HiDotsVertical } from "react-icons/hi";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FaArrowCircleRight } from "react-icons/fa";

export type IconProps = {
  icon: "dots" | "plus" | "heart" | "dollar" | "arrow";
  text?: string;
  className?: string; // optional styling
};

const iconMap = {
  dots: HiDotsVertical,
  plus: CiCirclePlus,
  heart: FaRegHeart,
  dollar: HiOutlineCurrencyDollar,
  arrow: FaArrowCircleRight
};

export default function Icon({ icon, text, className }: IconProps) {
  const IconComponent = iconMap[icon];

  return (
    <div className={`flex items-center gap-1 ${className || ""}`}>
      <IconComponent className="w-5 aspect-[1/1]" />
      {text && <span>{text}</span>}
    </div>
  );
}
