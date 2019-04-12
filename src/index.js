import initStyles from './initStyles';

const build = (element, attributes, text) => {
  const ele = document.createElement(element);
  if(attributes && attributes.length > 0) {
    attributes.forEach((att) => {
      if(att.name && att.value) {
        console.log(att.name, att.value)
        ele.setAttribute(att.name, att.value)
        console.log(ele)
      }
    })
  }
  if(text) ele.innerHTML = text;
  return ele;
}

const addFeedItem = (record) => {
  console.log(record)
  const container = build('div', [{ name:'class', value: 'feed-item-v1'}]);
  const title = build('h4', [], record.title);
  const text = build('p', [], record.notes);
  const link = build('a', [{ name: 'href', value: record.link }], 'Read more');
  container.appendChild(title);
  container.appendChild(text);
  container.appendChild(link);
  const feed = document.querySelector('#feed-container-id')
  feed.appendChild(container);
}

const getNewsFeed = (key, base, table) => {
  const Airtable = require('airtable');
  const currentBase = new Airtable({apiKey: key}).base(base);

  currentBase(table).select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 5,
      view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function(record) {
          console.log('Retrieved', record.get('title'));
          addFeedItem(record.fields)
      });

  }, function done(err) {
      if (err) { console.error(err); return; }
  });
}

const showNewFeatureFeed = (key, base, table) => {
  const feed = getNewsFeed(key, base, table)
  const feedContainer = build('div', [{ name: 'class', value: 'feed-container-v1' }, { name: 'id', value: 'feed-container-id' }]);
  console.log(feedContainer)
  const body = document.querySelector('body');
  console.log(body);
  body.append(feedContainer);
}


(function initFeed() {
  const script = document.currentScript;
  window.onload = function() {
    try {
    const key = script.getAttribute('data-airtable-key')
    const base = script.getAttribute('data-airtable-base')
    const table = script.getAttribute('data-airtable-table')
    console.log(key, base, table);
    if (!key || !base || !table) throw new Error('Please add config data to the script tag');
    const feedButton = document.querySelector('#feature-feed-init');
    console.log(feedButton)
    if(!feedButton) throw new Error('No ID found: Add the id => feature-feed-init <= to a button')
    initStyles();
    feedButton.addEventListener('click', () => {
      showNewFeatureFeed(key, base, table)
    })
  } catch (exception) {
    console.log(exception);
  }
}
}())

export default 'Welcome to new-feature-feed'
