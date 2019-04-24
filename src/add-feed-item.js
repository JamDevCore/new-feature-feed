import build from './build';

const tag = {
  news: {
    color: 'background-color:#F5CA61', label: 'News',
  },
  feature: {
    color: 'background-color:#CD557B', label: 'Feature',
  },
}

const sendReaction = (event) => {
  const feedButton = document.querySelector('#nff-init');
  const key = feedButton.getAttribute('data-airtable-key');
  const airBase = feedButton.getAttribute('data-airtable-base');
  const table = feedButton.getAttribute('data-airtable-table');

  const { attributes } = event.srcElement;
  const recordId = attributes['data-record-id'].value;
  const elementId = attributes.id.value;
  const currentValue = (attributes.value && attributes.value.value) || 0;
  const reactionType = attributes['data-reaction-type'].value;
  document.querySelector(`#${elementId}`).setAttribute('class', 'nff-reaction-button selected');
  document.querySelector(`#good-reactions-${recordId}`).setAttribute('disabled', true);
  document.querySelector(`#bad-reactions-${recordId}`).setAttribute('disabled', true);


  var Airtable = require('airtable');
  var base = new Airtable({apiKey: key}).base(airBase);
  const newTotal = parseInt(currentValue) + 1;

  console.log(newTotal)
  console.log(attributes['data-record-id'].value)

  base(table).update(recordId, {
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
    const footer = build('div', [{ name: 'class', value: 'nff-footer-item'}]);
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
      footer.appendChild(link);
    }
    if(record.reactions) {
      const thumbsup = build('button', [
        { name: 'class', value: 'nff-reaction-button'},
        { name: 'id', value: `good-reactions-${record._id}`},
        { name: 'data-reaction-type', value: 'good-reactions'},
        { name: 'value', value: record['good-reactions']},
        { name: 'data-record-id', value: record._id},
      ],'&#x1f44d;');
      const thumbsdown = build('button', [
        { name: 'class', value: 'nff-reaction-button'},
        { name: 'id', value: `bad-reactions-${record._id}`},
        { name: 'data-reaction-type', value: 'bad-reactions'},
        { name: 'value', value: record['bad-reactions']},
        { name: 'data-record-id', value: record._id},
      ],'&#x1f44e;');
      const rateContainer = build('div', [{ name: 'class', value: 'nff-rate-container'}]);
      const rateText = build('p', [], 'Rate this!');
      const rateButtons = build('div', []);

      rateContainer.appendChild(rateText);
      rateContainer.appendChild(rateButtons);

      rateButtons.appendChild(thumbsup)
      rateButtons.appendChild(thumbsdown)

      footer.appendChild(rateContainer);
      thumbsup.addEventListener('click', sendReaction)
      thumbsdown.addEventListener('click', sendReaction)
    }
    container.appendChild(footer);
    const feed = document.querySelector('.feed')
    feed.appendChild(container);
  } catch (exception) {
    console.log(exception);
  }
}

export default addFeedItem;
