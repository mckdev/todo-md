
// Local
var todo = require("../lib/todo.js");

module.exports = function (program) {

	program
	   .command('add <text_to_add>')  // TODO: Push to index, to section
	   .description('Adds text_to_add to your todo file on its own line.')
	   //.option('-i, --input [file]')
	   //.option('-o, --output [file]')
	   .action(function(text, opts) {
	   	
	   		todo
	   			.options(program)
				.load()
				.add(text)
				.write()
				.list();
			
	   });
	
};