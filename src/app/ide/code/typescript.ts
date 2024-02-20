import { Variable, Struct } from "./ts-types";

const convertString = (expression: string): any => {
	if (parseInt(expression)) return parseInt(expression);
	if (parseFloat(expression)) return parseFloat(expression);
	if (expression === "true" || expression === "false") return Boolean(expression);
}

// "const hello: number = 34;"
const translateVariable = (expression: string) => {
	const splited = expression.split(" ");
	const spLength = splited.length;
	
	

	// Variable typé
	if (spLength === 5) {
		const returned = {
			struct: splited[0],
			name: splited[1].split(":")[0],
			value: splited[spLength-1].split(";")[0],
			type: splited[2]
		}

	}
	// Variable non-typé
	else if (spLength === 4) {

	}
}

console.log(translateVariable("const hello: number = 34;"));