import AceEditor from "react-ace";

import { useState } from "react";
import { Language, Theme } from "..";

import "ace-builds/src-min-noconflict/mode-typescript";
import "ace-builds/src-min-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";

const Ide = () => {
	const [language, setLanguage] = useState<Language>("typescript");
	const [theme, setTheme] = useState<Theme>("solarized_light");

	const onChange = (newValue: string) => {
		console.log(JSON.stringify(newValue, null, "\t"));
	}
	
	return (
		<div className="h-screen flex">
			{/* Folder system */}
			<div className="w-96 bg-gray-800">

			</div>

			{/* Editor */}
			<div className="flex flex-col w-full">
				<AceEditor 
					mode={language}
					theme={theme}
					onChange={onChange}
					width="auto"
					height="100vh"
				/>

				<div className="bg-blue-800 text-white flex items-center justify-center h-6 w-auto">
					<span className="ml-auto mx-4 capitalize">{ theme }</span>
					<span className="mx-4 capitalize">{ language }</span>
				</div>
			</div>

			{/* Variables / function system */}
			<div className="w-96 bg-gray-800 flex flex-col">
				
			</div>
		</div>
	);
}

export default Ide