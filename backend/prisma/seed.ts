import { Post, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// モデル投入用のデータ定義
const postData: Post[] = [
  {
    id: '1',
    contentPath: '/storage/posts/articles/hello22.md',
    emoji: '✅',
    excerpt: '本を書いています',
    md5Hash: '5ce6822c5efacf5791b7f46187451e73',
    title: '気持ちを落ち着かせる呼吸法',
    thumbNailUrl: 'http://exaample.com/image1.png',
    type: 'article',
    publishDate: new Date('2022-01-31'),
    published: true,
    like: 0,
    createdAt: new Date('2022-01-31T04:34:22+09:00'),
    updatedAt: new Date('2022-01-31T04:34:22+09:00'),
  },
  {
    id: '2',
    contentPath: '/storage/posts/articles/grasdphql.md',
    emoji: '🛳',
    excerpt: '記事を書いています',
    md5Hash: 'b7ec2e1a2b1faaed120aeeccb1ffc587',
    title: '高ぶる気持ちを存分に発揮したいです',
    thumbNailUrl: 'http://exaample.com/image2.png',
    type: 'article',
    publishDate: new Date('2022-01-30'),
    published: true,
    like: 0,
    createdAt: new Date('2022-01-31T04:34:22+09:00'),
    updatedAt: new Date('2022-01-31T04:34:22+09:00'),
  },
  {
    id: '3',
    contentPath: '/storage/posts/articles/nessdtjs.md',
    emoji: '😼',
    excerpt: '日記を書いています',
    md5Hash: 'e5f6dd3adc408b03fbac3faadb82947d',
    title: 'ゆっくり落ち着く気持ちを大事にしたいです',
    thumbNailUrl: 'http://exaample.com/image3.png',
    type: 'diary',
    publishDate: new Date('2022-01-29'),
    published: true,
    like: 0,
    createdAt: new Date('2022-01-31T04:34:22+09:00'),
    updatedAt: new Date('2022-01-31T04:34:22+09:00'),
  },
  {
    id: '4',
    contentPath: '/storage/posts/articles/helloo.md',
    emoji: '✅',
    excerpt: '本を書いています',
    md5Hash: '5ce6822c5efacf5791b7f46187d451e73',
    title: '気持ちを落ち着かせる呼吸法',
    thumbNailUrl: 'http://exaample.com/image1.png',
    type: 'article',
    publishDate: new Date('2022-01-31'),
    published: true,
    like: 0,
    createdAt: new Date('2022-01-31T04:34:22+09:00'),
    updatedAt: new Date('2022-01-31T04:34:22+09:00'),
  },
  {
    id: '5',
    contentPath: '/storage/posts/articles/hellohello.md',
    emoji: '✅',
    excerpt: '本を書いています',
    md5Hash: '5ce6822c5efacf5791b7f46d187451e73',
    title: '気持ちを落ち着かせる呼吸法',
    thumbNailUrl: 'http://exaample.com/image1.png',
    type: 'article',
    publishDate: new Date('2022-01-31'),
    published: true,
    like: 0,
    createdAt: new Date('2022-01-31T04:34:22+09:00'),
    updatedAt: new Date('2022-01-31T04:34:22+09:00'),
  },
  {
    id: '6',
    contentPath: '/storage/posts/articles/sampledd.md',
    emoji: '✅',
    excerpt: '本を書いています',
    md5Hash: '5ce6822c5efacf579f1b7f46187451e73',
    title:
      '気持ちを落ち着かせる呼吸法気持ちを落ち着かせる呼吸法気持ちを落ち着かせる呼吸法気持ちを落ち着かせる呼吸法気持ちを落ち着かせる呼吸法気持ちを落ち着かせる呼吸法気持ちを落ち着かせる呼吸法',
    thumbNailUrl: 'http://exaample.com/image1.png',
    type: 'article',
    publishDate: new Date('2022-01-31'),
    published: true,
    like: 0,
    createdAt: new Date('2022-01-31T04:34:22+09:00'),
    updatedAt: new Date('2022-01-31T04:34:22+09:00'),
  },
  {
    id: '7',
    contentPath: '/storage/posts/articles/articlesww.md',
    emoji: '✅',
    excerpt: '本を書いています',
    md5Hash: '5ce6822c5efacf5791bh7f46187451e73',
    title: '気持ちを落ち着かせる呼吸法',
    thumbNailUrl: 'http://exaample.com/image1.png',
    type: 'article',
    publishDate: new Date('2022-01-31'),
    published: true,
    like: 0,
    createdAt: new Date('2022-01-31T04:34:22+09:00'),
    updatedAt: new Date('2022-01-31T04:34:22+09:00'),
  },
  {
    id: '8',
    contentPath: '/storage/posts/articles/hellooihv.md',
    emoji: '✅',
    excerpt: '本を書いています',
    md5Hash: '5ce6822cd5efacf5791b7f46187451e73',
    title: '気持ちを落ち着かせる呼吸法',
    thumbNailUrl: 'http://exaample.com/image1.png',
    type: 'article',
    publishDate: new Date('2022-01-31'),
    published: true,
    like: 0,
    createdAt: new Date('2022-01-31T04:34:22+09:00'),
    updatedAt: new Date('2022-01-31T04:34:22+09:00'),
  },
  {
    id: '9',
    contentPath: '/storage/posts/articles/hellossss.md',
    emoji: '✅',
    excerpt: '本を書いています',
    md5Hash: '5ce6822c5efacf5791b7f46187451ed73',
    title: '朝早起きしてからすぐに動き出すには？',
    thumbNailUrl: 'http://exaample.com/image1.png',
    type: 'article',
    publishDate: new Date('2022-01-31'),
    published: true,
    like: 0,
    createdAt: new Date('2022-01-31T04:34:22+09:00'),
    updatedAt: new Date('2022-01-31T04:34:22+09:00'),
  },
  {
    id: '10',
    contentPath: '/storage/posts/articles/hellodfvssss.md',
    emoji: '✅',
    excerpt: '本を書いています',
    md5Hash: '5ce6822c5efacf5791dfgb7f46187451ed73',
    title: '朝早起きしてからすぐに動き出すには？',
    thumbNailUrl: 'http://exaample.com/image1.png',
    type: 'article',
    publishDate: new Date('2022-01-31'),
    published: true,
    like: 0,
    createdAt: new Date('2022-01-31T04:34:22+09:00'),
    updatedAt: new Date('2022-01-31T04:34:22+09:00'),
  },
  {
    id: '11',
    contentPath: '/storage/posts/articles/hellosevsss.md',
    emoji: '✅',
    excerpt: '本を書いています',
    md5Hash: '5ce6822c5efadgcf5791b7f46187451ed73',
    title: '朝早起きしてからすぐに動き出すには？',
    thumbNailUrl: 'http://exaample.com/image1.png',
    type: 'article',
    publishDate: new Date('2022-01-31'),
    published: true,
    like: 0,
    createdAt: new Date('2022-01-31T04:34:22+09:00'),
    updatedAt: new Date('2022-01-31T04:34:22+09:00'),
  },
  {
    id: '12',
    contentPath: '/storage/posts/articles/hellossdfsss.md',
    emoji: '✅',
    excerpt: '本を書いています',
    md5Hash: '5ce682asedc5efacf5791b7f46187451ed73',
    title: '朝早起きしてからすぐに動き出すには？',
    thumbNailUrl: 'http://exaample.com/image1.png',
    type: 'article',
    publishDate: new Date('2022-01-31'),
    published: true,
    like: 0,
    createdAt: new Date('2022-01-31T04:34:22+09:00'),
    updatedAt: new Date('2022-01-31T04:34:22+09:00'),
  },
  {
    id: '13',
    contentPath: '/storage/posts/articles/hellosssss.md',
    emoji: '✅',
    excerpt: '本を書いています',
    md5Hash: '5ce6445822c5efacf5791b7f46187451ed73',
    title: '朝早起きしてからすぐに動き出すには？',
    thumbNailUrl: 'http://exaample.com/image1.png',
    type: 'article',
    publishDate: new Date('2022-01-31'),
    published: true,
    like: 0,
    createdAt: new Date('2022-01-31T04:34:22+09:00'),
    updatedAt: new Date('2022-01-31T04:34:22+09:00'),
  },
];

const doSeed = async () => {
  const posts = [];
  for (const post of postData) {
    const createPosts = prisma.post.upsert({
      where: { id: post.id },
      update: { ...post },
      create: { ...post },
    });
    posts.push(createPosts);
  }
  return await prisma.$transaction(posts);
};

const main = async () => {
  console.log(`Start seeding ...`);

  await doSeed();

  console.log(`Seeding finished.`);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
