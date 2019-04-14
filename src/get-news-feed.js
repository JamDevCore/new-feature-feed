import build from './build';
import loader from './loader';
import { closeFeed } from './index';

const tag = {
  news: {
    color: 'background-color:#F5CA61', label: 'News',
  },
  feature: {
    color: 'background-color:#66DF9F', label: 'Feature',
  },
}

const addFeedItem = (record) => {
  try {
    console.log(record)
    const container = build('div', [{ name:'class', value: 'feed-item-v1'}, { name: 'id', value: record.title }]);
    if(record.date) {
      const feedItemHeader = build('div', [{ name: 'class', value: 'feed-item-header'}]);
      container.appendChild(feedItemHeader)
      const date = build('p', [{ name: 'class', value: 'feed-item-date'}], record.date);
      feedItemHeader.appendChild(date);
      container.appendChild(feedItemHeader);
      if(record.tag) {
        const badge = build('span', [
          { name: 'class', value: 'feed-item-badge'},
          { name: 'style', value: tag[record.tag].color },
        ], tag[record.tag].label);
        feedItemHeader.appendChild(badge);
      }
    }
    if(record.title) {
      const title = build('h3', [], record.title);
      container.appendChild(title);
    }
    if(record.notes) {
      const text = build('p', [], record.notes);
      container.appendChild(text);
    }
    if(record.link) {
      const link = build('a', [{ name: 'href', value: record.link }], 'Read more');
      container.appendChild(link);
    }

    const feed = document.querySelector('.feed')
    feed.appendChild(container);
  } catch (exception) {
    console.log(exception);
  }
}

const addFeedHeader = (feedContainer) => {
  try {
    const header = build('div', [{ name: 'class', value: 'feed-header'}])
    const title = build('h3', [], `What's new`);
    feedContainer.append(header);
    header.append(title);
    header.append(build('button', [{ name: 'class', 'value': 'feed-closeButton'}], '&#10005;'))
  } catch (exception) {
    console.log(exception);
  }
}

const getNewsFeed = (key, base, table) => {
  try {
    const feedContainer = document.querySelector('#feed-container-id');
    feedContainer.innerHTML = loader;
    const Airtable = require('airtable');
    const currentBase = new Airtable({apiKey: key}).base(base);
    currentBase(table).select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 5,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        feedContainer.innerHTML = '';
        addFeedHeader(feedContainer);
        const feed = build('div', [{ name: 'class', value: 'feed'}]);
        feedContainer.appendChild(feed);
        document.querySelector('.feed-closeButton').addEventListener('click', () => closeFeed())
        records.forEach(function(record) {
            console.log('Retrieved', record.get('title'));
            addFeedItem(record.fields)
        });
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
  } catch (exception) {
    console.log(exception);
  }
}


export default getNewsFeed;
