import { rest } from 'msw';

const products = [
  rest.get('http://localhost:3001/products', async (_req, res, ctx) =>
    res(
      ctx.json([
        {
          id: 1,
          name: 'Apple AirPods Pro 2nd generation',
          image: 'https://s.ek.ua/jpg/2272446.jpg',
          price: 8199,
          available: true,
        },
        {
          id: 2,
          name: 'Apple AirPods 3 with Wireless Charging Case',
          image: 'https://s.ek.ua/jpg/2349078.jpg',
          price: 12499,
          available: false,
        },
        {
          id: 3,
          name: 'Apple AirPods Max',
          image: 'https://s.ek.ua/jpg/1924984.jpg',
          price: 24799,
          available: true,
        },
        {
          id: 4,
          name: 'Apple Pencil',
          image: 'https://s.ek.ua/jpg/1693208.jpg',
          price: 4799,
          available: true,
        },
        {
          id: 5,
          name: 'Apple Power Adapter 20W',
          image: null,
          price: 899,
          available: true,
        },
      ]),
    ),
  ),
];

export default products;
