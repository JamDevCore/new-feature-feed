const styles = `.feed-container-v1 {
  font-family: 'Helvetica';
  color: #383838;
  position: fixed;
  right: 0;
  top: 0;
  width: 400px;
  height: 100vh;
  box-shadow: 0px 5px 8px rgba(0,0,0,0.7);
  background: #F8F8F8;
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
  font-size: 24px;
  margin: 5px 0 10px 0;
  color: #276AF1;
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
  width: 100%;
  background:#276AF1;
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
  color: #CDCDCD;
  font-size: 14px;
  margin: 5px 0;
}

.feed-item-header {
  line-height: 14px;
  display: flex;
  justify-content: space-between;
}

.feed-item-badge {
  margin: auto 0;
  font-size: 12px;
  color: white;
  text-transform: uppercase;
  padding: 5px 10px;
  border-radius: 5px;
  height: 12px;
  font-weight: bold;
}
`
