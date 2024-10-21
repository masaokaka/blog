import { UIPopover } from '@/src/components/uiParts/UIPopover';
import {
  Button,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars2Icon } from '@heroicons/react/16/solid';
import { MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Header = () => {
  const { pathname } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClose = () => setMenuOpen(false);
  const handleMenuOpen = () => setMenuOpen(true);
  return (
    <header className="flex h-[60px] items-center bg-white px-6 md:h-[100px] md:px-16">
      <Link href="/" className="mr-auto">
        <Image
          src="/images/openai.svg"
          alt="icon"
          width={40}
          height={40}
          className="size-8 md:size-10"
        />
      </Link>
      {/* PCナビゲーション */}
      <nav className="hidden md:block">
        <ul className="flex items-center font-bold">
          <li className="relative">
            <UIPopover
              text="Category"
              options={[
                { text: 'All', path: '/blog' },
                { text: 'Tech', path: '/blog/tech' },
                { text: 'Stock', path: '/blog/stock' },
                { text: 'Life', path: '/blog/life' },
              ]}
            />
            {pathname.includes('/blog') && (
              <div className="absolute inset-x-0 top-5 flex justify-center font-extrabold">
                <span>・</span>
              </div>
            )}
          </li>
          <li className="relative ml-10">
            <Link href="/about" className="hover:text-black/50">
              About me
            </Link>
            {pathname === '/about' && (
              <div className="absolute inset-x-0 top-5 flex justify-center font-extrabold">
                <span>・</span>
              </div>
            )}
          </li>

          <li className="relative ml-10">
            <Link href="/contact" className="hover:text-black/50">
              Contact
            </Link>
            {pathname === '/contact' && (
              <div className="absolute inset-x-0 top-5 flex justify-center font-extrabold">
                <span>・</span>
              </div>
            )}
          </li>
        </ul>
      </nav>
      {/* モバイルナビゲーション */}
      <Button
        onClick={handleMenuOpen}
        className={clsx(
          'block transition md:hidden',
          menuOpen
            ? 'scale-0 duration-200 ease-out'
            : 'scale-100 delay-1000 duration-500 ease-out',
        )}
      >
        <Bars2Icon className="size-8" />
      </Button>
      <div
        role="dialog"
        className={clsx(
          'ease fixed inset-0 z-10',
          menuOpen
            ? 'visible opacity-100 delay-100'
            : 'invisible opacity-0 transition-all delay-1000',
        )}
      >
        <div
          className={clsx(
            'fixed right-6 top-4 size-8 rounded-full bg-white transition duration-1000',
            menuOpen ? 'scale-[90] opacity-100' : '',
          )}
        />
        <div className="absolute size-full overflow-y-auto">
          <div className="flex h-[60px] items-center px-6 md:h-[100px] md:px-16">
            <Link href="/" className="mr-auto">
              <Image
                src="/images/openai.svg"
                alt="icon"
                width={40}
                height={40}
                className="size-8 bg-white md:size-10"
              />
            </Link>
            <Button
              onClick={handleMenuClose}
              className={clsx(
                'block transition md:hidden',
                menuOpen
                  ? 'scale-100 delay-200 duration-500 ease-out'
                  : 'scale-0 delay-[800ms] duration-500 ease-out',
              )}
            >
              <XMarkIcon className="size-8 text-black" />
            </Button>
          </div>
          <nav
            className={clsx(
              'transition',
              menuOpen
                ? 'opacity-100 delay-300 duration-700'
                : 'opacity-0 duration-300',
            )}
          >
            <ul className="flex flex-col gap-4 p-10 text-2xl font-bold">
              <li>
                <Disclosure>
                  <div className="flex w-full items-center justify-between">
                    <Link href="/blog" onClick={handleMenuClose}>
                      Category
                    </Link>
                    <DisclosureButton className="group">
                      <PlusIcon className="size-8 group-data-[menuOpen]:hidden" />
                      <MinusIcon className="hidden size-8 group-data-[menuOpen]:block" />
                    </DisclosureButton>
                  </div>
                  <DisclosurePanel>
                    <ul className="flex flex-col gap-4 px-6 py-4 text-xl opacity-70">
                      <li>
                        <Link href="/blog/tech" onClick={handleMenuClose}>
                          Tech
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/stock" onClick={handleMenuClose}>
                          Stock
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/life" onClick={handleMenuClose}>
                          Life
                        </Link>
                      </li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
              </li>
              <li>
                <Link href="/about" onClick={handleMenuClose}>
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={handleMenuClose}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
