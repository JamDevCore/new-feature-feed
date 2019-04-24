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
  position: relative;
  overflow-y: scroll;
  height: calc(100% - 50px);
}
p {
  line-height: 20px;
}

.feed-item-v1 {
  border-bottom: 1px solid #E8E8E8;
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
  font-size: 16px;
  margin: 12px 0 12px 0;
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

.nff-footer-item {
  display: flex;
  justify-content: space-between;
  height: auto;
  width: 100%;
  position: relative;
  margin-bottom: 20px;
}
.nff-footer-item > a {
  background: #00e399;
  border-radius: 4px;
  font-family: Helvetica-Bold;
  font-size: 14px;
  color: #4A4A4A;
  padding: 6px 14px;
  text-align: center;
  position: relative;
  bottom: -28px;
  max-height: 18px;
  color: white;
  text-decoration: none;
}

.nff-footer-item > a:hover {
  background: #00b077;
}

.nff-footer-item > div  {
  max-height: 40px;
  max-width: 120px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: auto;
  margin-right: 0;
}

.nff-footer-item > div > p  {
  color: #9AAEBC;
  font-size: 14px;
  margin: 5px 0;
}

.nff-footer-item > div >  div > button {
  outline: none;
  font-size: 24px;
  background: transparent;
  color: white;
  height: 100%;
  margin-bottom: 0;
  cursor: pointer;
  border: none;
  transition: font-size 0.2s;
}

.nff-footer-item > div >  div > button:hover {
  font-size: 32px;
}

.selected {
  font-size: 32px !important;
}


`


export default styles;
