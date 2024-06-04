import { urqlClient } from '@/lib/urql';
import type { GetStaticProps, NextPage } from 'next';
// import { Inter } from 'next/font/google';
import { gql } from 'urql';

// const inter = Inter({ subsets: ['latin'] });

type Props = {
  posts: { id: string; title: string }[];
};

export const Home: NextPage<Props> = ({ posts }) => {
  return (
    <main>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            id: {post.id} title: {post.title}
          </li>
        ))}
      </ul>
    </main>
  );
};

export const getStaticProps = (async () => {
  try {
    const client = await urqlClient();
    const POSTS_QUERY = gql`
      query Example {
        posts {
          id
          title
        }
      }
    `;
    const result = await client.query(POSTS_QUERY, {}).toPromise();
    return {
      props: {
        posts: result.data.posts,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
}) satisfies GetStaticProps;

export default Home;
