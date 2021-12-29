function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username == "raghib" && password == "ti01") {
    alert("Login Succesfully");
  } else {
    alert("Login Failed \nMohon Login dengan \nUsername=raghib \nPassword=ti01");
    return false;
  }
}
