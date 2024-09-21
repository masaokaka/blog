import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  text: string;
  options: { path: string; text: string }[];
};

export const UIPopover = ({ text, options }: Props): JSX.Element => {
  const { asPath } = useRouter();
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <PopoverButton
            type="button"
            className="flex items-center outline-none"
          >
            <p className="mr-1">{text}</p>
            <ChevronDownIcon className={clsx('size-5', open && 'rotate-180')} />
          </PopoverButton>
          <PopoverPanel
            anchor="bottom end"
            transition
            className="data-[open]:opacity-1 w-[160px] rounded-2xl border bg-white text-sm/6 transition duration-100 ease-in-out [--anchor-gap:16px] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-2">
              {options.map(({ path, text }) => {
                const isCurrentPage = `${asPath}` === path;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'block rounded-2xl px-4 py-2 transition duration-200 ease-in-out',
                      isCurrentPage
                        ? 'bg-black text-white'
                        : 'text-black hover:bg-black/5',
                    )}
                    onClick={close}
                  >
                    {text}
                  </Link>
                );
              })}
            </div>
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
};
