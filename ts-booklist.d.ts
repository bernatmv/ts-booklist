export interface BookDto {
    title: string;
    author: Array<string>;
    publishers: Array<string>;
    revision: number;
    isbn: Array<string>;
    pages: number;
    popularity: number;
    countries: Array<string>;
}

export class BookMapper {
    public map(dto: BookDto): Book;
}

export class Author {
    id: string;

    constructor(id: string);
}

export class Country {
    code: string;

    constructor(code: string);
    public equals(country: Country): boolean;
}

export class Publisher {
    id: string;

    constructor(id: string);
}

export class Book {
    title: string;
    authors: Array<Author>;
    publishers: Array<Publisher>;
    revision: number;
    isbn: Array<string>;
    pages: number;
    popularity: number;
    countries: Array<Country>;

    constructor(title: string, authors: Array<Author>, publishers: Array<Publisher>, revision: number, isbn: Array<string>, pages: number, popularity: number, countries: Array<Country>);
    public publishedIn(country: Country): boolean;
}

export class Collection {
    public isEmpty: boolean;
    public isFull: boolean;

    public addBook(book: Book): Collection;
    public removeBook(book: Book): Collection;
    public getTrending(numElements: number): Array<Book>;
    public getTrendingByCountry(country: Country, numElements: number): Array<Book>;
    private _exists(book: Book): boolean;
    private _sort(): void;
}