import { urqlClient } from '@/lib/urql';
import { PostIndexPageDocument } from '@/src/graphql/generated/types';
import type { GetServerSideProps, NextPage } from 'next';

type Props = {
  category: string;
};

const Category: NextPage<Props> = ({ category }) => {
  return <h1>Category {category}</h1>;
};

export const getServerSideProps = (async (context) => {
  try {
    console.log('カテゴリ:', context.query.category);

    const client = await urqlClient();
    // TODO:カテゴリ一覧を取得するクエリを実行
    const result = await client
      .query(PostIndexPageDocument, {
        type: 'article',
      })
      .toPromise();
    // TODO:カテゴリ一覧に存在品ページへアクセスされた場合はnotFoundを返す処理を書く
    if (result.data === null) {
      return {
        notFound: true,
      };
    }
    return {
      props: { category: context.query.category },
    };
  } catch (e) {
    if (e instanceof Error) {
      return { props: { error: e.message } };
    }
    throw e;
  }
}) satisfies GetServerSideProps;

export default Category;
