/**
  Provide a type which is effectively a type-safe, non-interchangeable empty
  object to use instead of `null` or `undefined`.

  @module
 */

declare const TypeName: unique symbol;
type Opaque<T, K> = T & { [TypeName]: K };

/**
  The `Unit` type exists for the cases where you want a type-safe equivalent of
  `undefined` or `null`. It's a concrete instance, which won't blow up on you,
  and you can safely use it with e.g. {@linkcode result.Result Result} without
  being concerned that you'll accidentally introduce `null` or `undefined` back
  into your application.

  Equivalent to `()` or "unit" in many functional or functional-influenced
  languages.
 */
export type Unit = Opaque<unknown, 'unit'>;
export const Unit = Object.create(null) as Unit;
export default Unit;
