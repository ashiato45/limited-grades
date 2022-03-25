import clsx from "clsx";
import { forwardRef } from "react";

import { HOVER_CLASSES, TRANSITION_CLASSES } from "lib/styles";
import { Card, Rarity } from "lib/types";

// Note: if we try to use string interpolation to create these,
// TailwindCSS stops recognizing them and purges them from the CSS
const BORDER_COLORS = {
  [Rarity.COMMON]: clsx(
    "border-common dark:border-neutral-300",
    TRANSITION_CLASSES
  ),
  [Rarity.UNCOMMON]: "border-uncommon",
  [Rarity.RARE]: "border-rare",
  [Rarity.MYTHIC]: "border-mythic",
};

export interface Props {
  card: Card;
  enableHover?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
}

const CardBubble = forwardRef<HTMLButtonElement, Props>(
  ({ card, enableHover = false, onClick, onMouseEnter }, ref) => {
    const cardNameElement = enableHover ? (
      <span className="animated-underline">{card.name}</span>
    ) : (
      card.name
    );
    return (
      <button
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        className={clsx(
          "px-2 mb-1 last:mb-0 w-full text-left",
          "bg-white dark:bg-neutral-700 border-l-[3px]",
          HOVER_CLASSES,
          TRANSITION_CLASSES,
          BORDER_COLORS[card.rarity],
          { "animated-underline-trigger": enableHover }
        )}
        type="button"
        ref={ref}
      >
        {cardNameElement}
      </button>
    );
  }
);

CardBubble.displayName = "CardBubble";

export default CardBubble;
