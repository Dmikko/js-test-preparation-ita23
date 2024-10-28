/**
 * This function greets a user by name.
 *
 * @param {string} name - Name of the user.
 * @returns {string} - Greeting message for the user.
 *
 * Usage:
 * const greetJack = greetUser("Jack"); // greetJack will be "Hello, Jack"
 */
function greetUser(name) {
     return "Hello, " + name;
}



/**
 * This function converts a string to spinal case.
 *
 * @param {string} str - The string to be converted.
 * @returns {string} - The spinal cased string.
 *
 * Usage:
 * const spinal = toSpinalCase("This Is Spinal Tap"); // spinal will be "this-is-spinal-tap"
 */
function toSpinalCase(str){
    let spinalReplace = str.replace(/(?!^)([A-Z])/g, ' $1')
        .replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
    return spinalReplace;
}

/**
 * This function calculates the time taken by light to travel a certain distance.
 *
 * @param {number} distance - The distance in kilometers.
 * @returns {number} - Time taken in seconds.
 *
 * Usage:
 * const time = lightTravelTime(300000); // time will be 1
 */
function lightTravelTime(distance){
   let lightCalc = distance/300000;
return lightCalc;

/*
 y(output)=x(input)/300000km
*/
}

/**
 * This function checks if two words are mirror words.
 *
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @returns {boolean} - True if word1 is a mirror of word2, false otherwise.
 *
 * Usage:
 * const isMirror = mirrorWordCheck("stressed", "desserts"); // isMirror will be true
 * const notMirror = mirrorWordCheck("hello", "world"); // notMirror will be false
 */
function mirrorWordCheck(word1, word2) {
}



