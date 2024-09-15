import { useRouter } from 'next/router';

export default function Category() {
  const { query } = useRouter();
  return <h1>Category {query.category}</h1>;
}
