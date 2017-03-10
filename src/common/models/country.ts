export default class Country {
    constructor(public code: string) {}

    public equals(country: Country): boolean {
        return this.code === country.code;
    }
}