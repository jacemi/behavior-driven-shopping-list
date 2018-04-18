class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    if (typeof (this.name) !== 'string' || this.name === '') {
      throw new Error('please use a string for name parameter');
    }
    this.description = description;
    if (typeof (this.description) !== 'string') {
      throw new Error('please use a string for description parameter');
    }
    this.is_done = false;
  }

  check() {
    this.is_done = true;
  }

  uncheck() {
    this.is_done = false;
  }

  render(i) {
    let checked = this.is_done ? "checked" : '';
    return `<ul>
  <li class="completed_${this.is_done}">
    <span>${this.name}</span>
    <span>${this.description}</span>
<input data-index=${i} type='checkbox' onchange='changeCheckedStatus(${i}, event)' ${checked}>
<button type='button' onclick='removeItemButtonClicked(${i})'>x</button>
  </li>
</ul>`
  }
};