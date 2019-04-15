import './App.css'
import getNewsFeed from './get-news-feed';
import loader from './loader';
import build from './build';

let openState = false;

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
  z-index: 1000;
}

.feed-item-v1 > a {
  color: #1167FA;
  text-decoration: underline !important;
}
..feed-item-v1 > a:visited {
  color: #1167FA;
  text-decoration: underline !important;
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
  background: #713FED;
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
}`

const initStyles = () => {
  const style = document.createElement('style')
  style.innerHTML = styles;
  document.querySelector('head').appendChild(style);
}

export const closeFeed = () => {
  try {
    openState = false;
    const body = document.querySelector('body');
    body.removeChild(document.querySelector('#feed-container-id'));
  } catch (exception) {
    console.log(exception);
  }
};


const showNewFeatureFeed = (key, base, table) => {
  try {
    if (openState === false) {
    const feedContainer = build('div', [{ name: 'class', value: 'feed-container-v1' }, { name: 'id', value: 'feed-container-id' }]);
    const body = document.querySelector('body');
    body.append(feedContainer);
    const feed = getNewsFeed(key, base, table);
    openState = true;
  } else {
    closeFeed()
  }
  } catch (exception) {
    console.log(exception);
  }
}


(function initFeed() {
  const script = document.currentScript;
  window.onload = function() {
    try {

      const feedButton = document.querySelector('#feature-feed-init');
      if(!feedButton) throw new Error('No ID found: Add the id => feature-feed-init <= to a button')

      const key = feedButton.getAttribute('data-airtable-key');
      const base = feedButton.getAttribute('data-airtable-base');
      const table = feedButton.getAttribute('data-airtable-table');

      if (!key || !base || !table) throw new Error('Please add config data to the script tag');
      initStyles()
      feedButton.addEventListener('click', () => {
        showNewFeatureFeed(key, base, table)
      });
  } catch (exception) {
    console.log(exception);
  }
}
}())

export default 'Welcome to new-feature-feed'
