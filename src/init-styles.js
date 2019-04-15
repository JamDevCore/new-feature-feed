const initStyles = (stylesheet) => {
  const styles = document.createElement('link')
  styles.rel="stylesheet"
  styles.type = "text/css"
  styles.href = "https://unpkg.com/new-feature-feed/umd/main.487a3513.css"
  document.getElementsByTagName("head")[0].appendChild(styles);
}


export default initStyles;
