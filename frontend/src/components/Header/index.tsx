import { UIPopover } from '@/src/components/uiParts/UIPopover';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const { pathname } = useRouter();
  return (
    <header className="flex h-[100px] items-center bg-white px-16">
      {/* アイコン */}
      <div className="mr-auto">
        <Link href="/">
          <Image src="/images/vercel.svg" alt="icon" width={100} height={100} />
        </Link>
      </div>
      {/* ナビゲーション */}
      <nav>
        <ul className="flex items-center">
          <li>
            <UIPopover
              text="Categories"
              options={[
                { text: 'Tech', path: '/tech' },
                { text: 'Stock', path: '/stock' },
                { text: 'Life', path: '/life' },
              ]}
            />
          </li>
          {pathname !== '/about' && (
            <li className="ml-10">
              <Link href="/about" className="hover:text-black/50">
                About me
              </Link>
            </li>
          )}
          {pathname !== '/contact' && (
            <li className="ml-10">
              <Link href="/contact" className="hover:text-black/50">
                Contact
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
