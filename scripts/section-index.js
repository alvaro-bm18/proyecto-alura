(function () {
    importCSS("styles/section-index.css");
    const bannerSrc = imports.src("banner", "assets/cover_ia.jpg");
    const pizza = imports.src("pizza-hawaiian", "assets/pizza-hawaiian.jpg");
    const section = create("section", null, null);

    const pizzas = ["Hawaiian", "Peperonni", "Mexican", "Mushrooms"];

    const pizzasList = create("ul", { class: "list-pizzas" }, null);
    pizzas.map(item => insertIn(pizzasList, create("li", null, item)));

    const title = create("h3", null, "Te ofrecemos nuestras pizzas:");
    const introduce = create("p", null, "Conocenos, tenemos las mejores pizzas de la ciudad, ¿te animas a probarlas?");
    const banner = create("img", { width: "100%", height: "280px", src: bannerSrc, alt: "banner created by an AI" }, null);

    const containerList = create("div", { class: "container-list" }, null);
    const imgPizza = create("img", {src: pizza}, null);
    insertBrothers(containerList, pizzasList, imgPizza);

    insertBrothers(section, banner, title, containerList, introduce);
    insertIn($(app.container), section);
})();