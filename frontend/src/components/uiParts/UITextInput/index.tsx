import { Input, type InputProps } from '@headlessui/react';

type UITextInputProps = InputProps;

// isLinkが渡された場合はlink、それ以外はbutton
export const UITextInput = ({ ...props }: UITextInputProps): JSX.Element => (
  <Input
    {...props}
    className="h-[40px] rounded-full border border-gray-300 px-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    type="text"
    placeholder="Enter text here"
  />
);
