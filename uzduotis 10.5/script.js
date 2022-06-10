window.onload = function () {
    let a = 120;
    let x = 2000;
    let b = 13;
    let c = 100;
    let d = 1.258;

    console.log (prekiukaina(a,a,c,b))
    console.log (prekiukaina(x,x,c,d))
}

function prekiukaina (skaicius,skaicius2,skaiciusb,skaiciusc) {
    skaicius = skaicius / skaiciusb * skaiciusc;
    let prideti = skaicius + skaicius2;
    return prideti
}
