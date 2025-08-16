import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type GetUserResponse = {
  __typename?: 'GetUserResponse';
  user: UserModel;
};

export type PostModel = {
  __typename?: 'PostModel';
  category: Scalars['String']['output'];
  contentPath: Scalars['String']['output'];
  emoji?: Maybe<Scalars['String']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  publishDate?: Maybe<Scalars['DateTime']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  tags: Array<TagModel>;
  thumbNailUrl?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type PostResponse = {
  __typename?: 'PostResponse';
  posts: Array<PostModel>;
  totalPageCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  getPosts: PostResponse;
  getUser: GetUserResponse;
};

export type QueryGetPostsArgs = {
  category?: InputMaybe<Array<Scalars['String']['input']>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  postsPerPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetUserArgs = {
  githubId: Scalars['String']['input'];
};

export type TagModel = {
  __typename?: 'TagModel';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type UserModel = {
  __typename?: 'UserModel';
  email: Scalars['String']['output'];
  githubId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type GetPostsQueryVariables = Exact<{
  category?: InputMaybe<
    Array<Scalars['String']['input']> | Scalars['String']['input']
  >;
  page?: InputMaybe<Scalars['Int']['input']>;
  postsPerPage?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetPostsQuery = {
  __typename?: 'Query';
  getPosts: {
    __typename?: 'PostResponse';
    totalPageCount: number;
    posts: Array<{
      __typename?: 'PostModel';
      id: string;
      title: string;
      category: string;
      contentPath: string;
      publishDate?: any | null;
      tags: Array<{ __typename?: 'TagModel'; id: string; name: string }>;
    }>;
  };
};

export type GetUserQueryVariables = Exact<{
  githubId: Scalars['String']['input'];
}>;

export type GetUserQuery = {
  __typename?: 'Query';
  getUser: {
    __typename?: 'GetUserResponse';
    user: {
      __typename?: 'UserModel';
      id: string;
      githubId: string;
      name: string;
      email: string;
      role: string;
    };
  };
};

export const GetPostsDocument = gql`
  query getPosts($category: [String!], $page: Int, $postsPerPage: Int) {
    getPosts(category: $category, page: $page, postsPerPage: $postsPerPage) {
      totalPageCount
      posts {
        id
        title
        category
        contentPath
        publishDate
        tags {
          id
          name
        }
      }
    }
  }
`;
export const GetUserDocument = gql`
  query getUser($githubId: String!) {
    getUser(githubId: $githubId) {
      user {
        id
        githubId
        name
        email
        role
      }
    }
  }
`;
