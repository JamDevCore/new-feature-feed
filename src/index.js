import styles from './styles';
import initStyles from './init-styles';
import getNewsFeed from './get-news-feed';
import loader from './loader';
import build from './build';

export const closeFeed = () => {
  try {
    const body = document.querySelector('body');
    body.removeChild(document.querySelector('#feed-container-id'));
  } catch (exception) {
    console.log(exception);
  }
};


const showNewFeatureFeed = (key, base, table) => {
  try {
    const feedContainer = build('div', [{ name: 'class', value: 'feed-container-v1' }, { name: 'id', value: 'feed-container-id' }]);
    const body = document.querySelector('body');
    body.append(feedContainer);
    const feed = getNewsFeed(key, base, table);
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
      initStyles(styles);
      feedButton.addEventListener('click', () => {
        showNewFeatureFeed(key, base, table)
      });
  } catch (exception) {
    console.log(exception);
  }
}
}())

export default 'Welcome to new-feature-feed'
