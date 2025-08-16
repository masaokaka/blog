import { GetPostsArgs } from '@blog-components/posts/interfaces/get-post-connection.args';
import { PostResponse } from '@blog-components/posts/interfaces/post.model';
import { Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}
  async getPosts(@Args() args: GetPostsArgs): Promise<PostResponse> {
    const [posts, totalCount] = await this.prisma.$transaction([
      this.prisma.post.findMany({
        where: {
          category: args.category ? { in: args.category } : undefined,
          published: true,
        },
        include: {
          tags: true,
        },
        orderBy: {
          publishDate: 'desc',
        },
        skip: (args.page - 1) * args.postsPerPage,
        take: args.postsPerPage,
      }),
      this.prisma.post.count({
        where: {
          category: args.category ? { in: args.category } : undefined,
          published: true,
        },
      }),
    ]);
    return {
      posts: posts,
      totalPageCount: Math.ceil(totalCount / args.postsPerPage),
    };
  }
  // // idを元に一件取得のメソッド
  // findOneById(id: string): Todo {
  //   const result = this.todos.find((todo) => id === todo.id);
  //   if (!result) {
  //     // なかったら404エラーを返す。ビルトインのエラーも豊富にあってエラー処理も結構楽
  //     // https://docs.nestjs.com/exception-filters#built-in-http-exceptions
  //     throw new NotFoundException();
  //   }
  //   return result;
  // }
}
