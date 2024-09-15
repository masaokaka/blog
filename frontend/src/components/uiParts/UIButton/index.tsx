import { Button } from '@headlessui/react';

type Props = {
  text: string;
  icon?: JSX.Element;
};

export const UIButton = ({ text, icon }: Props): JSX.Element => (
  <Button className="h-[40px] rounded-full bg-black px-4 text-sm text-white data-[hover]:bg-gray-800 data-[hover]:data-[active]:bg-gray-900">
    {icon}
    {text}
  </Button>
);
