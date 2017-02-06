let Utils = (function() {
  /**
   * Get a computed style of a DOM element
   * @param  {DOM Element} element The target DOM element
   * @param  {String} style   Name of style eg. width, margin-left
   * @return {Float}         Computed style value
   */
   let getStyle = function(element, style) {
    return parseFloat(window.getComputedStyle(element).getPropertyValue(style));
  };

  /**
   * Get a random number between two numbers
   * @param  {Integer} low  Lower limit of interval
   * @param  {Integer} high Upper limit of interval
   * @return {Integer}      Random number between interval
   */
   let getRandomNumber = function(low, high) {
    return Math.floor(Math.random() * (high - low + 1)) + low;
  };

  /**
   * Get a random color
   * @param {Float} opacity Opacity of color
   * @return {String} Color in rgba(r, g, b, opacity) format
   */
   let getRandomColor = function(opacity) {
    if (!opacity) {
      opacity = 1;
    }
    let R = parseInt(Math.random() * 255);
    let G = parseInt(Math.random() * 255);
    let B = parseInt(Math.random() * 255);
    let color = "rgba(" + R + "," + G + "," + B + "," + opacity + ")";
    return color;
  };

  /**
   * Generate a random index. Basically a random string generator
   * @param  {Integer} length  Length of the generated index
   * @param  {Boolean} special Flag to check whether to include special characters in generated index
   * @return {String}         A randomly generated index
   */
   let generateIndex = function(length, special) {
    let i = 0;
    let randomNumber;
    let character = "";

    if(length === undefined) {
      length = 5;
    }

    if (special === undefined) {
      special = true;
    }

    while (i < length) {
      randomNumber = Math.floor((Math.random() * 100)) % 94 + 33;
      if (!special) {
        if ((randomNumber >= 33) && (randomNumber <= 47)) {
          continue;
        }
        if ((randomNumber >= 58) && (randomNumber <= 64)) {
          continue;
        }
        if ((randomNumber >= 91) && (randomNumber <= 96)) {
          continue;
        }
        if ((randomNumber >= 123) && (randomNumber <= 126)) {
          continue;
        }
      }
      if(randomNumber !== 39 || randomNumber !== 34) {
        character += String.fromCharCode(randomNumber);
        i++;
      }
    }

    return character;
  };

  /**
   * Get contrast color value of text for different background color
   * @param  {String} color Background color of format rgb(r,g,b)
   * @return {String}       "#333" or "#fff"
   */
  let getColorContrast = function(color) {
    let rgb = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/.exec(color);
    if(rgb === null) {
      return "#333";
    }
    let contrast = (parseInt(rgb[1]) * 299 + parseInt(rgb[2]) * 587 + parseInt(rgb[3]) * 114) / 1000;

    console.log(color, rgb, contrast);

    if(contrast > 128) {
      return "#333";
    }
    return "#fff";
  }


  let generateLipsum = function(length) {
    if(length === undefined) {
      length = 5;
    }

    let lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod in felis nec hendrerit. Vivamus malesuada nisl vel odio tempor, sed gravida sapien feugiat. Cras in lacinia est. Pellentesque porttitor mauris diam, ac pulvinar ligula euismod et. Morbi congue sem dui, dapibus semper dolor cursus vitae. Nam dolor urna, vehicula in fermentum vitae, interdum a lacus. Suspendisse fermentum tellus eu ipsum consequat eleifend. Aliquam ullamcorper luctus feugiat. Integer tempus sapien nec erat suscipit laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. In ullamcorper, justo quis lacinia tristique, arcu elit molestie enim, eget euismod sem lacus sed est.".split(" ");

    let para = "";
    for(let i = 0; i < length; i++) {
      para += lipsum[getRandomNumber(0, lipsum.length - 1)]+ " ";
    }

    return para;
  }

  return {
    getStyle: getStyle,
    getRandomNumber: getRandomNumber,
    getRandomColor: getRandomColor,
    generateIndex: generateIndex,
    generateLipsum: generateLipsum,
    getColorContrast: getColorContrast
  };
})();

export default Utils;
