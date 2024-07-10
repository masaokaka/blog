import { urqlClient } from '@/lib/urql';
import { PostIndexPageDocument } from '@/src/graphql/generated/types';
import type { GetStaticProps, NextPage } from 'next';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

type Props = {
  posts: { id: string; title: string; type: string }[];
};

export const Home: NextPage<Props> = ({ posts }) => {
  console.log(posts);
  return (
    <main>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
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
    console.log(e);
    return {
      notFound: true,
    };
  }
}) satisfies GetStaticProps;

export default Home;
