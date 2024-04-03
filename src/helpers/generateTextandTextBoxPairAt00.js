import { generateTextElement, generateTextBoxElement } from "./generateTextBoxElements.js";

function generateTextandTextBoxPairAt00(contractName) {
  function centerTextElementInRectangle(textElement, rectangle) {
    // Calculate the new x coordinate to center the text horizontally
    const centerX = rectangle.x + (rectangle.width - textElement.width) / 2;

    // Calculate the new y coordinate to center the text vertically
    const centerY = rectangle.y + (rectangle.height - textElement.height) / 2;

    // Return the textElement with updated x and y coordinates
    return {
      ...textElement,
      x: centerX,
      y: centerY,
    };
  }

  const textElement = generateTextElement(contractName + "-text", contractName); // Use contract name as ID and text
  const boxElement = generateTextBoxElement(contractName + "-box", textElement); // Use contract name as base for ID

  const centeredTextElement = centerTextElementInRectangle(
    textElement,
    boxElement
  );

  centeredTextElement.containerId = boxElement.id;
  return [centeredTextElement, boxElement];
}

export default generateTextandTextBoxPairAt00;
