//import codeURL from "./code.png"
import codeURL from "./myCode.png"

const img = document.createElement("img")
img.src = codeURL
img.style = "background: #2B3A42;  padding: 20px"
img.width = 32
//document.body.appendChild(img)
const appRoot = document.getElementById("app-root");
appRoot.appendChild(img);