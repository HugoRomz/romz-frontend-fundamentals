let sectionResultado = document.getElementById("resultado");
let textoResultado = document.getElementById("texto-respuesta");
let sectionVacio = document.getElementById("resultado-vacio");

sectionResultado.style.display = "none";

const encriptarTexto = () => {
  const textoEntrada = document.getElementById("input-entrada").value;

  if (/[A-Z]/.test(textoEntrada)) {
    alert("El texto debe estar en minúsculas.");
    return;
  }

  if (/[^a-z\s]/.test(textoEntrada)) {
    alert("El texto contiene caracteres especiales no permitidos.");
    return;
  }

  if (textoEntrada === "") {
    alert("No se puede encriptar un texto vacío");
    return;
  }

  if (
    textoEntrada.includes("enter") ||
    textoEntrada.includes("imes") ||
    textoEntrada.includes("ai") ||
    textoEntrada.includes("ober") ||
    textoEntrada.includes("ufat")
  ) {
    alert("El texto ya está encriptado");
    return;
  }

  const textoEncriptado = textoEntrada
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  sectionVacio.style.display = "none";
  sectionResultado.style.display = "flex";
  textoResultado.innerHTML = textoEncriptado;
};

const desencriptarTexto = () => {
  const textoEntrada = document.getElementById("input-entrada").value;

  if (textoEntrada === "") {
    alert("No se puede desencriptar un texto vacío");
    return;
  }

  const textoDesencriptado = textoEntrada
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  sectionVacio.style.display = "none";
  sectionResultado.style.display = "flex";
  textoResultado.innerHTML = textoDesencriptado;
};

const limpiarTexto = () => {
  document.getElementById("input-entrada").value = "";
  sectionResultado.style.display = "none";
  sectionVacio.style.display = "flex";
};

const copiarTexto = () => {
  const texto = textoResultado.innerHTML;
  navigator.clipboard.writeText(texto);
  alert("Texto copiado al portapapeles");
};
