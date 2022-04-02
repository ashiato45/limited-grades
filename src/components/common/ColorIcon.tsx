import clsx from "clsx";
import BlackIcon from "mana-font/svg/b.svg";
import ColorlessIcon from "mana-font/svg/c.svg";
import GreenIcon from "mana-font/svg/g.svg";
import RedIcon from "mana-font/svg/r.svg";
import BlueIcon from "mana-font/svg/u.svg";
import WhiteIcon from "mana-font/svg/w.svg";
import { FC, SVGProps } from "react";

import MulticolorIcon from "assets/multicolor.svg";
import { TRANSITION_CLASSES } from "lib/styles";
import { Column } from "lib/types";

const BG_COLOR_CLASSES: Record<Column, string> = {
  [Column.WHITE]: "p-[0.125em] bg-[#f0f2c0]",
  [Column.BLUE]: "p-[0.125em] bg-[#b5cde3]",
  [Column.BLACK]: "p-[0.125em] bg-[#aca29a]",
  [Column.RED]: "p-[0.125em] bg-[#db8664]",
  [Column.GREEN]: "p-[0.125em] bg-[#93b483]",
  [Column.MULTICOLOR]:
    "bg-gradient-to-tr from-[#cca54f] via-[#e0d3bb] to-[#cca54f]",
  [Column.COLORLESS]: "p-[0.125em] bg-[#beb9b2]",
};

const COLOR_ICONS: Record<Column, FC<SVGProps<SVGSVGElement>>> = {
  [Column.WHITE]: WhiteIcon,
  [Column.BLUE]: BlueIcon,
  [Column.BLACK]: BlackIcon,
  [Column.RED]: RedIcon,
  [Column.GREEN]: GreenIcon,
  [Column.MULTICOLOR]: MulticolorIcon,
  [Column.COLORLESS]: ColorlessIcon,
};

interface Props {
  color: Column;
  className?: string;
}

const ColorIcon: FC<Props> = ({ color, className }) => {
  const SvgIcon = COLOR_ICONS[color];
  return (
    // 1.375em = 1em + 0.125em padding * 2 + 0.0625em border * 2
    <SvgIcon
      width="1.375em"
      height="1.375em"
      className={clsx(
        "inline-block text-black rounded-full border-[0.0625em] border-neutral-300 dark:border-black",
        BG_COLOR_CLASSES[color],
        TRANSITION_CLASSES,
        className
      )}
    />
  );
};

export default ColorIcon;