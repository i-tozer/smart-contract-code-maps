import { AVG_CHAR_LENGTH, TEXT_HEIGHT, BOX_HEIGHT, BOX_PADDING } from "../script.js";

function generateTextElement(id, text) {
  const width = text.length * AVG_CHAR_LENGTH;

  return {
    id: id,
    type: "text",
    x: 0, // placeholder
    y: 0, // placeholder
    width: width,
    height: TEXT_HEIGHT,
    angle: 0,
    strokeColor: "#1e1e1e",
    backgroundColor: "transparent",
    fillStyle: "solid",
    strokeWidth: 2,
    strokeStyle: "solid",
    roughness: 1,
    opacity: 100,
    groupIds: [],
    frameId: null,
    roundness: null,
    seed: Math.floor(Math.random() * 1000000),
    version: 1,
    versionNonce: Math.floor(Math.random() * 1000000),
    isDeleted: false,
    boundElements: null,
    updated: Date.now(),
    link: null,
    locked: false,
    text: text,
    fontSize: 20,
    fontFamily: 2,
    textAlign: "center",
    verticalAlign: "middle",
    baseline: 18,
    containerId: null, // Will be updated later
    originalText: text,
    lineHeight: 1.15,
  };
}

// Function to generate the rectangle box element
function generateTextBoxElement(id, textElement) {
  const width = textElement.width + BOX_PADDING;
  // const x = textElement.x - (width - textElement.width) / 2;
  // const y = textElement.y - (BOX_HEIGHT - TEXT_HEIGHT) / 2;
  return {
    type: "rectangle",
    version: 1,
    versionNonce: Math.floor(Math.random() * 1000000),
    isDeleted: false,
    id: id,
    fillStyle: "solid",
    strokeWidth: 1,
    strokeStyle: "solid",
    roughness: 0,
    opacity: 100,
    angle: 0,
    x: 0, // placeholder
    y: 0, // placeholder
    strokeColor: "#1e1e1e",
    backgroundColor: "transparent",
    width: width,
    height: BOX_HEIGHT,
    seed: Math.floor(Math.random() * 1000000),
    groupIds: [],
    frameId: null,
    roundness: null,
    boundElements: [{ type: "text", id: textElement.id }],
    updated: Date.now(),
    link: null,
    locked: false,
  };
}

export { generateTextElement, generateTextBoxElement };
