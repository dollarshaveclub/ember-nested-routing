import { moduleFor, test } from 'ember-qunit';

moduleFor('route:toplevel/dynamic/secondlevel/dynamic2', 'Unit | Route | toplevel/dynamic/secondlevel/dynamic2', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
