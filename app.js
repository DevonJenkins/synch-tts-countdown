//----------------imports
const { exec } = require("node:child_process");
const prompt = require("prompt");
//----------------imports

function main() {
  sonchLevel = 1;
	message = null
	//i'd like to make this message more dynamic using template literals
	//(${level})
	//then i wouldn't have to keep altering my message. I would ideally just alter
	//the one message component

  recurse(sonchLevel, message, 'sonch');

  function recurse(sonchLevel, message, level) {
		//ifsonch level is 1, level == 'sonch'
		//if sonch level is 2, level == 'double feature'
		//if sonch level is greater than 2, level == sonchLevel
		//
		message =
    `say commence ${level} in [[pbas 75]] three [[slnc 1000]] [[pbas 50]]two [[slnc 1000]] [[pbas 25]]one [[slnc 1000]]`;
    exec(message);
		console.log(message)
    sonchLevel++;

    prompt.start();
    let conf = prompt.get("y/n", function (err, result) {
      result = Object.entries(result)[0][1];
      if (result == "n") {
        console.log("goodbye =]");
        prompt.stop();
        return 1;

      } else if (result == "y") {
				//if sonch level === 1 , level = 'sonch'
				//what to do when sonch level == zero?
					//commence sonch and set level to 2
				if (sonchLevel === 1) {


				} else if (sonchLevel === 2) {
					recurse(sonchLevel, message, `double feature`);
					//level = "double feature"
        } else {
					recurse(sonchLevel, message, `level ${sonchLevel} feature`);
					//level = 
        }
      } else if (result == "r") {
				//prompt: what would you like to set the sonch level to?
					//
					//
					sonchLevel--
				recurse(sonchLevel, message, `level ${sonchLevel} feature`);
				//level--
        console.log(sonchLevel);
      }
    });
  }
}

main();
