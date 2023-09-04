var cel = document.getElementById("cel");
var fah = document.getElementById("fah");
var kel = document.getElementById("kel");
cel.addEventListener('input', function() {
    let c = parseFloat(this.value);
    let f = (c * 9/5) + 32;
    let k = c + 273.15; 
    if (!Number.isNaN(f)) {
        fah.value = f.toFixed(3);
    }
    if (!Number.isNaN(k)) {
        kel.value = k.toFixed(3);
    }
});
fah.addEventListener('input', function() {
    let f = parseFloat(this.value);
    let c = (f - 32) * 5/9;
    let k = ((f - 32) * 5/9) + 273.15; 
    if (!Number.isNaN(c)) {
        cel.value = c.toFixed(3);
    }
    if (!Number.isNaN(k)) {
        kel.value = k.toFixed(3);
    }
});
kel.addEventListener('input', function() {
    let k = parseFloat(this.value);
    let c = k - 273.15; 
    let f = (c * 9/5) + 32;
    if (!Number.isNaN(c)) {
        cel.value = c.toFixed(3);
    }
    if (!Number.isNaN(f)) {
        fah.value = f.toFixed(3);
    }
});