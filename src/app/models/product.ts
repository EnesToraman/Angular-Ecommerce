export class Product {

    constructor(id: number, name: string, price: number, description: string, category: string, image: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
    }

    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string
}