const initStyles = () => {
  var ss = document.createElement("link");
  ss.type = "text/css";
  ss.rel = "stylesheet";
  ss.href = "./src/index.css";
  document.getElementsByTagName("head")[0].appendChild(ss);
}


export default initStyles;
