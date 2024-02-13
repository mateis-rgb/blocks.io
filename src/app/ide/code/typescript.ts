function transformCompleteTypeScriptCode(code: string): any[] {
	const result: any[] = [];

	// Expression régulière pour extraire les déclarations de variable
	const variableDeclarationRegex = /(?:const|let|var)\s+(\w+):\s+([\w\s]+)\s*=\s*(.*?);/g;

	let match;
	while ((match = variableDeclarationRegex.exec(code)) !== null) {
	const [, name, type, value] = match;
	result.push({
		struct: match[1],
		name,
		type,
		value: JSON.parse(value),
	});
	}

	// Expression régulière pour extraire les déclarations de fonction
	const functionDeclarationRegex = /function\s+(\w+)\((.*?)\):\s+([\w\s]+)\s*{([\s\S]*?)}/g;

	while ((match = functionDeclarationRegex.exec(code)) !== null) {
	const [, functionName, parametersStr, returnType, operationsStr] = match;
	const parameters = parametersStr
		.split(',')
		.map((param) => {
		const [paramName, paramType] = param.trim().split(':');
		return { name: paramName, type: paramType.trim() };
		});

	const operations = operationsStr
		.trim()
		.split('\n')
		.map((op) => {
		return { opType: 'return', op: op.trim() };
		});

	result.push({
		struct: 'function',
		name: functionName,
		parameters,
		returnType,
		operations,
	});
	}

	// Ajoutez d'autres expressions régulières pour traiter d'autres fonctionnalités de TypeScript, par exemple, les interfaces, les classes, etc.

	return result;
}

// Exemple d'utilisation
const codeString = `
	const toto: string = "coucou";
	let hello: number = 12;

	function add(a: number, b: number): number {
	return a + b;
	}

	interface Person {
	name: string;
	age: number;
	}

	class MyClass {
	private x: number;

	constructor(value: number) {
		this.x = value;
	}

	getX(): number {
		return this.x;
	}
	}
`;

const transformedCode = transformCompleteTypeScriptCode(codeString);
console.log(JSON.stringify(transformedCode, null, 2));
