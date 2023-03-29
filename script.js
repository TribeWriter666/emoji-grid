// Define an array of emojis
const emojis = ['😀', '😂', '😍', '🤔', '🤢', '👻', '🐶', '🐱', '🐻', '🐙', '🍕', '🍔', '🍟', '🌮', '🌯', '🍺', '🍩', '🎂', '🚀', '🎉'];

// Generate the emoji menu
const emojiMenu = document.getElementById('emoji-menu');
for (let i = 0; i < emojis.length; i++) {
  const button = document.createElement('button');
  button.textContent = emojis[i];
  button.addEventListener('click', () => {
    selectedEmoji = emojis[i];
  });
  emojiMenu.appendChild(button);
}

// Generate the grid
const gridContainer = document.getElementById('grid-container');
let selectedEmoji = '';
for (let i = 0; i < 30; i++) {
  for (let j = 0; j < 30; j++) {
    const gridItem = document.createElement('div');
    gridItem.addEventListener('click', () => {
      if (selectedEmoji !== '') {
        gridItem.textContent = selectedEmoji;
      }
    });
    gridContainer.appendChild(gridItem);
  }
}