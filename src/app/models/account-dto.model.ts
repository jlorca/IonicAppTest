export class AccountDTO {
    Id: number;
    Name: string;
    Website: string;
    Type: string;
    Rating: string;

    constructor(id: number, name: string, website: string, type: string, rating: string) {
        this.Id = id;
        this.Name = name;
        this.Website = website;
        this.Type = type;
        this.Rating = rating;
    }
}