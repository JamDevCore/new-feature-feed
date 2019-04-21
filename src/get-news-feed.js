import build from './build';
import loader from './loader';
import { closeFeed } from './index';
import addFeedItem from './add-feed-item';

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
    const feedContainer = document.querySelector('#nff-container-id');
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
