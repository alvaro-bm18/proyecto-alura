const srcManagement = () => {
    const srcImported = {};
    return {
        src(alias, src) {
            if (srcImported[alias]) {
                throw (new Error(`ỳa existe un alias con el nombre '${alias}'`));
            }

            srcImported[alias] = src;
            return srcImported[alias];
        },
        use(alias) {
            if (srcImported[alias] === undefined) {
                throw (new Error(`${alias} no existe en los imports`));
            }

            return srcImported[alias];
        }
    }
}

const imports = srcManagement();

const $ = selector => document.querySelector(selector);
const create = (tag, attributes, innerText) => {
    const element = document.createElement(tag);

    if (attributes) {
        const attrs = Object.keys(attributes);
        attrs.map(attr => element.setAttribute(attr, attributes[attr]));
    }

    if (innerText) {
        const textNode = document.createTextNode(innerText);
        element.appendChild(textNode);
    }

    return element;
};

const addEvent = (element, ev, func) => element.addEventListener(ev, func);
const insertIn = (parent, child) => parent.appendChild(child);
const insertTree = tree => {
    for (let i = 0; i < tree.length - 1; i++) {
        insertIn(tree[i], tree[i + 1]);
    }
    return tree[0];
};
const insertBrothers = (parent, ...brothers) => {
    brothers.map(brother => insertIn(parent, brother));
    return parent;
};
const importCSS = path => {
    const head = $("head");
    const link = create("link", {
        type: "text/css",
        href: path,
        rel: "stylesheet",
        media: "screen, print"
    }, null);
    insertIn(head, link);
}