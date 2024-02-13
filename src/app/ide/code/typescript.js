function transformCompleteTypeScriptCode(code) {
    var result = [];
    // Expression régulière pour extraire les déclarations de variable
    var variableDeclarationRegex = /(?:const|let|var)\s+(\w+):\s+([\w\s]+)\s*=\s*(.*?);/g;
    var match;
    while ((match = variableDeclarationRegex.exec(code)) !== null) {
        var name_1 = match[1], type = match[2], value = match[3];
        result.push({
            struct: match[1],
            name: name_1,
            type: type,
            value: JSON.parse(value),
        });
    }
    // Expression régulière pour extraire les déclarations de fonction
    var functionDeclarationRegex = /function\s+(\w+)\((.*?)\):\s+([\w\s]+)\s*{([\s\S]*?)}/g;
    while ((match = functionDeclarationRegex.exec(code)) !== null) {
        var functionName = match[1], parametersStr = match[2], returnType = match[3], operationsStr = match[4];
        var parameters = parametersStr
            .split(',')
            .map(function (param) {
            var _a = param.trim().split(':'), paramName = _a[0], paramType = _a[1];
            return { name: paramName, type: paramType.trim() };
        });
        var operations = operationsStr
            .trim()
            .split('\n')
            .map(function (op) {
            return { opType: 'return', op: op.trim() };
        });
        result.push({
            struct: 'function',
            name: functionName,
            parameters: parameters,
            returnType: returnType,
            operations: operations,
        });
    }
    // Ajoutez d'autres expressions régulières pour traiter d'autres fonctionnalités de TypeScript, par exemple, les interfaces, les classes, etc.
    return result;
}
// Exemple d'utilisation
var codeString = "\n\tconst toto: string = \"coucou\";\n\tlet hello: number = 12;\n\n\tfunction add(a: number, b: number): number {\n\treturn a + b;\n\t}\n\n\tinterface Person {\n\tname: string;\n\tage: number;\n\t}\n\n\tclass MyClass {\n\tprivate x: number;\n\n\tconstructor(value: number) {\n\t\tthis.x = value;\n\t}\n\n\tgetX(): number {\n\t\treturn this.x;\n\t}\n\t}\n";
var transformedCode = transformCompleteTypeScriptCode(codeString);
console.log(JSON.stringify(transformedCode, null, 2));
