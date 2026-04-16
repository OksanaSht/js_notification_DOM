'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const node = document.createElement('div');
  const titleNode = document.createElement('h2');
  const descripNode = document.createElement('p');

  node.classList.add(`notification`, type);

  node.style.top = posTop;
  node.style.right = posRight;

  node.append(titleNode);
  node.append(descripNode);

  titleNode.innerText = title;
  descripNode.innerText = description;
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
