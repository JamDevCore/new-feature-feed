import './App.css'
import styles from './styles';
import getNewsFeed from './get-news-feed';
import loader from './loader';
import build from './build';

let openState = false;

const initStyles = () => {
  const style = document.createElement('style')
  style.innerHTML = styles;
  document.querySelector('head').appendChild(style);
}

export const closeFeed = (event) => {
  try {
    openState = false;
    const body = document.querySelector('body');
    body.removeChild(document.querySelector('#nff-overlay-id'));
  } catch (exception) {
    console.log(exception);
  }
};


const showNewFeatureFeed = (key, base, table) => {
  try {
    if (openState === false) {
    const overlay = build('div', [{ name: 'class', value: 'nff-overlay' }, { name: 'id', value: 'nff-overlay-id'}])
    overlay.addEventListener('click', closeFeed)
    const feedContainer = build('div', [{ name: 'class', value: 'nff-container' }, { name: 'id', value: 'nff-container-id' }]);
    feedContainer.addEventListener('click', () => event.stopPropagation())
    const body = document.querySelector('body');
    body.append(overlay);
    overlay.append(feedContainer)
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

      const feedButton = document.querySelector('#nff-init');
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
}());
