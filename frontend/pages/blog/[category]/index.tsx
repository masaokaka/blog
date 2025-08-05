import { urqlClient } from '@/lib/urql';
import BlogPage from '@/src/components/pages/Blog';
import { postsPerPage } from '@/src/const';
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
  totalPageCount: number;
};

const Blog: NextPage<Props> = (props) => {
  return <BlogPage {...props} />;
};

export const getServerSideProps = (async (context) => {
  const { page } = context.query;
  // paramsには必ず値が入るためasで型アサーションする
  const { category } = context.params as { category: string };

  let currentPage = 1;
  if (page) {
    if (!Array.isArray(page) && isPositiveInteger(page)) {
      currentPage = Number(page);
    } else {
      return {
        redirect: {
          //　キャッシュしない
          permanent: false,
          destination: '/blog/all',
        },
      };
    }
  }
  try {
    const client = await urqlClient();
    const result = await client
      .query<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, {
        // 全記事一覧画面の場合はcategoryを送信しない。
        category: category === 'all' ? undefined : category,
        page: currentPage,
        postsPerPage,
      })
      .toPromise();
    if (!result.data) {
      return {
        notFound: true,
      };
    }
    const { totalPageCount, posts } = result.data.getPosts;
    return {
      props: {
        posts,
        currentPage,
        totalPageCount,
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
