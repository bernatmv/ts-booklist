import Book from '../common/models/book';
import Country from '../common/models/country';

export default class Collection {
    private _collection: Array<Book> = [];
    private _sizeLimit = 20;

    public get isEmpty(): boolean {
        return this._collection.length === 0;
    }

    public get isFull(): boolean {
        return this._collection.length === this._sizeLimit;
    }

    /**
     * this._exists: O(n)
     * + this._sort: O(n log(n))
     */
    public addBook(book: Book): Collection {
        if (!book || this.isFull || this._exists(book)) { //TODO: we should handle the error & log however we want
            return this;
        }
        this._collection.push(book);
        this._sort();
        return this;
    }

    /**
     * this._collection.filter: O(n)
     * + this._sort: O(n log(n))
     */
    public removeBook(book: Book): Collection {
        if (!book || this.isEmpty) { //TODO: we should handle the error & log however we want
            return this;
        }
        this._collection = this._collection.filter((el: Book) => el !== book);
        this._sort();
        return this;
    }

    public getTrending(numElements = 3): Array<Book> {
        return this._collection.slice(0, numElements);
    }

    /**
     * O(n)
     */
    public getTrendingByCountry(country: Country, numElements = 3): Array<Book> {
        return this._collection.filter((book: Book) => book.publishedIn(country))
                                .slice(0, numElements);
    }

    /**
     * O(n)
     */
   private _exists(book: Book): boolean {
        return this._collection.filter((el: Book) => el === book).length > 0;
    }

    /**
     * O(n log(n))
     */
    private _sort(): void {
        this._collection.sort((a: Book, b: Book) => b.popularity - a.popularity);
    }
}