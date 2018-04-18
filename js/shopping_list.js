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
    if (item instanceof ShoppingListItem) {
    let itemIndex = this.items.indexOf(item);
    this.items.splice(itemIndex, 1);
    }
  }
};