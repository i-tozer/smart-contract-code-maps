import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import categorise from "./helpers/categorise.js";
import sortCategoriesByNestedLength from "./helpers/sortCategoriesByNestedLength.js";
import generateTextandTextBoxPairAt00 from "./helpers/generateTextandTextBoxPairAt00.js";
import {
  Direction,
  getFurthestElementLocation,
} from "./helpers/getFurthestElementLocation.js";
import repositionElement from "./helpers/repositionElement.js";
import repositionCategory from "./helpers/repositionCategory.js";
import generateExcalidrawOutput from "./helpers/generateExcalidrawOutput.js";
import generateCategoryBoxAndGroupElements from "./helpers/generateCategoryBoxAndGroupElements.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contractsDir = path.join(
  __dirname,
  "protocols",
  "velvet-capital",
  "contracts"
);

const ELEMENT_SPACING = 10;
const CATEGORY_SPACING = 10;
const CATEGORY_BOX_PADDING = 50;
const AVG_CHAR_LENGTH = 10;
const TEXT_HEIGHT = 23;
const BOX_HEIGHT = 60;
const BOX_PADDING = 70;

const categorisedDir = categorise(contractsDir);
const sortedDir = sortCategoriesByNestedLength(categorisedDir);

let allCategoryObjs = [];
function generateCategoryElements(category) {
  const elements = [];
  let directionIndex = 3;

  for (const contract of category.contracts) {
    const [textElement, boxElement] = generateTextandTextBoxPairAt00(contract);
    const direction =
      Object.values(Direction)[
        directionIndex++ % Object.values(Direction).length
      ];
    const furthestElement = getFurthestElementLocation(direction, elements);
    repositionElement(
      textElement,
      boxElement,
      direction,
      furthestElement,
      ELEMENT_SPACING
    );
    elements.push(textElement, boxElement);
  }

  if (category.name !== "contracts") {
    // we assume "contracts" is the top level-dir
    for (const nestedCategory of category.categories) {
      const nestedCategoryElements = allCategoryObjs.filter((element) =>
        element.groupIds.includes(nestedCategory.id)
      );

      const direction =
        Object.values(Direction)[
          directionIndex++ % Object.values(Direction).length
        ];
      const furthestElement = getFurthestElementLocation(direction, elements);

      repositionCategory(
        nestedCategoryElements,
        direction,
        furthestElement,
        ELEMENT_SPACING // because the category is now an element of the new category
      );

      elements.push(...nestedCategoryElements);

      allCategoryObjs = allCategoryObjs.filter(
        (element) => !element.groupIds.includes(nestedCategory.id)
      );
    }
  }

  return elements;
}
function generateCategoryBoxes(sortedDir) {
  let directionIndex = 0;

  for (let i = 0; i < sortedDir.length; i++) {
    const category = sortedDir[i];
    const categoryElements = generateCategoryElements(category);

    let categoryObjs;
    if (i === sortedDir.length - 1) {
      // Last object in sortedDir, skip generateCategoryBoxAndGroupElements
      categoryObjs = categoryElements;
    } else {
      categoryObjs = generateCategoryBoxAndGroupElements(
        categoryElements,
        category.id
      );
    }

    if (allCategoryObjs.length >= 1) {
      const direction =
        Object.values(Direction)[
          directionIndex++ % Object.values(Direction).length
        ];

      const furthestCategory = getFurthestElementLocation(
        direction,
        allCategoryObjs.filter((obj) => obj.type === "rectangle")
      );

      repositionCategory(
        categoryObjs,
        direction,
        furthestCategory,
        CATEGORY_SPACING
      );
    }

    allCategoryObjs.push(...categoryObjs);
  }

  return allCategoryObjs;
}

const firstPaint = generateCategoryBoxes(sortedDir).flat();

generateExcalidrawOutput(firstPaint, __dirname);

export {
  CATEGORY_BOX_PADDING,
  AVG_CHAR_LENGTH,
  TEXT_HEIGHT,
  BOX_HEIGHT,
  BOX_PADDING,
};
