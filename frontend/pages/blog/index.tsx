import { urqlClient } from '@/lib/urql';
import { BlogCard } from '@/src/components/BlogCard';
import Pagination from '@/src/components/Pagination';
import type {
  GetPostsQuery,
  GetPostsQueryVariables,
  PostModel,
} from '@/src/graphql/generated/types';
import { GetPostsDocument } from '@/src/graphql/generated/types';
import isPositiveInteger from '@/utils/isPositiveInteger';
import type { GetServerSideProps, NextPage } from 'next';

type Props = {
  posts: PostModel[];
  currentPage: number;
  totalPage: number;
};

const Blog: NextPage<Props> = ({ posts, currentPage, totalPage }) => {
  return (
    <div>
      <h2 className="mb-4 px-4 text-2xl font-semibold">Blog</h2>
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
      <Pagination currentPage={currentPage} totalPage={totalPage} />
    </div>
  );
};

export const getServerSideProps = (async (context) => {
  const { page } = context.query;
  let currentPage = 1;
  if (page) {
    if (!Array.isArray(page) && isPositiveInteger(page)) {
      currentPage = Number(page);
    } else {
      return {
        redirect: {
          //　キャッシュしない
          permanent: false,
          destination: '/blog',
        },
      };
    }
  }
  const postsPerPage = 12;
  try {
    const client = await urqlClient();
    const result = await client
      .query<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, {
        // category: "article",
        page: currentPage,
        postsPerPage,
      })
      .toPromise();
    if (!result.data) {
      return {
        notFound: true,
      };
    }
    const { totalCount, posts } = result.data.getPosts;
    const totalPage =
      totalCount % postsPerPage !== 0
        ? totalCount / postsPerPage + 1
        : totalCount / postsPerPage;
    return {
      props: {
        posts,
        currentPage,
        totalPage,
      },
    };
  } catch (e) {
    if (e instanceof Error) {
      return { props: { error: e.message } };
    }
    throw e;
  }
}) satisfies GetServerSideProps;

export default Blog;
