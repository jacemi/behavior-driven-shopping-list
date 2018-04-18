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
    let result = '';
    for(let i = 0; i < this.items.length; i++){
      result += this.items[i].render();
    };
    console.log(result);
    return `<ul>${result}</ul>`
  };
};