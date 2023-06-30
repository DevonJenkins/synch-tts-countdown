//----------------imports
const { exec } = require('node:child_process')
const prompt = require('prompt')
//----------------imports

function main (){

	sonchLevel = 1

	//exec("say commence sonch in three [[slnc 1000]] two [[slnc 1000]] one [[slnc 1000]]")
	console.log("commence sonch")

	recurse(sonchLevel)

	function recurse(sonchLevel){
		prompt.start()
		let conf = prompt.get("y/n", function(err, result) {

			result = Object.entries(result)[0][1]
			if (result == "n") {
				console.log("goodbye =]")
				prompt.stop()
			} else if (result == "y") {
				//set up conditional logic here for 1, 2, and graeater levels
				if (sonchLevel === 1) {
					console.log("commense sonch in 3.. 2.. 1..")
				} else if (sonchLevel === 2) {
					console.log("commense double feature in 3.. 2.. 1..")
				} else {
					console.log(`commense level ${sonchLevel} feature in 3.. 2.. 1..`)	
				}

				//exec(`say commence sonch, feature level ${sonchLevel} in three [[slnc 1000]] two [[slnc 1000]] one [[slnc 1000]]`)
				sonchLevel++
				recurse(sonchLevel)
			} else if (result == "r"){
				sonchLevel--
				console.log(sonchLevel)	
				recurse(sonchLevel)
			}
		})
	}
}

main()
