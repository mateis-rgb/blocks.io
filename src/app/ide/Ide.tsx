import AceEditor from "react-ace";

import "ace-builds/src-min-noconflict/mode-typescript";
import "ace-builds/src-min-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";

const Ide = () => {
	const transformTypeScriptCode = (code: string): any[] => {
		const result: any[] = [];
		
		// Expression régulière pour extraire les déclarations de variable
		const variableDeclarationRegex = /(?:const|let|var)\s+(\w+):\s+([\w\s]+)\s*=\s*(.*?);/g;
		
		let match;
		
		while ((match = variableDeclarationRegex.exec(code)) !== null) {
			const [, name, type, value] = match;

			console.log(match);

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
		
		return result;
	}

	const onChange = (newValue: string) => {
		const jsoned: string = JSON.stringify(newValue, null, "\t");

		console.log(transformTypeScriptCode(jsoned));
	}
	
	return (
		<>
			<div className="h-screen flex">
				<AceEditor 
					mode="typescript"
					theme="monokai"
					onChange={onChange}
				/>
			</div>
		</>
	);
}

export default Ide