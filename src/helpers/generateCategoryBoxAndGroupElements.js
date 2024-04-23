import { getFurthestElementLocation } from "./getFurthestElementLocation.js";
import { CATEGORY_BOX_PADDING } from "./../config/config.js";

function generateCategoryBoxAndGroupElements(elements, categoryBoxId) {
    const furthestLeft = getFurthestElementLocation("LEFT", elements);
    const furthestRight = getFurthestElementLocation("RIGHT", elements);
    const furthestUp = getFurthestElementLocation("UP", elements);
    const furthestDown = getFurthestElementLocation("DOWN", elements);
  
    const categoryBox = {
      type: "rectangle",
      version: 1,
      versionNonce: Math.floor(Math.random() * 1000000),
      isDeleted: false,
      id: categoryBoxId,
      fillStyle: "solid",
      strokeWidth: 2,
      strokeStyle: "solid",
      roughness: 0,
      opacity: 100,
      angle: 0,
      x: furthestLeft.x - CATEGORY_BOX_PADDING,
      y: furthestUp.y - CATEGORY_BOX_PADDING,
      strokeColor: "#000000",
      backgroundColor: "transparent",
      width: furthestRight.x - furthestLeft.x + 2 * CATEGORY_BOX_PADDING,
      height: furthestDown.y - furthestUp.y + 2 * CATEGORY_BOX_PADDING,
      seed: 1,
      groupIds: [categoryBoxId],
      frameId: null,
      roundness: null,
      boundElements: [],
      updated: Date.now(),
      link: null,
      locked: false,
    };
  
    const updatedElements = elements.map((element) => ({
      ...element,
      groupIds: [...element.groupIds, categoryBoxId],
    }));
  
    return [categoryBox, ...updatedElements];
  }

  
  export default generateCategoryBoxAndGroupElements