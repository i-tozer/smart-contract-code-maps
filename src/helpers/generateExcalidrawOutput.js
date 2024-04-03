import fs from "fs";
import path from "path";

function generateExcalidrawOutput(flattenedCategoryObjs, dirName) {

  const excalidrawFileContent = {
    type: "excalidraw",
    version: 2,
    source:
      "https://marketplace.visualstudio.com/items?itemName=pomdtr.excalidraw-editor",
    elements: flattenedCategoryObjs, // Include the flattened objects here
    appState: {
      gridSize: null,
      viewBackgroundColor: "#FFFFFF",
    },
    files: {},
  };

  // Stringify the content with indentation for readability
  const stringifiedContent = JSON.stringify(excalidrawFileContent, null, 2);

  // Define the output file path
  const outputFile = path.join(dirName, "outputTest.excalidraw");

  // Write the file asynchronously, handle success or error
  fs.writeFile(outputFile, stringifiedContent, (err) => {
    if (err) {
      console.error("Error writing the file:", err);
    } else {
      console.log("File successfully written:", outputFile);
    }
  });
}

export default generateExcalidrawOutput;
