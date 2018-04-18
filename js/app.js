let todaysList = new ShoppingList();
let listContent = todaysList.render();
content.innerHTML = listContent; 

function add_to_shopping_list() {
  let new_shopping_list_item = new ShoppingListItem(title.value, description.value);
  todaysList.addItem(new_shopping_list_item);
  let listContent = todaysList.render();
  content.innerHTML = listContent
}

