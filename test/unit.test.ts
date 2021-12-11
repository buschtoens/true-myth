import { expectTypeOf } from 'expect-type';
import Unit from 'true-myth/unit';

test('the unit type', () => {
  expectTypeOf<Unit>().not.toEqualTypeOf<{}>();
  expectTypeOf({}).not.toEqualTypeOf(Unit);

  expect(Unit).toEqual({});
});
