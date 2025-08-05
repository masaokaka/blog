import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4000/graphql',
  documents: 'src/**/*.gql',
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  generates: {
    'src/graphql/generated/types.ts': {
      config: {
        withHooks: false,
      },
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
    },
  },
};

export default config;
