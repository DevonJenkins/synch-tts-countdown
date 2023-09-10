const { exec } = require("node:child_process");
const prompt = require("prompt");

function main() {
  sonchLevel = 1;
  message = null;

  recurse(sonchLevel, message, "sonch");

  function recurse(sonchLevel, message, level) {
    message = `say commence ${level} in [[pbas 25]] three [[slnc 1000]] [[pbas 25]]two [[slnc 1000]] [[pbas 25]]one [[slnc 1000]]`;
    exec(message);
    // console.log(message);
    sonchLevel++;

    prompt.start();

    let conf = prompt.get("y/n", function (err, result) {
      result = Object.entries(result)[0][1];
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
        }
        recurse(sonchLevel, message, level);
      } else {
        console.log("goodbye =]");
        prompt.stop();
        //exec("kill %");
        return 1;
      }
    });
  }
}

main();
