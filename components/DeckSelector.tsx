import Select, {
  components,
  OptionProps,
  SingleValueProps,
} from "react-select";
import styled from "styled-components";

import { COLUMN_ICONS, DECK_COLORS, DECK_LABELS } from "../lib/constants";
import { Deck } from "../lib/types";

const DeckSelect = styled(Select)`
  min-width: 175px;
` as typeof Select;

const OptionLabel = styled.span`
  margin-left: 8px;
`;

type DeckOption = { value: Deck; label: string };

const SingleValue = ({
  children,
  ...props
}: SingleValueProps<DeckOption, false>) => {
  const { value } = props.data;
  const deckColors = DECK_COLORS[value];

  return (
    <components.SingleValue {...props}>
      {deckColors.length > 0 ? (
        <>
          {deckColors.map((column) => (
            <i key={column} className={COLUMN_ICONS[column]} />
          ))}
          <OptionLabel>{children}</OptionLabel>
        </>
      ) : (
        children
      )}
    </components.SingleValue>
  );
};

const Option = (props: OptionProps<DeckOption, false>) => {
  const { value, label } = props.data;
  const deckColors = DECK_COLORS[value];

  return (
    <components.Option {...props}>
      {deckColors.length > 0 ? (
        <>
          {deckColors.map((column) => (
            <i key={column} className={COLUMN_ICONS[column]} />
          ))}
          <OptionLabel>{label}</OptionLabel>
        </>
      ) : (
        label
      )}
    </components.Option>
  );
};

interface Props {
  value: Deck;
  onChange: (selectedValue: Deck) => void;
}

const DeckSelector = (props: Props) => {
  const { value, onChange } = props;

  return (
    <DeckSelect
      value={{ value: value, label: DECK_LABELS[value] }}
      onChange={(selectedOption) => {
        if (selectedOption) {
          onChange(selectedOption.value);
        }
      }}
      options={Object.values(Deck).map((deck) => ({
        value: deck,
        label: DECK_LABELS[deck],
      }))}
      isMulti={false}
      components={{ Option, SingleValue }}
      instanceId="deck-select"
    />
  );
};

export default DeckSelector;