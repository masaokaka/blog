import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type PostModel = {
  __typename?: 'PostModel';
  contentPath: Scalars['String']['output'];
  emoji?: Maybe<Scalars['String']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  publishDate?: Maybe<Scalars['DateTime']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  thumbNailUrl?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  posts?: Maybe<Array<PostModel>>;
};


export type QueryPostsArgs = {
  type?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PostIndexPageQueryVariables = Exact<{
  type?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type PostIndexPageQuery = { __typename?: 'Query', posts?: Array<{ __typename?: 'PostModel', id: string, title: string, type: string, publishDate?: any | null }> | null };


export const PostIndexPageDocument = gql`
    query PostIndexPage($type: [String!]) {
  posts(type: $type) {
    id
    title
    type
    publishDate
  }
}
    `;