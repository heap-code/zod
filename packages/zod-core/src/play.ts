import * as z from "./index.js";

const str = new z.$ZodString({
  checks: [],
  coerce: false,
});
const num = new z.$ZodNumber({
  checks: [],
  coerce: false,
});
console.log(num._parse(1234));
const schema = new z.$ZodUnion({
  checks: [],
  elements: [str, num],
});
console.log(schema._parse(1234));
const obj = new z.$ZodObject({
  checks: [],
  properties: {
    str: str,
    num: num,
  },
});
console.log(obj._parse({ str: "asdf", num: 1234 }));
const discunion = new z.$ZodDiscriminatedUnion({
  checks: [],
  elements: [obj, obj],
});
console.log(
  discunion._parse({
    str: "asdf",
    num: 1234,
  })
);

const tup = new z.$ZodTuple({
  checks: [],
  prefixItems: [str, num],
  items: null,
});
console.log(tup._parse([1243, 1234, "ad"]));

// Schemas with matchers:
// ZodEffects;
// ZodLiteral;
// ZodEnum;
// ZodNativeEnum;
// ZodDefault;
// ZodUndefined;
// ZodNull;
// ZodOptional;
// ZodNullable;
// ZodBranded;
// ZodReadonly;
// ZodCatch;

// const STR: unique symbol = Symbol("string");
// const NUM: unique symbol = Symbol("number");
// type Primitive = string | number | bigint | boolean | null | undefined;
// type AssertPrimitive<T> = T extends Primitive ? T : never;
// type Part =
//   | typeof STR
//   | typeof NUM
//   | string
//   | number
//   | bigint
//   | boolean
//   | null
//   | undefined;
// type Parts = Array<Part | Parts>;
// type PartArray = Array<Part>;
// type PartsToUnion<T extends PartArray> = PartToLiteral<T[number]>;
// type PartToLiteral<T extends Part> = T extends typeof STR
//   ? `${string}`
//   : T extends typeof NUM
//     ? `${number}`
//     : `${AssertPrimitive<T>}`;

// type PartsToLiteral<T extends Parts> = T extends []
//   ? ""
//   : T extends [infer A extends Part, ...infer B extends Parts]
//     ? `${PartToLiteral<A>}${PartsToLiteral<B>}`
//     : T extends [infer A extends PartArray, ...infer B extends Parts]
//       ? `${PartsToUnion<A>}${PartsToLiteral<B>}`
//       : never;

// function templateLiteral<const T extends Parts>(
//   ...parts: T
// ): PartsToLiteral<T> {
//   return parts as any;
// }

// const result1 = templateLiteral(STR, "stuff", templateLiteral(["a", "b"]));
// const result = templateLiteral(STR, "stuff", ["a", "b"]);
// type T1 = PartsToLiteral<[typeof STR, "stuff"]>;
// type T2 = PartsToLiteral<["a_", "b"]>;
// type T3 = PartsToLiteral<
//   [typeof STR, "stuff", (1 | 2 | 3)[], typeof NUM, "_end"]
// >;
