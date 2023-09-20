const { exec } = require("node:child_process");
const prompt = require("prompt");

function main() {
  sonchLevel = 1;
  message = null;
  doCountdown(sonchLevel, message, "sonch");
}

main();

function doCountdown(sonchLevel, message, level) {
  const getRandomValue = (min, max) => {
    //get min and max value to even everything out
    return Math.floor(Math.random() * (max - min) + min);
  };

  message = `say commence [[pbas ${getRandomValue(
    0,
    100,
  )}]] ${level} in [[rate ${getRandomValue(100, 400)}]] [[pbas ${getRandomValue(
    0,
    100,
  )}]] three [[rate 175]] [[slnc 1000]] [[rate ${getRandomValue(
    100,
    400,
  )}]] [[pbas ${getRandomValue(
    0,
    100,
  )}]]two [[rate 175]][[slnc 1000]] [[rate ${getRandomValue(
    100,
    400,
  )}]] [[pbas ${getRandomValue(100)}]]one [[rate 175]][[slnc 1000]]`;

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
        } else if (sonchLevel === 3) {
          level = "triple feature";
        } else {
          level = `level ${sonchLevel} feature`;
        }
      } else if (result == "f") {
        sonchLevel--;
        console.log(sonchLevel);
        level = "final feature";
      } else if (result == "r") {
        sonchLevel--;
        console.log(sonchLevel);
      } else {
        prompt.stop();
        console.log("invalid command");
        return 1;
      }
      doCountdown(sonchLevel, message, level);
    });
  }, 3000);
}

function argvTest(){
	console.log("argV test function")

	if(process.argv[2]) {
		console.log(process.argv[2])
	} else {
		console.log('no arg entered')

	}
	

}

argvTest()

//change commense sonch to something else on occasion.
//stink up
//
//randomly change rates
//
//remember the directory you were in when you called synch, and go to it after
//sonch bot is called?
//
//seems unnecessary when I can just alter the alias to call sonch bot from
//wherever

//TODO create multiple messages and randomly choose from them
//
