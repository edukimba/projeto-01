//botão de alterar modo
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar imagem
  const img = document.querySelector("#profile img")
  //substituir imagem
  if (html.classList.contains("light")) {
    //alterar para light
    img.setAttribute("src", "./assets/rosto-li.png")
  } else {
    //alterar para normal
    img.setAttribute("src", "./assets/rosto.png")
  }
}
