window.onload = function() {
    let tekstas = "Čia yra kažkoks tekstas";


    let zodis1 = "kelmas";
    let zodis2 = "medis";
    let zodis3 = "tvora";
    let zodis4 = "vejas";
                                                                         // cia yra 5 parametrai 
    console.log("Trijų žodžių bendras ilgis yra: " + trijuZodziuBendrasIlgis(zodis1, "betonas", zodis2 + "uraganas" + "lietuva" + zodis3 + zodis4)); 
}


function grazinaTekstoIlgi(text) {
    return text.length;
}

//function turi 3 parametrus 
function trijuZodziuBendrasIlgis(text1, text2, text3) {
    let text1Ilgis = text1.length;
    let text2Ilgis = text2.length;
    let ilgiuSuma = text1Ilgis + text2Ilgis + text3.length;

    return ilgiuSuma;
}
