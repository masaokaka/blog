import clsx from 'clsx';
import Link from 'next/link';
import { useMemo } from 'react';

const firstPage = 1;
const maxElementCount = 7;

const Pagination = ({
  totalPageCount,
  currentPage,
}: {
  totalPageCount: number;
  currentPage: number;
}) => {
  const paginationElements = useMemo((): ('...' | number)[] => {
    // 総ページ数が7ページ以下の場合、ページ全てを描画
    if (totalPageCount <= maxElementCount) {
      return Array.from({ length: totalPageCount }, (_, i) => i + 1);
    }
    // 総ページ数が7以上で現在のページと最初のページとの差が2以下の場合
    if (currentPage - firstPage <= 3) {
      return [1, 2, 3, 4, 5, '...', totalPageCount];
    }
    // 総ページ数が7以上で現在のページと最初のページとの差が3以上、最後のページとの差が3より上
    if (currentPage - firstPage >= 3 && totalPageCount - currentPage > 3) {
      return [
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPageCount,
      ];
    }
    // 総ページ数7以上、現在のページが最後のページと3以内
    return [
      1,
      '...',
      totalPageCount - 4,
      totalPageCount - 3,
      totalPageCount - 2,
      totalPageCount - 1,
      totalPageCount,
    ];
  }, [currentPage, totalPageCount]);
  return (
    <div className="my-5 flex justify-center space-x-2 font-semibold">
      {paginationElements.map((page, i) => {
        const isDisabled = page === '...';
        const isCurrentPage = page === currentPage;
        return (
          <Link
            key={`${i}_page`}
            aria-disabled={isDisabled}
            tabIndex={isDisabled ? -1 : undefined}
            href={isDisabled ? '' : `/blog?page=${page}`}
            className={clsx(
              'flex size-8 min-w-8 items-center justify-center rounded-full text-center md:size-10',
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
