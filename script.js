const screen = document.querySelector(".window");

function calculator(valor) {
    
    screen.value +=  valor;
}

function del() {
    screen.value = "";
}

function delone() {
    screen.value = screen.value.slice(0, -1)
}

function result() {
    screen.value = eval(screen.value);
}