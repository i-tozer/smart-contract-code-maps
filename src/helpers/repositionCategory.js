function calculateBoundingBox(elements) {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const element of elements) {
    minX = Math.min(minX, element.x);
    minY = Math.min(minY, element.y);
    maxX = Math.max(maxX, element.x + element.width);
    maxY = Math.max(maxY, element.y + element.height);
  }

  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY,
  };
}

function shiftCategoryElements(elements, shiftX, shiftY) {
  for (const element of elements) {
    element.x += shiftX;
    element.y += shiftY;
  }
}

function calculateShiftDistance(
  direction,
  categoryBoundingBox,
  furthestCategory,
  spacing
) {
  switch (direction) {
    case "RIGHT":
      return furthestCategory.x - categoryBoundingBox.x + spacing;
    case "DOWN":
      return furthestCategory.y - categoryBoundingBox.y + spacing;
    case "LEFT":
      return (
        furthestCategory.x -
        (categoryBoundingBox.x + categoryBoundingBox.width) -
        spacing
      );
    case "UP":
      return (
        furthestCategory.y -
        (categoryBoundingBox.y + categoryBoundingBox.height) -
        spacing
      );
    default:
      return 0;
  }
}

function repositionCategory(
  categoryObjs,
  direction,
  furthestCategory,
  spacing
) {
  const categoryElements = categoryObjs.filter(
    (obj) => obj.type == "rectangle"
  );

  const categoryBoundingBox = calculateBoundingBox(categoryElements);
  const shiftDistance = calculateShiftDistance(
    direction,
    categoryBoundingBox,
    furthestCategory,
    spacing
  );

  switch (direction) {
    case "RIGHT":
    case "LEFT":
      shiftCategoryElements(categoryObjs, shiftDistance, 0);
      break;
    case "DOWN":
    case "UP":
      shiftCategoryElements(categoryObjs, 0, shiftDistance);
      break;
  }
}

export default repositionCategory;
