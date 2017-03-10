import Data from './data/data';
import BookDto from '../src/common/dtos/bookDto';
import Book from '../src/common/models/book';
import BookMapper from '../src/common/mappers/bookMapper';

export default class LoaderStub {
    private _data: Array<BookDto>;
    private _bookMapper: BookMapper;

    constructor(bookMapper: BookMapper) {
        this._data = Data;
        this._bookMapper = bookMapper;
    }

    public getNextBook(): Book {
        return this._bookMapper.map(this._data.shift());
    }

    public getBook(id: number): Book {
        return this._bookMapper.map(this._data[id]);
    }
}