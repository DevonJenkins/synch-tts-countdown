const { exec } = require("node:child_process");
const prompt = require("prompt");

function main() {
  sonchLevel = 1;
	message = null;
  doCountdown(sonchLevel, message, "sonch");
}

main();

function doCountdown(sonchLevel, message, level) {
	const getRandomPitchValue = (max) => {
    return Math.floor(Math.random() * max);
  };
  message = `say commence [[pbas ${getRandomPitchValue(
    100,
  )}]] ${level} in [[rate 75]] [[pbas ${getRandomPitchValue(
    100,
  )}]] three [[slnc 1000]] [[pbas ${getRandomPitchValue(
    100,
  )}]]two [[slnc 1000]] [[pbas ${getRandomPitchValue(100)}]]one [[slnc 1000]]`;

  let text = `Commence ${level} in three ... two ... one`;

  exec(message);
  console.log(text);
  sonchLevel++;

  setTimeout(() => {
    prompt.start();
    let confirmation = prompt.get("continue? (y/n)", function (err, result) {
      result = Object.entries(result)[0][1];
      if (result == "n") {
        console.log("goodbye =]");
        prompt.stop();
        return 1;
      }
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
        console.log("invalid command");
        return 1;
      }
      doCountdown(sonchLevel, message, level);
    });
  }, 3000);
}

//change commense sonch to something else on occasion.
//stink up
