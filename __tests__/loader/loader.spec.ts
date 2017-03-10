import LoaderStub from '../loaderStub';
import Book from '../../src/common/models/book';
import BookMapper from '../../src/common/mappers/bookMapper';
import Country from '../../src/common/models/country';

describe('Loader Stub', () => {

    let _loader: LoaderStub = new LoaderStub(new BookMapper());
    let _book: Book = _loader.getNextBook();

    describe('Load book', () => {
        it('Should be a book', () => {
            expect(_book).toBeInstanceOf(Book);
        });

        it('Should have the title: Como Vivir Con La Perdida De Cabello / Coping with Alopecia', () => {
            expect(_book.title).toBe('Como Vivir Con La Perdida De Cabello / Coping with Alopecia');
        });

        it('Should not have one author', () => {
            expect(_book.authors.length).toBe(1);
        });

        it('Should have ISBN', () => {
            expect(_book.isbn.length).toBeGreaterThan(0);
        });

        it('Should be published in sweden and germany', () => {
            expect(_book.publishedIn(new Country('SE'))).toBe(true);
            expect(_book.publishedIn(new Country('GE'))).toBe(true);
        });

        it('Should not be published in spain', () => {
            expect(_book.publishedIn(new Country('ES'))).toBe(false);
        });
    });
});