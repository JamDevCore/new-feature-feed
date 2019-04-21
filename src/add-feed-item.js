import build from './build';

const tag = {
  news: {
    color: 'background-color:#F5CA61', label: 'News',
  },
  feature: {
    color: 'background-color:#66DF9F', label: 'Feature',
  },
}

const sendReaction = (event) => {
  const feedButton = document.querySelector('#nff-init');
  const key = feedButton.getAttribute('data-airtable-key');
  const tableBase = feedButton.getAttribute('data-airtable-base');
  const table = feedButton.getAttribute('data-airtable-table');

  const { attributes } = event.srcElement;
  const recordId = attributes['data-record-id'].value;
  const elementId = attributes.id.value;
  const currentValue = (attributes.value && attributes.value.value) || 0;
  const reactionType = attributes['data-reaction-type'].value;

  var Airtable = require('airtable');
  var base = new Airtable({apiKey: key}).base(base);
  const newTotal = parseInt(currentValue) + 1;

  console.log(newTotal)
  console.log(attributes['data-record-id'].value)

  base(tableBase).update(recordId, {
    [reactionType]: newTotal,
  }, function(err, record) {
    if (err) { console.error(err); return; }
    document.querySelector(`#${elementId}`).value = record.fields[reactionType];
    console.log(document.querySelector(`#${elementId}`).value)
  });
}

const addFeedItem = (record) => {
  try {
    console.log(record)
    const container = build('div', [{ name:'class', value: 'feed-item-v1'}, { name: 'id', value: record.title }]);
    const feedItemHeader = build('div', [{ name: 'class', value: 'feed-item-header'}]);
    container.appendChild(feedItemHeader)
    if(record.date) {
      const date = build('p', [{ name: 'class', value: 'feed-item-date'}], record.date);
      feedItemHeader.appendChild(date);
      container.appendChild(feedItemHeader);
    }
    if(record.tag) {
      const badge = build('span', [
        { name: 'class', value: 'feed-item-badge'},
        { name: 'style', value: tag[record.tag].color },
      ], tag[record.tag].label);
      feedItemHeader.appendChild(badge);
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
    if(record.reactions) {
      const reactionFooter = build('div', [{ name: 'class', value: 'nff-reaction-footer'}]);
      const thumbsup = build('button', [
        { name: 'class', value: 'nff-reaction-button'},
        { name: 'id', value: 'good-reactions'},
        { name: 'data-reaction-type', value: 'good-reactions'},
        { name: 'value', value: record['good-reactions']},
        { name: 'data-record-id', value: record._id},
      ],'&#x1f44d;');
      const thumbsdown = build('button', [
        { name: 'class', value: 'nff-reaction-button'},
        { name: 'id', value: 'nff-reaction-button'},
        { name: 'data-reaction-type', value: 'bad-reactions'},
        { name: 'value', value: record['bad-reactions']},
        { name: 'data-record-id', value: record._id},
      ],'&#x1f44e;');
      thumbsup.addEventListener('click', sendReaction)
      thumbsdown.addEventListener('click', sendReaction)
      reactionFooter.appendChild(thumbsup)
      reactionFooter.appendChild(thumbsdown)
      container.appendChild(reactionFooter);
    }

    const feed = document.querySelector('.feed')
    feed.appendChild(container);
  } catch (exception) {
    console.log(exception);
  }
}

export default addFeedItem;
