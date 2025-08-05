import { urqlClient } from '@/lib/urql';
import type { PostModel } from '@/src/graphql/generated/types';
import { GetPostsDocument } from '@/src/graphql/generated/types';
import type { GetServerSideProps, NextPage } from 'next';

type Props = {
  posts: PostModel[];
  totalPageCount: number;
};

const Home: NextPage<Props> = ({ posts, totalPageCount }) => {
  console.log('Posts fetched:', posts.length);
  return (
    <>
      <h2>トップページ</h2>
      <div>{totalPageCount}件</div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/posts/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getServerSideProps = (async () => {
  try {
    const client = await urqlClient();
    const result = await client.query(GetPostsDocument, {
      category: 'all',
    });
    const { totalPageCount, posts } = result.data.getPosts;
    console.log('Posts fetched:', posts.length);
    return {
      props: {
        posts,
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

export default Home;
