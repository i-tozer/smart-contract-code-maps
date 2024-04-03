function calculateDistanceToClosestNeighborNotInGroup(category, elements) {
  const distances = {
    right: Infinity,
    down: Infinity,
    left: Infinity,
    up: Infinity,
  };

  const obstructed = {
    right: false,
    down: false,
    left: false,
    up: false,
  };

  elements.forEach((element) => {
    if (element !== category && !element.groupIds.includes(category.id)) {
      const dx = element.x - (category.x + category.width);
      const dy = element.y - (category.y + category.height);

      // Check if the element is to the right of the category
      if (dx > 0 && dx < distances.right) {
        distances.right = dx;
        obstructed.right = isPathObstructed(category, element, "right");
      }

      // Check if the element is below the category
      if (dy > 0 && dy < distances.down) {
        distances.down = dy;
        obstructed.down = isPathObstructed(category, element, "down");
      }

      // Check if the element is to the left of the category
      const leftDx = category.x - (element.x + element.width);
      if (leftDx > 0 && leftDx < distances.left) {
        distances.left = leftDx;
        obstructed.left = isPathObstructed(category, element, "left");
      }

      // Check if the element is above the category
      const upDy = category.y - (element.y + element.height);
      if (upDy > 0 && upDy < distances.up) {
        distances.up = upDy;
        obstructed.up = isPathObstructed(category, element, "up");
      }
    }
  });

  console.log(`Category: ${category.id}`);
  console.log(`Distance to closest neighbor on the right: ${distances.right}`);
  console.log(`Path to the right obstructed: ${obstructed.right}`);
  console.log(`Distance to closest neighbor below: ${distances.down}`);
  console.log(`Path downwards obstructed: ${obstructed.down}`);
  console.log(`Distance to closest neighbor on the left: ${distances.left}`);
  console.log(`Path to the left obstructed: ${obstructed.left}`);
  console.log(`Distance to closest neighbor above: ${distances.up}`);
  console.log(`Path upwards obstructed: ${obstructed.up}`);
  console.log("---");

  return {
    categoryId: category.id,
    right: { distance: distances.right, obstructed: obstructed.right },
    down: { distance: distances.down, obstructed: obstructed.down },
    left: { distance: distances.left, obstructed: obstructed.left },
    up: { distance: distances.up, obstructed: obstructed.up },
  };
}

function isPathObstructed(category, element, direction) {
  switch (direction) {
    case "right":
      return (
        element.x < category.x + category.width &&
        element.y < category.y + category.height &&
        element.y + element.height > category.y
      );
    case "down":
      return (
        element.y < category.y + category.height &&
        element.x < category.x + category.width &&
        element.x + element.width > category.x
      );
    case "left":
      return (
        element.x + element.width > category.x &&
        element.y < category.y + category.height &&
        element.y + element.height > category.y
      );
    case "up":
      return (
        element.y + element.height > category.y &&
        element.x < category.x + category.width &&
        element.x + element.width > category.x
      );
    default:
      return false;
  }
}

function shiftCategory(category, elements, shiftX, shiftY) {
  elements.forEach((element) => {
    // this will include the category box too.
    if (element.groupIds.includes(category.id)) {
      element.x += shiftX;
      element.y += shiftY;
    }
  });
}

const categoryRectangles = firstPaint.filter((element) => {
    return (
      element.type === "rectangle" &&
      !element.containerId &&
      element.boundElements.length == 0 &&
      element.groupIds.includes(element.id)
    );
  });

// categoryRectangles.forEach((category) => {
//   const results = calculateDistanceToClosestNeighborNotInGroup(category, firstPaint);
//   console.log(results);

//   const directions = ["right", "down", "left", "up"];
//   let largestDistance = -Infinity;
//   let shiftDirection = null;

//   directions.forEach((direction) => {
//     if (!results[direction].obstructed && results[direction].distance !== Infinity && results[direction].distance > largestDistance) {
//       largestDistance = results[direction].distance;
//       shiftDirection = direction;
//     }
//   });

//   if (shiftDirection !== null) {
//     let shiftX = 0;
//     let shiftY = 0;

//     switch (shiftDirection) {
//       case "right":
//         shiftX = largestDistance;
//         break;
//       case "down":
//         shiftY = largestDistance;
//         break;
//       case "left":
//         shiftX = -largestDistance;
//         break;
//       case "up":
//         shiftY = -largestDistance;
//         break;
//     }

//     shiftCategory(category, firstPaint, shiftX, shiftY);
//   }
// });