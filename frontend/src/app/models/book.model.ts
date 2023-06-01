import {Entry} from "./entry.model"

export class Book {
  id?: any;
  title?: string;
  author?: string;
  isbn?: string;
  synopsis?: string;
  library?: Entry[];
}
