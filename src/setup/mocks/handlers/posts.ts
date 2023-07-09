import { rest } from 'msw';

const posts = [
  rest.get(
    'https://jsonplaceholder.typicode.com/posts',
    async (_req, res, ctx) =>
      res(
        ctx.json([
          {
            userId: 1,
            id: 1,
            title: 'Test title 1',
            body: 'Test content 1',
          },
          {
            userId: 1,
            id: 2,
            title: 'Test title 2',
            body: 'Test content 2',
          },
          {
            userId: 2,
            id: 3,
            title: 'Test title 3',
            body: 'Test content 3',
          },
        ]),
      ),
  ),
];

export default posts;
