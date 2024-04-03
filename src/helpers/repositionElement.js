function repositionElement(textElement, boxElement, direction, furthestElement, spacing) {

    switch (direction) {
      case "RIGHT":
        boxElement.x = furthestElement.x + spacing;
        boxElement.y = furthestElement.y;
        textElement.x = boxElement.x + (boxElement.width - textElement.width) / 2;
        textElement.y = boxElement.y + (boxElement.height - textElement.height) / 2;
        break;
      case "DOWN":
        boxElement.x = furthestElement.x;
        boxElement.y = furthestElement.y + spacing;
        textElement.x = boxElement.x + (boxElement.width - textElement.width) / 2;
        textElement.y = boxElement.y + (boxElement.height - textElement.height) / 2;
        break;
      case "LEFT":
        boxElement.x = furthestElement.x - spacing - boxElement.width;
        boxElement.y = furthestElement.y;
        textElement.x = boxElement.x + (boxElement.width - textElement.width) / 2;
        textElement.y = boxElement.y + (boxElement.height - textElement.height) / 2;
        break;
      case "UP":
        boxElement.x = furthestElement.x;
        boxElement.y = furthestElement.y - spacing - boxElement.height;
        textElement.x = boxElement.x + (boxElement.width - textElement.width) / 2;
        textElement.y = boxElement.y + (boxElement.height - textElement.height) / 2;
        break;
    }
  }

  export default repositionElement;
