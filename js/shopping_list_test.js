var expect = chai.expect;
var should = chai.should();

describe('ShoppingListItem', function () {
  it('should be a class', function () {
    ShoppingListItem.should.be.a('function');
  });
  it('should have a property named name', function () {
    var milk = new ShoppingListItem('milk', '');
    milk.name.should.equal('milk', '');
    expect(milk.name).to.be.a('string');
  });
  it('should have a property named description', function () {
    var milk = new ShoppingListItem('milk', 'comes from cows');
    milk.description.should.equal('comes from cows');
    expect(milk.description).to.be.a('string');
  });
  it('should have a property named is_done', function () {
    var milk = new ShoppingListItem('milk', 'comes from cows');
    milk.is_done.should.be.false;
  });
  it('should have a constructor method', function () {
    var milk = new ShoppingListItem('milk', 'comes from cows');
    expect(milk).to.be.an.instanceof(ShoppingListItem);
    milk.name.should.equal('milk');
    milk.description.should.equal('comes from cows');
  });
});

describe('.check', function () {
  it('should be a function', function () {
    var milk = new ShoppingListItem('milk', 'comes from cows');
    expect(milk.check).to.be.a('function');
  });
  it('.check should set is_done property to true', function () {
    var milk = new ShoppingListItem('milk', 'comes from cows');
    milk.check();
    expect(milk.is_done).to.be.true;
  });
});

describe('.uncheck', function () {
  it('should be a function', function () {
    var milk = new ShoppingListItem('milk', 'comes from cows');
    expect(milk.uncheck).to.be.a('function');
  });
  it('.uncheck should set is_done property to false', function () {
    var milk = new ShoppingListItem('milk', 'comes from cows');
    milk.uncheck();
    expect(milk.is_done).to.be.false;
  });
});

describe('.render', function () {
  it('should be a function', function () {
    var milk = new ShoppingListItem('milk', 'comes from cows');
    expect(milk.render).to.be.a('function');
  });
  it("calling the instance's render method will construct and return an html formatted string", function () {
    var milk = new ShoppingListItem('milk', 'comes from cows');
    expect(milk.render()).to.equal(`<ul>
  <li class="completed_false">
    <span>milk</span>
    <span>comes from cows</span>
<input type='checkbox' onchange='changeCheckedStatus(idx, checkbox)'>
  </li>
</ul>`);
  });
});

describe('ShoppingList', function () {
  it('should be a class', function () {
    ShoppingList.should.be.a('function');
  });
  it('should have a property named items', function () {
    var todaysList = new ShoppingList();
    expect(todaysList).to.have.property('items');
  });
  it('should have a constructor method that initializes items as an empty Array', function () {
    var todaysList = new ShoppingList();
    expect(todaysList.items).to.deep.equal([]);
  })
});

describe('.addItem', function () {
  it('should be a function', function () {
    var todaysList = new ShoppingList();
    expect(todaysList.addItem).to.be.a('function')
  });
  it('should add an object to items', function () {
    var todaysList = new ShoppingList();
    var eggs = new ShoppingListItem('eggs', 'sunny-side up');
    todaysList.addItem(eggs);
    expect(todaysList.items).to.deep.equal([eggs]);
  });
  it('should only accept instances of ShoppingListItem', function () {
    var todaysList = new ShoppingList();
    var stuff = "stuff";
    expect(new Error).to.be.a('error');
  });
});

describe('.removeItem', function () {
  it('should be a function', function () {
    var todaysList = new ShoppingList();
    expect(todaysList.removeItem).to.be.a('function')
  });
  it('should remove an object from items', function () {
    var todaysList = new ShoppingList();
    var bread = new ShoppingListItem('bread', 'used to make sandwiches');
    todaysList.removeItem(bread);
    todaysList.items.should.not.include('bread');
  });
  it('should remove the last item in items if called with no parameters', function () {
    var todaysList = new ShoppingList();
    var bread = new ShoppingListItem('bread', 'used to make sandwiches');
    var eggs = new ShoppingListItem('eggs', 'sunny-side up');
    var milk = new ShoppingListItem('milk', 'comes from cows');
    todaysList.addItem(bread);
    todaysList.addItem(eggs);
    todaysList.addItem(milk);
    todaysList.removeItem();
    expect(todaysList.items).to.deep.equal([bread, eggs]);
  });
});

describe('.render', function () {
  it('should concatenate the result of calling render on each item in this object and returning an html formatted string', function () {
    var todaysList = new ShoppingList();
    var bread = new ShoppingListItem('bread', 'used to make sandwiches');
    var eggs = new ShoppingListItem('eggs', 'sunny-side up');
    var milk = new ShoppingListItem('milk', 'comes from cows');
    todaysList.addItem(bread);
    todaysList.addItem(eggs);
    todaysList.addItem(milk);
    expect(todaysList.render()).to.equal(`<ul>< ul >
      <li class="completed_false">
        <span>bread</span>
        <span>used to make sandwiches</span>
        <input type='checkbox' onchange='changeCheckedStatus(idx, checkbox)'>
  </li>
</ul>< ul >
      <li class="completed_false">
        <span>eggs</span>
        <span>sunny-side up</span>
        <input type='checkbox' onchange='changeCheckedStatus(idx, checkbox)'>
  </li>
</ul>< ul >
      <li class="completed_false">
        <span>milk</span>
        <span>comes from cows</span>
        <input type='checkbox' onchange='changeCheckedStatus(idx, checkbox)'>
  </li>
</ul></ul>`);
  })
})