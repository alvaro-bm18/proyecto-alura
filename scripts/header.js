(function () {
    importCSS("styles/header.css");
    const appLogo = imports.src("logo", "assets/logo.png");
    const pageHeader = create("header", { class: "header-app" }, null);
    const title = create("h1", { class: "title" }, "El comelón");
    const logo = create("img", {width: "100px", height: "100px", src: appLogo}, null);

    const pages = [
        {
            title: "home",
            file: "index.html"
        },
        {
            title: "contact",
            file: "contact.html"
        },
        {
            title: "products",
            file: "products.html"
        }
    ];

    const nav = create("nav", { class: "navegation-header" }, null);
    pages.map(page => {
        const aAttr = {
            href: page["file"],
            alt: `Go to ${page["file"]}`,
            title: `Go to ${page["file"]}`
        };
        const a = create("a", aAttr, page["title"]);
        insertIn(nav, a);
    });

    insertBrothers(pageHeader, logo, title, nav);
    insertIn($(app.container), pageHeader);
})();