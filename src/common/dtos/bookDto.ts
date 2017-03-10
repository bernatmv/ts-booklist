interface BookDto {
    title: string;
    authors: Array<string>;
    publishers: Array<string>;
    revision: number;
    isbn: Array<string>;
    pages: number;
    popularity: number;
    countries: Array<string>;
}

export default BookDto;