const { exec } = require("node:child_process");
const prompt = require("prompt");

function main() {
  sonchLevel = 1;
  message = null;
  let text = null;

  recurse(sonchLevel, message, "sonch");

  function recurse(sonchLevel, message, level) {
    message = `say commence ${level} in [[pbas 25]] three [[slnc 1000]] [[pbas 25]]two [[slnc 1000]] [[pbas 25]]one [[slnc 1000]]`;
    text = `say commence ${level} in three ... two ... one`;

    exec(message);
    console.log(text);

    sonchLevel++;
    //timeout is necessary to allow user to silence say command with ctrl-c.

    setTimeout(() => {
      prompt.start();
      let conf = prompt.get("continue? (y/n)", function (err, result) {
        result = Object.entries(result)[0][1];
        prompt.stop();
        if (result != "n") {
          if (result == "y") {
            if (sonchLevel === 1) {
              level = "sonch";
            } else if (sonchLevel === 2) {
              level = "double feature";
            } else {
              level = `level ${sonchLevel} feature`;
            }
          } else if (result == "r") {
            sonchLevel--;
            console.log(sonchLevel);
          } else {
						console.log('invalid command')
						return 1;
					}
          recurse(sonchLevel, message, level);
        } else {
          console.log("goodbye =]");
          return 1;
        }
      });
    }, 3000);
  }
}

main();
//make one of the numbers in the sequence randomly high pitched
//just put the three numbers in an array and pick one randomly. Probably the
//simplest method for controlled random pitch generation
//
