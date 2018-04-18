class ShoppingList {
  constructor() {
    this.items = [];
  }
  addItem(item) {
    if (item instanceof ShoppingListItem) {
      this.items.push(item);
    } else {
      throw new Error("not an instance of ShoppingListItem");
    };
  };
  removeItem(item) {
    if (!!item == false && this.items.length > 0){
      this.items.pop();
    }
    if (item instanceof ShoppingListItem) {
    let itemIndex = this.items.indexOf(item);
    this.items.splice(itemIndex, 1);
    }
  };
  render(){
    if(i = 0; i < this.items.length; i++){
      let result = '';
      result += this.items[i].render();
      return `<ul>${result}</ul>`
    };
  };
};