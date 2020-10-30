document.getElementById("new").addEventListener("click", function () {
    document.getElementsByClassName("fondo-modal")[0].style.display =
      "block";
    document.getElementsByClassName("all")[0].style.filter = "blur(5px)";
    return false;
  });
  document
    .getElementsByClassName("modal_cerrar")[0]
    .addEventListener("click", function () {
      document.getElementsByClassName("fondo-modal")[0].style.display =
        "none";
      document.getElementsByClassName("all")[0].style.filter = "blur(0)";
    });