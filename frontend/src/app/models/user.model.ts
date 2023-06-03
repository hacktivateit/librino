import {Book} from './book.model'

export class User {
  id?: any;
  name?: string;
  surname?: string;
  email?: string;
  collection?: Book[];
}

//placeholder while developing, i will add the prisma generated types
//import { User } from '../../../../backend/node_modules/@prisma/client';

// Prisma still doesn't support multiple output folder when generating the client
// See:
// https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/generating-prisma-client#the-location-of-prisma-client
// https://github.com/prisma/prisma/issues/1787

