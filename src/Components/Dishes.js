class Dish {
    constructor(name, desc, price) {
        this.name = name;
        this.desc = desc;
        this.price = price;
    }
}

const pizza = new Dish(
    "Pizza",
    "A delicious pizza prepared by the best cook in town.",
    "$8.60",
);
const spaghetti = new Dish(
    "Spaghetti",
    "A delightful Spaghetti with cheese, italian pasta and tomato juice.",
    "$5.99",
);
const lasagna = new Dish(
    "Lasagna",
    "The best lasagna worldwide, a legendary lasagna recommended to everyone who has a good taste for italians pasta.",
    "$13.40",
);
const burger = new Dish(
    "Burger",
    "A very tasty Hamburger, made with explotions of flavors of various sources, only for clients with a huge appettite since it's really big.",
    "$24.80",
);
const taco = new Dish(
    "Taco",
    "Mexican taco, it's not suited to everyone, it has a lot of spices, and it's not recommended to customers who are'nt used to really spicy foods.",
    "$9.20",
);
const Dishes = [pizza, spaghetti, lasagna, burger, taco];

export default Dishes;
