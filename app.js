const { exec } = require("node:child_process");
const prompt = require("prompt");

function main() {
  sonchLevel = 1;
  message = null;
	detectArgV();
	//how can I refactor to add variations to countdown? 
		//the main thing being altered is the message itself, and level.
		//Focus on these two parameters
	
  doCountdown(sonchLevel, message, detectArgV());
}

main();

function doCountdown(sonchLevel, message, level) {
  const getRandomValue = (min, max) => {
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
      parseCommand(sonchLevel, message, level, err, result);
    });
  }, 3000);
}

function parseCommand(sonchLevel, message, level, err, result) {
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
}

function detectArgV() {
  const flag =
    process.argv.indexOf("-f") > -1
      ? "Flag is Present."
      : "Flag is not present";

  const customIndex = process.argv.indexOf("--custom");
  let customValue;

	//detect solo synch
	const soloSynchIndex = process.argv.indexOf("-s")

  if (customIndex > -1) {
    customValue = process.argv[customIndex];
  }

	if (soloSynchIndex > -1) {
		sonchValue = process.argv[soloSynchIndex]
	}

  const custom = customValue || "Default";
  const solo = "solo" || "Default";

  console.log(`Flag: , ${flag}`);
  console.log(`Custom: , ${custom}`);

	if (solo === "Default") {
		return "sonch"
	} else {
		return "solo sonch"
	}

  //link below for how todeal with command line args in node
  //build out default functionality
  //if default, set sonch level to zero
  //else set sonch level to number (assuming number is actually valid)
  //build out multiple arg detection
  //https://www.digitalocean.com/community/tutorials/nodejs-command-line-arguments-node-scripts
}


//change commense sonch to something else on occasion.
//stink up
//sync up
//wink up
//${insert random consonant here}ink up

//TODO create multiple messages and randomly choose from them
//NOTE mode ideas: low mode, alien mode (change voice to alien), silly mode,
//normal mode
//
//TODO how can I turn this into an executable
//TODO package function arguments into a single object
//synch level, message, level
//TODO I could modularize messages to make code more readable as more messages
//are inevitably created
