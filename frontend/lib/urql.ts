import { initUrqlClient } from 'next-urql';
import type { Client, ClientOptions } from 'urql';

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT!;

export const urqlClientOptions: ClientOptions = {
  url: GRAPHQL_ENDPOINT,
  exchanges: [],
};

export function urqlClient(): Promise<Client> {
  return new Promise((resolve, reject) => {
    const client = initUrqlClient(urqlClientOptions, false);
    if (!client) {
      reject(Error('Failed to init initUrqlClient.'));
    } else {
      resolve(client);
    }
  });
}
