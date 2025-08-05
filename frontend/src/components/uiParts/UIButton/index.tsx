import { Button, type ButtonProps } from '@headlessui/react';
import Link, { type LinkProps } from 'next/link';
import type { PropsWithChildren } from 'react';

type ButtonPropsType = {
  isLink: false;
} & ButtonProps;

type LinkPropsType = {
  isLink: true;
} & LinkProps;

type UIButtonProps = ButtonPropsType | LinkPropsType;

// 型ガードでisLinkを判定
const isLinkProps = (props: UIButtonProps): props is LinkPropsType =>
  props.isLink === true;

// isLinkが渡された場合はlink、それ以外はbutton
export const UIButton = ({
  children,
  ...props
}: PropsWithChildren<UIButtonProps>): JSX.Element =>
  isLinkProps(props) ? (
    <Button
      {...props}
      as={Link}
      className="flex h-[40px] items-center rounded-full bg-black px-4 text-sm text-white data-[hover]:bg-gray-800 data-[hover]:data-[active]:bg-gray-900"
    >
      {children}
    </Button>
  ) : (
    <Button
      {...props}
      className="h-[40px] rounded-full bg-black px-4 text-sm text-white data-[hover]:bg-gray-800 data-[hover]:data-[active]:bg-gray-900"
    >
      {children}
    </Button>
  );
