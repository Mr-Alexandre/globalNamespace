/*TODO: ���������*/
var shadow = /** @class */ (function () {
    function shadow() {
        this.init();
    }
    shadow.prototype.init = function () {
        var _this = this;
        var shadowEl = document.createElement("div");
        shadowEl.setAttribute('id', 'gc-shadow');
        var handler = function () {
            document.body.appendChild(shadowEl);
            _this.element = document.getElementById('gc-shadow');
            document.removeEventListener("DOMContentLoaded", handler);
        };
        document.addEventListener("DOMContentLoaded", handler);
    };
    shadow.prototype.show = function () {
        this.element.style.display = 'block';
    };
    shadow.prototype.hide = function () {
        this.element.style.display = 'none';
    };
    return shadow;
}());
var add = /** @class */ (function () {
    function add() {
        console.log('Hello, Add class is active !');
    }
    add.prototype.hello = function () {
        return "Hello I'm Add class";
    };
    add.prototype.block = function () {
        console.log("Hey, it's a private method !");
    };
    return add;
}());
window.gc = {};
window.gc.shadow = new shadow();
window.gc.add = new add();
// (<any>window).gc = {};
// (<any>window).gc.shadow = new shadow();
// (<any>window).gc.shadow.show();
