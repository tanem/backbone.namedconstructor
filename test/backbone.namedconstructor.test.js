var test = require('tape');
var Backbone = require('backbone');
require('..');

test('should do nothing if there is no "constructorName" prop and no constructor', function(t) {
  t.plan(1);
  var Model = Backbone.Model.extend();
  t.equal(new Model().constructor.name, '');
});

test('should leave an existing constructor name intact if there is no "constructorName" prop', function(t) {
  t.plan(1);
  var constructor = function FooModel() {};
  var Model = Backbone.Model.extend({ constructor: constructor });
  t.equal(new Model().constructor.name, 'FooModel');
});

test('should add a constructor with name "constructorName" when no constructor exists', function(t) {
  t.plan(1);
  var Model = Backbone.Model.extend({ constructorName: 'FooModel' });
  t.equal(new Model().constructor.name, 'FooModel');
});

test('should name an existing constructor "constructorName" if it doesn\'t have a name', function(t) {
  t.plan(1);
  var constructor = function() {};
  var Model = Backbone.Model.extend({ constructorName: 'FooModel', constructor: constructor });
  t.equal(new Model().constructor.name, 'FooModel');
});

test('should name an existing constructor "constructorName" even if it already has a name.', function(t) {
  t.plan(1);
  var constructor = function FooModel() {};
  var Model = Backbone.Model.extend({ constructorName: 'BarModel', constructor: constructor });
  t.equal(new Model().constructor.name, 'BarModel');
});
