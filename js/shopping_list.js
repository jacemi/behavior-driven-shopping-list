class ShoppingList{
  constructor(){
    this.items = [];
  }
  addItem(item){
    if(item instanceof ShoppingListItem){
    this.items.push(item); 
    }else{
      throw new error("not an instance of ShoppingListItem");
    };
  };
};