const form = document.getElementById('grocery-form');
const input = document.getElementById('grocery-input');
const list = document.getElementById('grocery-list');
const clearBtn = document.getElementById('clear-btn');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const value = input.value.trim();
  if (value === '') return;
  addItem(value);
  input.value = '';
});

function addItem(text) {
  const li = document.createElement('li');
  li.className = 'grocery-item';
  li.innerHTML = `
    <span>${text}</span>
    <div class="icons">
      <i class="edit">✏️</i>
      <i class="delete">🗑️</i>
    </div>
  `;
  list.appendChild(li);

  li.querySelector('.delete').addEventListener('click', () => {
    li.remove();
  });

  li.querySelector('.edit').addEventListener('click', () => {
    input.value = text;
    li.remove();
  });
}

clearBtn.addEventListener('click', () => {
  list.innerHTML = '';
});
