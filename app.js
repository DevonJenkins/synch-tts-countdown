const { exec } = require('node:child_process')
const prompt = require('prompt')

prompt.start()
function recurse() {

	let message = prompt.get("message", function(err, result){

		if (result.message === "synch"){
				exec("say 'commence sonch in three [[slnc 1000]] two [[slnc 1000]] one [[slnc 1000]]'")
		} else if(result.message === "stop"){
			prompt.stop()
		} else {
			let command = `say ${result.message}`
			exec(command)
		}
		recurse()
	}) 
}

recurse()
