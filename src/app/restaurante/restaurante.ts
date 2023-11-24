export class Restaurante {

    id: number;
    name: string;
    country: string;
    cuisine: string;
    opening_year: number;
    rating: number;
    description: string;
    image: string;


    constructor(id: number, name: string, country: string, cuisine: string, opening_year: number, rating: number, description: string, image: string){
        this.id = id;
        this.name = name;
        this.country = country;
        this.cuisine = cuisine;
        this.opening_year = opening_year;
        this.rating = rating;
        this.description = description;
        this.image = image;
    }
}
