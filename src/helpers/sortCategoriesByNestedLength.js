
function sortCategoriesByNestedLength(rootCategory) {
    let sortedCategories = [];
  
    function findDeepestGroup(currentCategory, depth = 0) {
      let deepestGroup = currentCategory;
      let maxDepth = depth;
  
      currentCategory.categories.forEach(subCategory => {
        const [subDeepestGroup, subMaxDepth] = findDeepestGroup(subCategory, depth + 1);
        if (subMaxDepth > maxDepth) {
          deepestGroup = subDeepestGroup;
          maxDepth = subMaxDepth;
        }
      });
  
      return [deepestGroup, maxDepth];
    }
  
    function traverse(currentCategory) {
      if (sortedCategories.includes(currentCategory)) return;
  
      const [deepestGroup, maxDepth] = findDeepestGroup(currentCategory);
      if (maxDepth > 0) {
        traverse(deepestGroup);
      }
  
      sortedCategories.push(currentCategory);
      currentCategory.categories.forEach(subCategory => traverse(subCategory));
    }
  
    traverse(rootCategory);
    return sortedCategories;
  }
  
export default sortCategoriesByNestedLength;


