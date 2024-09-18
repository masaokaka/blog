import { urqlClient } from '@/lib/urql';
import type { PostModel } from '@/src/graphql/generated/types';
import { PostIndexPageDocument } from '@/src/graphql/generated/types';
import type { GetStaticProps, NextPage } from 'next';

type Props = {
  posts: PostModel[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return <h2>トップページ</h2>;
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
