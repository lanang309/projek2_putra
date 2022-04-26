function login(e) {
  e.preventDefault();
  const admin = document.getElementById("admin").value;
  const pass = document.getElementById("pass").value;
  if (nama == "admin" && pass == "admin") {
    alert("Login Sukses");
    location.href = "./kendaraan.html";
  } else {
    alert("Login Gagal");
    window.Location.reload();
  }
}
