const styles = `
.nff-overlay {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(17, 103, 250, 0.5);
  width: 100%;
  height: 100%;
  z-index: 1000;
  animation: appear 0.1s;
}

.nff-container {
  font-family: 'Helvetica';
  color: #496B82;
  position: fixed;
  right: 0;
  top: 0;
  width: 400px;
  height: 100vh;
  box-shadow: 0px 5px 8px rgba(0,0,0,0.7);
  background: #F8F8F8;
  z-index: 1001;
  animation: slidein 0.2s;
}

@keyframes slidein {
  from {
    width: 0px;
  }
  to {
    width: 400px;
  }
}

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.feed-item-v1 > a {
  color: #1167FA;
  text-decoration: none !important;
}
..feed-item-v1 > a:visited {
  color: #1167FA;
  text-decoration: none !important;
}

.feed {
  padding: 10px 15px;
  position: relative;
  overflow-y: scroll;
  height: calc(100% - 70px);
}
p {
  line-height: 20px;
}

.feed-item-v1 {
  border-bottom: 1px solid #E8E8E8;
  margin: 10px auto;
  padding: 20px;
  background: white;
  color: #383838;
  padding-bottom: 30px;
}

.feed-item-v1 > h3 {
  font-size: 22px;
  margin: 5px 0 10px 0;
  color: #1167FA;
  font-weight: semi-bold;
}


.feed-item-v1 > p {
  margin: 5px 0 20px 0;
}


.loader {
  width: 50%;
  margin: 0 auto;
}

.feed-header {
  position: relative;
  margin: 0 0 0 0;
  padding: 2px 0;
  width: 100%;
  background: #276AF1;
  display: flex;
  justify-content: space-between;
}
.feed-header > h3 {
  margin: 0;
  padding: 12px;
  color: white;
  font-weight: 400;
}

.feed-closeButton {
  background-color: transparent;
  cursor: pointer;
  color: white;
  border: none;
  font-size: 24px;
  padding: 0 15px;
}

.feed-item-date {
  color: #9AAEBC;
  font-size: 14px;
  margin: 5px 0;
}

.feed-item-header {
  line-height: 14px;
  display: flex;
  justify-content: space-between;
}

.feed-item-badge {
  line-height: 10px;
  margin: auto 0;
  font-size: 10px;
  color: white;
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 5px;
  font-weight: bold;
}

.nff-reaction-footer {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  height: 20px;
  width: 100%;
}
.nff-reaction-footer > button {
  outline: none;
  font-size: 24px;
  background: transparent;
  height: 100%;
  width: auto;
  margin-right: 5px;
  cursor: pointer;
  border: none;
}

`


export default styles;
