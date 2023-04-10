(function () {
    importCSS("styles/section-products.css");
    imports.src("Hawaiian", "assets/pizza-hawaiian.jpg");
    imports.src("Peperonni", "assets/pizza-italian.jpg");
    imports.src("Mexican", "assets/pizza-hawaiian.jpg");
    imports.src("Mushrooms", "assets/pizza-mushroom.jpg");

    const section = create("section", null, null);
    const title = create("h1", null, "Nuestras pizzas");
    insertIn(section, title);

    const pizzas = [{
        name: "Hawaiian",
        price: "120.58",
        ingre: ["piña", "jamón", "cheedar"]
    },
    {
        name: "Peperonni",
        price: "120.00",
        ingre: ["peperoni", "cheedar", "mozarella"]
    },
    {
        name: "Mexican",
        price: "143.25",
        ingre: ["chile", "carne azada", "cebolla"]
    },
    {
        name: "Mushrooms",
        price: "130.45",
        ingre: ["champiñones", "mozarella", "cheedar"]
    }];

    const productsContainer = create("div", {class:"pizzas-container"}, null);
    pizzas.map(pizza => {
        const pizzaContainer = create("div", {class: "items-product"}, null);

        const pizzaName = create("h3", null, `Pizza ${pizza.name}`);
        const pizzaImg = create("img", { width: "130px", height: "130px", src: imports.use(pizza.name) }, null);
        const ingredientsList = create("ul", null, null);
        pizza['ingre'].map(ingredient => {
            const ingHTML = create("li", null, ingredient);
            insertIn(ingredientsList, ingHTML);
        });
        const pizzaPrice = create("h3", null, `$${pizza.price}`);
        const buttonPay = create("button", null, "¡comprar ahora!");

        insertBrothers(pizzaContainer, pizzaName, pizzaImg, ingredientsList, pizzaPrice, buttonPay);
        insertIn(productsContainer, pizzaContainer);
    });
    insertIn(section, productsContainer);
    insertIn($(app.container), section);
})();