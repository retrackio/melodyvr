import React, { useState, useMemo } from 'react';
import * as Styled from './style';

interface Props<V> {
  id: string;
  leftValue: V;
  leftLabel: string | React.ReactNode;
  rightValue: V;
  rightLabel: string | React.ReactNode;
  value: V;
  onChange: (value: V) => void;
}

function ToggleButton<V = string>({
  value,
  leftLabel,
  leftValue,
  rightLabel,
  rightValue,
  onChange,
  id,
}: Props<V>) {
  const [checked, setChecked] = useState<boolean>(value === rightValue);
  const handleChange = useMemo(
    () => ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(target.checked);
      onChange(target.checked ? rightValue : leftValue);
    },
    [],
  );
  return (
    <Styled.Container>
      <Styled.Label>{leftLabel}</Styled.Label>
      <Styled.CheckBoxWrapper>
        <Styled.CheckBox
          id={id}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <Styled.CheckBoxLabel htmlFor={id} />
      </Styled.CheckBoxWrapper>
      <Styled.Label>{rightLabel}</Styled.Label>
    </Styled.Container>
  );
}

export default ToggleButton;
