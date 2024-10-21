import { BlogCard } from '@/src/components/BlogCard';
import Pagination from '@/src/components/Pagination';
import type { PostModel } from '@/src/graphql/generated/types';

type Props = {
  posts: PostModel[];
  currentPage: number;
  totalPageCount: number;
};

const BlogPage = ({ posts, currentPage, totalPageCount }: Props) => {
  return (
    <div>
      <h2 className="px-4 text-xl font-semibold md:text-2xl">全ての記事</h2>
      <ul className="flex flex-wrap">
        {posts.map((post) => (
          <li
            key={post.id}
            className="w-full px-0 py-4 md:w-1/2 md:p-4 xl:w-1/3"
          >
            <BlogCard
              imgPath="/images/sample.jpeg"
              title={post.title}
              category={post.category.toUpperCase()}
              datetime={post.publishDate.split('T')[0].replaceAll('-', '.')}
              tags={[
                'travel',
                'fun',
                'blog',
                'travel',
                'fun',
                'blog',
                'travel',
                'fun',
                'blog',
              ]}
            />
          </li>
        ))}
      </ul>
      <Pagination currentPage={currentPage} totalPageCount={totalPageCount} />
    </div>
  );
};

export default BlogPage;
