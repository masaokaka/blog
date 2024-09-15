import { UIButton } from '@/src/components/uiParts/UIButton';
import { UIPopover } from '@/src/components/uiParts/UIPopover';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex h-[100px] items-center bg-white px-16">
      {/* アイコン */}
      <div className="mr-auto">
        <Link href="#">
          <Image src="/images/vercel.svg" alt="icon" width={100} height={100} />
        </Link>
      </div>
      {/* ナビゲーション */}
      <nav>
        <ul className="flex items-center">
          <li className="mr-10">
            <UIPopover
              text="Categories"
              options={[
                { text: 'Tech', path: '/tech' },
                { text: 'Stock', path: '/stock' },
                { text: 'Life', path: '/life' },
              ]}
            />
          </li>
          <li className="mr-10">
            <Link href="/about">About me</Link>
          </li>
          <li>
            <UIButton text="Contact" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
