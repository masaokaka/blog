import Image from 'next/image';

type Props = {
  imgPath: string;
  title: string;
  summary: string;
  category: string;
  datetime: string;
  tags: string[];
};

export const UICard = ({
  imgPath,
  title,
  summary,
  category,
  datetime,
  tags,
}: Props): JSX.Element => (
  <div className="max-w-sm overflow-hidden rounded-2xl bg-white transition duration-300 hover:shadow-2xl">
    <Image
      className="w-full"
      src={imgPath}
      width={300}
      height={300}
      alt="Sunset by the ocean"
    />
    <div className="px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="items-center rounded-full bg-black px-4 py-0.5 text-xs text-white">
          {category}
        </div>
        <time dateTime={datetime} className="text-sm font-semibold">
          {datetime}
        </time>
      </div>
      <h3 className="my-4 text-xl font-semibold">{title}</h3>
      <p className="text-base text-gray-700">{summary}</p>
    </div>
    <div className="p-4">
      {tags.map((tag) => (
        <span key={tag} className="p-1 text-sm text-gray-400">
          #{tag}
        </span>
      ))}
    </div>
  </div>
);
