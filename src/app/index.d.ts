export type Input<T> = {
	name: string;
	type: T;
}

export type Output<T> = {
	name: string;
	type: T;
}

export type Position = {
	x: number;
	y: number;
}

export type Block = {
	name: string
	input: Input[]
	output: Output[]
	function: () => Output[]
	position: Position
}

export type Link = {
	input: Block;
	output: Block;
}