// hitung luas persegi
const sisi = document.getElementById("sisi-luas");
const hitung = document.getElementById("hitung-luas");
const output = document.getElementById("output_luas");

hitung.addEventListener("click", function () {
  let sk = sisi.value;
  let k = sk * sk;

  output.innerHTML = `L = S x S <br>
 L = ${sk} x ${sk} <br>
 L = ${k}`;
});

// hitung keliling persegi
const sisikel = document.getElementById("sisi-keliling");
const hitungkel = document.getElementById("hitung-keliling");
const outputkel = document.getElementById("output_keliling");

hitung.addEventListener("click", function () {
  let skl = sisikel.value;
  let a = 4;
  let kl = a * sk;

  output.innerHTML = `K = 4 x S <br>
 K = ${a} x ${skl} <br>
 K = ${kl}`;
});
