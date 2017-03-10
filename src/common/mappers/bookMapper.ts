import BookDto from '../dtos/bookDto';
import Book from '../models/book';
import Author from '../models/author';
import Country from '../models/country';
import Publisher from '../models/publisher';

export default class BookMapper {
    
    public map(dto: BookDto): Book {
        return new Book(
            dto.title,
            dto.authors ? dto.authors.map((id: string) => new Author(id)) : [],
            dto.publishers ? dto.publishers.map((id: string) => new Publisher(id)) : [],
            dto.revision,
            dto.isbn,
            dto.pages,
            dto.popularity,
            dto.countries ? dto.countries.map((code: string) => new Country(code)) : []
        );
    }
}