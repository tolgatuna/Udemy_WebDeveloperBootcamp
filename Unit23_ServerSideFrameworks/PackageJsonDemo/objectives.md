#NPM Init and Package.jsonp
	* npm init : 
		** Create an empty package.json
	* Use the `--save` flag to install packages : 
		** It is download packages as ordinary but it also write the package.json (if exist) as dependency
		** Like `npm install express --save`
	* Explain what the package.json : 
		** It is the receipt of project. It explains which librarys must be included. Also it save the memory for git. No need to send all node_modules to git. 
	* To install all package.json dependencies : 
		** Use `npm install` command