import * as classes from "../classes.js";
import type * as core from "../core.js";
import type { ParseContext, ParseReturnType } from "../parse.js";

type AnyZodType = core.$ZodType<unknown, never, core.$ZodTypeDef>;
type Mix<A extends AnyZodType, B extends AnyZodType> = A & B;
type Nullable<T> = {
  __nullable: T;
};

interface ZodTypeDef extends core.$ZodTypeDef {}
interface ZodType<O, I, D extends ZodTypeDef> extends core.$ZodType<O, I, D> {
  nullable(): Nullable<this>;
}

interface ZodStringDef extends classes.$ZodStringDef {}
export interface ZodString extends ZodType<string, string, ZodStringDef> {
  type: "string";
  _parseInput(
    input: unknown,
    ctx?: ParseContext
  ): ParseReturnType<this["~output"]>;
}
export class ZodString extends classes.$ZodString<
  string,
  string,
  ZodStringDef
> {}

interface A {
  prop(): string | number;
}

interface B {
  prop(): string | boolean;
}

interface C extends A, B {
  prop(): string;
}
