import { urqlClient } from '@/lib/urql';
import { BlogCard } from '@/src/components/BlogCard';
import type { PostModel } from '@/src/graphql/generated/types';
import { PostIndexPageDocument } from '@/src/graphql/generated/types';
import type { GetStaticProps, NextPage } from 'next';

type Props = {
  posts: PostModel[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <main>
      <h2 className="mb-4 px-4 text-2xl font-semibold">Recent</h2>
      <ul className="flex flex-wrap justify-between">
        {posts.map((post) => (
          <li key={post.id} className="w-full px-0 py-4 md:w-1/2 md:p-4">
            <BlogCard
              imgPath="/images/sunset_beach.jpg"
              title={post.title}
              category="Tech"
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
