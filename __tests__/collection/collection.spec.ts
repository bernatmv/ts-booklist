import Collection from '../../src/collection/collection';
import BookDto from '../../src/common/dtos/bookDto';
import Book from '../../src/common/models/book';
import BookMapper from '../../src/common/mappers/bookMapper';
import LoaderStub from '../loaderStub';
import Country from '../../src/common/models/country';

let bookDtoMock: BookDto = {
    'title': 'Como Vivir Con La Perdida De Cabello / Coping with Alopecia',
    'authors': [
        'OL4185247A'
    ],
    'publishers': [
        'Panorama Mexico'
    ],
    'revision': 3,
    'isbn': [
        '9683814689'
    ],
    'pages': 175,
    'popularity': 61,
    'countries': [
        'SE',
        'GE'
    ]
};

describe('Collection of books', () => {
    let _collection: Collection;
    let _loader: LoaderStub = new LoaderStub(new BookMapper());
    let _mapper: BookMapper = new BookMapper();
    let _book: Book;

    beforeEach(() => {
        _collection = new Collection();
        _book = _mapper.map(bookDtoMock);
    });

    it('Should be empty', () => {
        expect(_collection.isEmpty).toBe(true);
    });

    describe('When we add a book to the collection', () => {
        beforeEach(() => {
            _collection.addBook(_book);
        });        

        it('Should not be empty', () => {
            expect(_collection.isEmpty).toBe(false);
        });

        describe('When we remove the added book', () => {
            beforeEach(() => {
                _collection.removeBook(_book);
            });        

            it('Should be empty', () => {
                expect(_collection.isEmpty).toBe(true);
            });
        });
    });

    describe('When we add 20 books to the collection', () => {
        beforeEach(() => {
            for (let i = 0; i < 20; i++) {
                _collection.addBook(_loader.getBook(i));
            }
        });        

        it('Should be full', () => {
            expect(_collection.isFull).toBe(true);
        });

        it('Should return the 3 most popular books', () => {
            expect(_collection.getTrending().length).toBe(3);
            expect(_collection.getTrending()[0].title).toBe('Fads and fashions');
            expect(_collection.getTrending()[1].title).toBe('The new American painting, as shown in eight European countries 1958-59');
            expect(_collection.getTrending()[2].title).toBe('Folkways');
        });

        it('Should return just one book from the United States', () => {
            expect(_collection.getTrendingByCountry(new Country('US')).length).toBe(1);
            expect(_collection.getTrendingByCountry(new Country('US'))[0].title).toBe('Shell structures');
        });
    });
});