function HTMLElement(className, id) {
    console.log("---call HTMLElement---", this);
    this.className = className;
    this.id = id;
}

HTMLElement.prototype.render = function () {
    console.log("Tag rendered from HTMLElement.prototype", this);
}

HTMLElement.prototype.rotate = function () {
    console.log("common rotate", this);
}

const mySuper = (context, parentCnstr, args) => {
    parentCnstr.apply(context, args);
};

function IMGElement(src, ...args) {
    mySuper(this, HTMLElement, args);
    this.src = src;
}

IMGElement.prototype.showPicture = function () {
    console.log("show picture", this.src);
};

function AnchorElement(href, className, id, flag = false,) {
    mySuper(this, HTMLElement, [className, id]);
    this.href = href;
    if (flag) {
        this.redirect = function () {
            console.log("---special---")
        }
    }
}

AnchorElement.prototype = Object.create(HTMLElement.prototype);
IMGElement.prototype = Object.create(HTMLElement.prototype);
HTMLElementInput.prototype = Object.create(HTMLElement.prototype);

AnchorElement.prototype.redirect = function () {
    console.log("rendering...", this.href);
}

AnchorElement.prototype.rotate = function (...args) {
    mySuper(this, HTMLElement, args);
}

const link = new AnchorElement(
    "https://raptor.com",
    "link-className",
    "link-id",
);
const link2 = new AnchorElement("https://frizbiz.ccom", "link", "link", true);

const img = new IMGElement("ewdww", 'dwwwd', 'dwwd');

link.rotate();
link2.rotate();

img.rotate();

function HTMLElementInput(id, price) {
    this.id = id;
    this.price = price;

    this.valid = function () {
        console.log('Your info in correct');
    }
}

HTMLElementInput.prototype.available = function () {
    console.log('type your info');
}

HTMLElementInput.prototype.invalid = function () {
    console.log('check your info');
}

const input = new HTMLElementInput('ID-320192', '276');

console.log(input, '=> HTML-element-input');
input.redirect();
input.rotate();
input.render();
input.available();
input.invalid();


