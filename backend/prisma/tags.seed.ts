import { Tag } from '@prisma/client';

// モデル投入用のデータ定義
export const tagData: Tag[] = [
  {
    id: '1',
    name: 'tech',
    createdAt: new Date('2022-01-31T04:34:22+09:00'),
    updatedAt: new Date('2022-01-31T04:34:22+09:00'),
  },
  {
    id: '2',
    name: 'life',
    createdAt: new Date('2022-01-30T04:34:22+09:00'),
    updatedAt: new Date('2022-01-30T04:34:22+09:00'),
  },
  {
    id: '3',
    name: 'travel',
    createdAt: new Date('2022-01-30T04:34:22+09:00'),
    updatedAt: new Date('2022-01-30T04:34:22+09:00'),
  },
];
