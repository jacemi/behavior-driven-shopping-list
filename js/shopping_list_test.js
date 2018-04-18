var expect = chai.expect;
var should = chai.should();

describe('ShoppingListItem', function () {
  it('should be a class', function () {
    ShoppingListItem.should.be.a('function');
  });
  it('should have a property named name', function () {
    var milk = new ShoppingListItem('milk');
    milk.name.should.equal('milk');
    var number = new ShoppingListItem(4);
    expect.number.to.be.false;
  });
  it('should have a property named description', function () {
    var milk = new ShoppingListItem('milk', 'comes from cows');
    milk.description.should.equal('comes from cows');
    var grapes = new ShoppingListItem('grapes', 34);
    expect.grapes.to.be.false;
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
    expect(milk.check).should.be.a('function');
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
    expect(milk.uncheck).should.be.a('function');
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
    expect(milk.render).to.equal(`<ul>
  <li class="completed_false">
    <span>milk</span>
    <span>comes from cows</span>
  </li> 
<ul>`);
  });
});

