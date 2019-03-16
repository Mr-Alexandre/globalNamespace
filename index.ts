interface Window {
    gc: any;
}
declare var window: Window;

/*TODO: ���������*/
class shadow {
    element: HTMLElement;

    constructor(){
        this.init();
    }

    init(): void {
        let shadowEl: Element = document.createElement("div");
        shadowEl.setAttribute('id', 'gc-shadow');

        let handler = ()=> {
            document.body.appendChild(shadowEl);
            this.element = document.getElementById('gc-shadow');
            document.removeEventListener("DOMContentLoaded", handler)
        }
        document.addEventListener("DOMContentLoaded", handler);


    }
    public show(): void {
        this.element.style.display = 'block';
    }
    public hide(): void {
        this.element.style.display = 'none';
    }
}
class add {
    constructor(){
        console.log('Hello, Add class is active !')
    }
    public hello(): string{
        return "Hello I'm Add class";
    }
    private block(): void {
        console.log("Hey, it's a private method !")
    }
}

window.gc = {};
window.gc.shadow = new shadow();
window.gc.add = new add();
// (<any>window).gc = {};
// (<any>window).gc.shadow = new shadow();
// (<any>window).gc.shadow.show();
