import Image from 'next/image';
import Link from 'next/link';

type Props = {
  imgPath: string;
  title: string;
  category: string;
  datetime: string;
  tags: string[];
};

const imageHeight = '230px';

export const BlogCard = ({
  imgPath,
  title,
  category,
  datetime,
  tags,
}: Props): JSX.Element => (
  // TODO: ブログページへのリンクを入れる(記事へのパスは記事の中身がわかるような英語の名前)
  <Link
    href={`/blog/${category.toLowerCase()}/link-to-article`}
    className="block size-full overflow-hidden rounded-2xl bg-white transition duration-300 hover:shadow-[0_0_30px_rgba(49,49,49,0.3)]"
  >
    <Image
      className={`md:h-[${imageHeight}] block w-full`}
      src={imgPath}
      width={400}
      height={400}
      alt="Sunset by the ocean"
    />
    <div className={`md:h-[calc(100%-${imageHeight})] flex flex-col p-6`}>
      <div className="flex items-center justify-between">
        <div className="items-center rounded-full bg-black px-4 py-0.5 text-sm text-white">
          {category}
        </div>
        <time dateTime={datetime} className="text-sm font-semibold">
          {datetime}
        </time>
      </div>
      <h3 className="mb-auto mt-6 text-lg font-semibold">{title}</h3>
      <div className="mt-6 flex flex-wrap">
        {tags.map((tag) => (
          <span key={tag} className="mr-2 text-sm text-gray-400">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  </Link>
);
