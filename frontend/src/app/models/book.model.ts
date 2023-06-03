import {User} from './user.model'

export class Book {
  id?: any;
  title?: string;
  author?: string;
  ISBN?: string;
  synopsis?: string;
  completion?: Number;
  addedAt?: string;
  removedAt?: string | null;
  userId?: Number;
  owner?: User;
}

//placeholder while developing, i will add the prisma generated types
//import { User } from '../../../../backend/node_modules/@prisma/client';

// Prisma still doesn't support multiple output folder when generating the client
// See:
// https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/generating-prisma-client#the-location-of-prisma-client
// https://github.com/prisma/prisma/issues/1787
