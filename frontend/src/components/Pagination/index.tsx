import clsx from 'clsx';
import Link from 'next/link';
import { useMemo } from 'react';

const firstPage = 1;

const Pagination = ({
  totalPage,
  currentPage,
}: {
  totalPage: number;
  currentPage: number;
}) => {
  const pages = useMemo((): ('...' | number)[] => {
    // 総ページ数が6ページ以下の場合、ページ全てを描画
    if (totalPage <= 6) {
      return Array.from({ length: totalPage }, (_, i) => i + 1);
    }
    // 総ページ数が6以上で現在のページと最初のページとの差が2以下の場合
    if (currentPage - firstPage <= 3) {
      return [1, 2, 3, 4, '...', totalPage];
    }
    // 総ページ数が6以上で現在のページと最初のページとの差が3以上、最後のページとの差が3より上
    if (currentPage - firstPage >= 3 && totalPage - currentPage > 2) {
      return [
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPage,
      ];
    }
    // 総ページ数6以上、現在のページが最後のページと3以内
    return [1, '...', totalPage - 3, totalPage - 2, totalPage - 1, totalPage];
  }, [currentPage, totalPage]);
  return (
    <div className="my-5 flex justify-center space-x-2 font-semibold">
      {pages.map((page, i) => {
        const isDisabled = page === '...';
        const isCurrentPage = page === currentPage;
        return (
          <Link
            key={`${i}_page`}
            aria-disabled={isDisabled}
            tabIndex={isDisabled ? -1 : undefined}
            href={`/blog?page=${page}`}
            className={clsx(
              'flex size-8 min-w-8 items-center justify-center rounded-full text-center transition-all md:size-10',
              isCurrentPage && 'pointer-events-none bg-black text-white',
              isDisabled ? 'pointer-events-none' : 'hover:bg-white',
            )}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
};

export default Pagination;
