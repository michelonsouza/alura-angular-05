import { ImageLinks, Item } from './book';

export class LivroVolumeInfo {
  title?: string;
  subtitle?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  previewLink?: string;
  thumbnail?: ImageLinks | string;

  constructor(item: Item) {
    this.title = item?.volumeInfo?.title;
    this.subtitle = item?.volumeInfo?.subtitle;
    this.authors = item?.volumeInfo?.authors;
    this.publisher = item?.volumeInfo?.publisher;
    this.publishedDate = item?.volumeInfo?.publishedDate;
    this.description = item?.volumeInfo?.description;
    this.previewLink = item?.volumeInfo?.previewLink;
    this.thumbnail = item?.volumeInfo?.imageLinks.thumbnail;
  }
}
