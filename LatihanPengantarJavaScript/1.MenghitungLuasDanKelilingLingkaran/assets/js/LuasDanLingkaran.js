function hitung() {
  const PHI = 3.14;
  let jari = document.getElementById("bil1").value;
  console.log("jari-jari : " + jari);
  let luas = PHI * jari * jari;
  let keliling = 2.0 * PHI * jari;
  console.log("Luas : " + luas);
  console.log("Keliling : " + keliling);
  let area_hasil = document.getElementById("hasil");
  area_hasil.innerHTML = "Luas : " + luas + "</br>" + "Keliling : " + keliling;
}
