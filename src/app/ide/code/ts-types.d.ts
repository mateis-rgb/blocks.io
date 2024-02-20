export type Struct = "const" | "var" | "let" | "function" | "if" | "switch" | "for" | "while" | "class" | "type" | "interface ";

export type Type = "string" | "number" | "boolean" | "array" | "tuple" | "enum" | "unknown" | "any" | "void" | "null" | "undefined" | "never" | "object";

export type Variable<T> = {
	struct: Struct
	name: string
	type: Type
	value: T
}