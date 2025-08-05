import { Select } from '@headlessui/react';

type Props = {
  options: { value: string; text: string }[];
};

export const UISelect = ({ options }: Props): JSX.Element => (
  <Select>
    {options.map(({ value, text }) => (
      <option key={value} value={value}>
        {text}
      </option>
    ))}
  </Select>
);
