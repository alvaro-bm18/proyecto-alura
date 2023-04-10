(function () {
    importCSS("styles/section-contact.css");
    const section = create("section", null, null);
    const title = create("h3", null, "Contactanos");

    const form = create("form", null, null);
    const lbName = create("label", { for: "nombre" }, "Nombre");
    const inpName = create("input",
        {
            type: "text",
            name: "nombre",
            id: "nombre",
            placeholder: "ej. Hugo Lopez"
        }, null);

    const lbEmail = create("label", { for: "email" }, "E-mail");
    const inpEmail = create("input",
        {
            type: "email",
            name: "email",
            id: "email",
            placeholder: "ej. hugo.lopez@email.com"
        }, null);

    const lbTel = create("label", { for: "tel" }, "Télefono");
    const inpTel = create("input",
        {
            type: "tel",
            name: "tel",
            id: "tel",
            placeholder: "ej. 5566844599"
        }, null);

    const lbComment = create("label", { for: "comment" }, "Comentario");
    const comment = create("textarea", {
        name: "comment",
        id: "comment",
        placeholder: "Comenta y comparte tu opinio aquí"
    }, null);

    const inpTerms = create("input",
        {
            type: "checkbox",
            name: "terms",
            id: "terms"
        }, null);

    const lbTerms = create("label", { for: "terms" }, "Enviame notificaciones sobre las promociones");

    const buttonSend = create("button", null, "enviar");

    insertBrothers(
        form,
        lbName,
        inpName,
        lbEmail,
        inpEmail,
        lbTel,
        inpTel,
        lbComment,
        comment,
        lbTerms,
        inpTerms,
        buttonSend
    );
    insertBrothers(section, title, form);
    insertIn($(app.container), section);
})();