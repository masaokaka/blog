import { Button, type ButtonProps } from '@headlessui/react';
import Link, { type LinkProps } from 'next/link';
import type { PropsWithChildren } from 'react';

type ButtonPropsType = {
  isLink: false;
  icon?: JSX.Element;
} & ButtonProps;

type LinkPropsType = {
  isLink: true;
  icon?: JSX.Element;
} & LinkProps;

type UIButtonProps = PropsWithChildren<ButtonPropsType | LinkPropsType>;

// 型ガードでisLinkを判定
const isLinkProps = (props: UIButtonProps): props is LinkPropsType =>
  props.isLink === true;

// isLinkが渡された場合はlink、それ以外はbutton
export const UIButton = (props: UIButtonProps): JSX.Element =>
  isLinkProps(props) ? (
    <Button
      {...props}
      as={Link}
      className="flex h-[40px] items-center rounded-full bg-black px-4 text-sm text-white data-[hover]:bg-gray-800 data-[hover]:data-[active]:bg-gray-900"
    >
      {props.icon}
      {props.children}
    </Button>
  ) : (
    <Button
      {...props}
      className="h-[40px] rounded-full bg-black px-4 text-sm text-white data-[hover]:bg-gray-800 data-[hover]:data-[active]:bg-gray-900"
    >
      {props.icon}
      {props.children}
    </Button>
  );
