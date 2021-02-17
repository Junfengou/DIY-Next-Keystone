import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from "./schemas/User";
import { Product } from "./schemas/Product";
import { insertSeedData } from './seed-data';
import { withItemData, statelessSessions } from "@keystone-next/keystone/session";
import { createAuth } from "@keystone-next/auth";
import 'dotenv/config';

const databaseURL =
  process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  }
});



export default withAuth(
config({
  // @ts-ignore
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    async onConnect(keystone) {
      console.log('Connected to the database!');
      if (process.argv.includes('--seed-data')) {
        await insertSeedData(keystone);
      }
    },
    // TODO: Add data seeding here
  },
  lists: createSchema({
    // Schema items go in here
    User, Product
  }),
  ui: {
    // TODO: change this for roles
    
    isAccessAllowed: ({ session }) => {
      // console.log("session: ", session);
      return !!session?.data;
    },
  },
  // TODO: Add session values here
  
  session: withItemData(statelessSessions(sessionConfig), {
    User: `id`
  })
  
}));