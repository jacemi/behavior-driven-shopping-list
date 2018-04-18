class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    if (typeof (this.name) !== 'string') {
      throw new Error('please use a string for name parameter');
    }
    this.description = description;
    if (typeof (this.description) !== 'string') {
      throw new Error('please use a string for description parameter');
    }
    this.is_done = false;
  }

  check(){
    this.is_done = true;
  }

  uncheck(){
    this.is_done = false;
  }

  render(){
    return `<ul>
  <li class="completed_${this.is_done}">
    <span>${this.name}</span>
    <span>${this.description}</span>
  </li>
</ul>`
  }
};