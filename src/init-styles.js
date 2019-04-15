const initStyles = (stylesheet) => {
  const script = document.createElement("script");
  document.getElementsByTagName("head")[0].appendChild(script);
  const styles = document.createElement('style')
  styles.innerHTML = stylesheet;
  script.appendChild(styles);
}


export default initStyles;
