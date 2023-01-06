let btnCopiar = document.querySelector(".btn-copiar");

btnCopiar.onclick = function() {
    resultado.select();
    Document.execCommand("copy");
    inputTexto.value = "";
    inputTexto.focus();
    resultado.textContent = "";
    btnCopiar.classList.add("invisivel");
}