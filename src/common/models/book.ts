import Author from './author';
import Country from './country';
import Publisher from './publisher';

export default class Book {
    constructor(public title: string,
                public authors: Array<Author>,
                public publishers: Array<Publisher>,
                public revision: number,
                public isbn: Array<string>,
                public pages: number,
                public popularity: number,
                public countries: Array<Country>
    ) {}

    public publishedIn(country: Country): boolean {
        return this.countries.filter((el: Country) => el.equals(country)).length > 0;
    }
}