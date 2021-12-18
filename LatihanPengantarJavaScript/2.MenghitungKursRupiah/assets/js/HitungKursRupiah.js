function input() {
  const USD = 14650;
  let inputan = Number(document.getElementById("input").value);
  let hasil = inputan * USD;
  document.getElementById("result").value = hasil;
}
