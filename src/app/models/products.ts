export class Product {

    constructor(id: number, title: string, price: number, description: string, category: string, image: string) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
    }

    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string
}