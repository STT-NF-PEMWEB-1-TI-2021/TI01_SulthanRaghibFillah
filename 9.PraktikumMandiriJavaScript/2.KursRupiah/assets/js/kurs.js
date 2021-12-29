function convert() {
  const dolarUS = 9915;
  const dollarSG = 13472;
  const ringgitMalay = 874;
  const yen = 120;
  const euro = 15888;
  const riyal = 3592;

  if (pilih.value == "usd") {
    let masuk = Number(document.getElementById("masuk").value);
    let hasil = masuk * dolarUS;
    document.getElementById("hasil").value = hasil;
  } else if (pilih.value == "sgd") {
    let masuk = Number(document.getElementById("masuk").value);
    let hasil = masuk * dollarSG;
    document.getElementById("hasil").value = hasil;
  } else if (pilih.value == "ringgit") {
    let masuk = Number(document.getElementById("masuk").value);
    let hasil = masuk * ringgitMalay;
    document.getElementById("hasil").value = hasil;
  } else if (pilih.value == "yen") {
    let masuk = Number(document.getElementById("masuk").value);
    let hasil = masuk * yen;
    document.getElementById("hasil").value = hasil;
  } else if (pilih.value == "euro") {
    let masuk = Number(document.getElementById("masuk").value);
    let hasil = masuk * euro;
    document.getElementById("hasil").value = hasil;
  } else if (pilih.value == "riyal") {
    let masuk = Number(document.getElementById("masuk").value);
    let hasil = masuk * riyal;
    document.getElementById("hasil").value = hasil;
  }
}
