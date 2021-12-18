function hitungParkir() {
  let jam_masuk = document.getElementById("masuk").value;
  let jam_keluar = document.getElementById("keluar").value;
  let selisih = jam_keluar - jam_masuk;
  let biaya = 0;
  const TARIF_AWAL = 3000;
  const TARIF_PERJAM = 1000;
  if (selisih <= 2) {
    biaya = TARIF_AWAL;
  } else {
    let tambahan_jam = selisih - 2;
    biaya = TARIF_AWAL + TARIF_PERJAM * tambahan_jam;
  }
  let area_biaya = document.getElementById("biaya");
  area_biaya.innerHTML = "Biaya Parkir " + biaya;
}
