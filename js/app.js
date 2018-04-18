let todaysList = new ShoppingList();
let listContent = todaysList.render();
content.innerHTML = listContent;

function add_to_shopping_list() {
  let new_shopping_list_item = new ShoppingListItem(title.value, description.value);
  todaysList.addItem(new_shopping_list_item);
  let listContent = todaysList.render();
  content.innerHTML = listContent;
};

function changeCheckedStatus(idx, event) {
  // console.log(event.target.checked)
  if (event.target.checked == true) {
    todaysList.items[idx].check();
  }
  if (event.target.checked == false) {
    todaysList.items[idx].uncheck();
  };
  console.log(todaysList.items[idx].is_done);
};

function removeItemButtonClicked(idx) {
  todaysList.removeItem(todaysList.items[idx]);
  let listContent = todaysList.render();
  content.innerHTML = listContent;
}