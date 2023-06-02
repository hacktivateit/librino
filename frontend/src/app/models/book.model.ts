import {User} from './user.model'

export class Book {
  id?: any;
  title?: string;
  author?: string;
  ISBN?: string;
  synopsis?: string | null;
  owner?: User[];
}

// I know it's ugly, but is the only way to have a unique source of thruth for the data models while developing
// I need to solve this at the end for the dockerization
// Prisma still doesn't support multiple output folder when generating the client
// See:
// https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/generating-prisma-client#the-location-of-prisma-client
// https://github.com/prisma/prisma/issues/1787
//import { User } from '../../../../backend/node_modules/@prisma/client';
