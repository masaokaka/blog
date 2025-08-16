import { PrismaClient } from '@prisma/client';
import { postData } from './posts.seed';
import { tagData } from './tags.seed';
const prisma = new PrismaClient();

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
  const tags = [];
  for (const tag of tagData) {
    const createTags = prisma.tag.upsert({
      where: { id: tag.id },
      update: { ...tag },
      create: { ...tag },
    });
    tags.push(createTags);
  }
  return await prisma.$transaction([...posts, ...tags]);
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
