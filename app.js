//----------------imports
const { exec } = require('node:child_process')
const prompt = require('prompt')
//----------------imports

//----------------imports
function main (){

	sonchLevel = 1

	exec("say commence sonch in three [[slnc 1000]] two [[slnc 1000]] one [[slnc 1000]]")

	recurse(sonchLevel)

	function recurse(sonchLevel){
		prompt.start()
		let conf = prompt.get("y/n", function(err, result) {

			result = Object.entries(result)[0][1]
			if (result != "y") {
				console.log("goodbye =]")
				console.log(result)
				prompt.stop()

			} else {

				console.log(result)
				sonchLevel++
				console.log("sonchLevel: ", sonchLevel)
				exec(`say commence sonch, feature level ${sonchLevel} in three [[slnc 1000]] two [[slnc 1000]] one [[slnc 1000]]
`)
				recurse(sonchLevel)
			}
		})
	}
}

main()
