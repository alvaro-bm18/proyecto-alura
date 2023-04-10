(function () {
    importCSS("styles/footer.css");
    const footer = create("footer", null, null);
    const footTitle = create("h3", null, `"Una rebanada una sonrisa"`);
    const paragraph = create("p", null, "gracias por su preferencia");
    const logo = create("img", { src: imports.use("logo") }, null);
    const miniTitle = create("h6", null, "made with love by me :)");
    insertBrothers(
        footer,
        footTitle,
        paragraph,
        logo,
        miniTitle);
    insertIn($(app.container), footer);
})();