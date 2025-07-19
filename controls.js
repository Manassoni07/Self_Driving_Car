class Controls{
    constructor(){
        this.forward = false;
        this.left = false;
        this.reverse = false;
        this.right = false;

        this.#addKeyboardListeners(); // this is private method to add listeners in keybord

    }
    #addKeyboardListeners(){
        // we don't use function here because by doing this is not reffering to this in constuctor
        // so we use arrow funtion 
        document.onkeydown = (event)=>{
            switch (event.key) {
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
                case "ArrowDown":
                    this.reverse = true;
                    break;
            }
            //console.table(this);// to debug these listener work properly or not 
        }

        document.onkeyup = (event)=>{
            switch (event.key) {
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowUp":
                    this.forward = false;
                    break;
                case "ArrowDown":
                    this.reverse = false;
                    break;
            }
           // console.table(this);// to debug these listener work properly or not 
        } 
    }
}