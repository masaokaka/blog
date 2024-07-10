import { urqlClient } from '@/lib/urql';
import { PostIndexPageDocument } from '@/src/graphql/generated/types';
import type { GetStaticProps, NextPage } from 'next';

type Props = {
  posts: { id: string; title: string; type: string }[];
};

export const Home: NextPage<Props> = ({ posts }) => {
  return (
    <main>
      <ul>
        {posts.map((post) => (
          <li key={post.type}>
            <p>id: {post.id}</p>
            <p>title: {post.title}</p>
            <p>type:{post.type}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export const getStaticProps = (async () => {
  try {
    const client = await urqlClient();
    const result = await client
      .query(PostIndexPageDocument, {
        type: 'article',
      })
      .toPromise();
    return {
      props: {
        posts: result.data?.posts,
      },
    };
  } catch (e) {
    if (e instanceof Error) {
      return { props: { error: e.message } };
    }
    throw e;
  }
}) satisfies GetStaticProps;

export default Home;
