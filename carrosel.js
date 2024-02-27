let contLanc = 1;
let clickLanc = 0;
document.getElementById("radioLanc1").checked = true;
let intervalLanc = 3000;
function resetCont(reset) {
    contLanc = reset;
}
function rein() {
    if (clickLanc == 0) {
        setInterval(navigatorAutoLanc, interval);
    }
};
let interLanc = setInterval(navigatorAutoLanc, intervalLanc);
function navigatorAutoLanc() {
    contLanc++
    if (contLanc > 4) {
        contLanc = 1;
    }
    document.getElementById("radioLanc" + contLanc).checked = true;
    clickLanc = 1;
}

function anteriorLanc() {
    if (contLanc != 1) {
        clearInterval(interLanc)
        contLanc--
        document.getElementById('radioLanc' + contLanc).checked = true;
        clickLanc = 1;
    }
}
function proximoLanc() {
    if (contLanc != 4) {
        clearInterval(interLanc)
        contLanc++
        document.getElementById('radioLanc' + contLanc).checked = true;
    }
}
// Lançamento

// Vendidos

let contVend = 1;
let clickVend = 0;
document.getElementById("radioLanc1").checked = true;
let intervalVend = 3000;
function resetCont(reset) {
    contVend = reset;
}
function rein() {
    if (click == 0) {
        setInterval(navigatorAutoVend, intervalVend);
    }
};
let interVend = setInterval(navigatorAutoVend, intervalVend);
function navigatorAutoVend() {
    contVend++
    if (contVend > 4) {
        contVend = 1;
    }
    document.getElementById("radioVend" + contVend).checked = true;
    clickVend = 1;
}

function anteriorVend() {
    if (contVend != 1) {
        clearInterval(interVend)
        contVend--
        document.getElementById('radioVend' + contVend).checked = true;
        clickVend = 1;
    }
}
function proximoVend() {
    if (contVend != 4) {
        clearInterval(interVend)
        contVend++
        document.getElementById('radioVend' + contVend).checked = true;
    }
}


