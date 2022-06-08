window.onload = function () {
    let a = "karaliskasiskelias"
    
    console.log (sugrazinti(a))
}

function sugrazinti (raides) {
    return raides.slice(1,3) + raides.slice(4,10)
}