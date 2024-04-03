const Direction = {
    RIGHT: "RIGHT",
    DOWN: "DOWN",
    LEFT: "LEFT",
    UP: "UP",
  };
  
function getFurthestElementLocation(direction, elements) {
    let furthestLocation;
  
    switch (direction) {
      case Direction.RIGHT:
        furthestLocation = elements.reduce(
          (maxLocation, element) => {
            const elementRight = element.x + element.width;
            if (elementRight > maxLocation.x) {
              return { x: elementRight, y: element.y };
            }
            return maxLocation;
          },
          { x: 0, y: 0 }
        );
        break;
      case Direction.DOWN:
        furthestLocation = elements.reduce(
          (maxLocation, element) => {
            const elementBottom = element.y + element.height;
            if (elementBottom > maxLocation.y) {
              return { x: element.x, y: elementBottom };
            }
            return maxLocation;
          },
          { x: 0, y: 0 }
        );
        break;
      case Direction.LEFT:
        furthestLocation = elements.reduce(
          (minLocation, element) => {
            if (element.x < minLocation.x) {
              return { x: element.x, y: element.y };
            }
            return minLocation;
          },
          { x: 0, y: 0 }
        );
        break;
      case Direction.UP:
        furthestLocation = elements.reduce(
          (minLocation, element) => {
            if (element.y < minLocation.y) {
              return { x: element.x, y: element.y };
            }
            return minLocation;
          },
          { x: 0, y: 0 }
        );
        break;
      default:
        throw new Error(
          "Invalid direction. Please provide a valid Direction enum value."
        );
    }
  
    return furthestLocation;
  }

  export { Direction, getFurthestElementLocation };
