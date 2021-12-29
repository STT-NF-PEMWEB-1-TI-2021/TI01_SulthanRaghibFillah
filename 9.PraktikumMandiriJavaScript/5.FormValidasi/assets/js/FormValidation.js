function validatedForm() {
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let jam = document.getElementById("jam").value;
  let tujuan = document.getElementById("tujuan").value;
  let tiket = document.getElementById("tiket").value;

  if (document.forms["cek"]["nama"].value == "") {
    alert("Nama Tidak Boleh Kosong");
    document.forms["cek"]["nama"].focus();
    return false;
  }
  if (document.forms["cek"]["email"].value == "") {
    alert("Email Tidak Boleh Kosong");
    document.forms["cek"]["email"].focus();
    return false;
  }
  if (document.forms["cek"]["jam"].selectedIndex == "") {
    alert("Mohon Masukan Jam Keberangkatan");
    document.forms["cek"]["jam"].focus();
    return false;
  }
  if (document.forms["cek"]["tujuan"].value == "") {
    alert("Tujuan Tidak Boleh Kosong");
    document.forms["cek"]["tujuan"].focus();
    return false;
  }
  if (document.forms["cek"]["tiket"].selectedIndex < 1) {
    alert("Mohon Pilih Jumlah Tiket Anda");
    document.forms["cek"]["tiket"].focus();
    return false;
  }

  alert(
    "Terimakasih Check-in Anda Berhasil dengan data \nNama : " +
      nama +
      "\nEmail : " +
      email +
      "\nJam Berangkat : " +
      jam +
      "\nTujuan : " +
      tujuan +
      "\nJumlah Tiket : " +
      tiket
  );
}
