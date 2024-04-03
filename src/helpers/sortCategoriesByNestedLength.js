
function sortCategoriesByNestedLength(rootCategory) {
    let categoriesByLength = {};
    let sortedCategories = [];

    function traverse(currentCategory) {
        // Avoid duplicating categories by using their names as keys
        if (categoriesByLength[currentCategory.name]) return;

        let length = currentCategory.categories.length;
        if (!categoriesByLength[length]) {
            categoriesByLength[length] = [];
        }

        categoriesByLength[length].push(currentCategory);

        // Recursively process nested categories
        currentCategory.categories.forEach(subCategory => traverse(subCategory));
    }

    // Start the traversal from the root category
    traverse(rootCategory);

    // Sort the keys (lengths) to ensure processing order
    Object.keys(categoriesByLength)
        .sort((a, b) => a - b) // Sort numerically by the lengths of the categories arrays
        .forEach(length => {
            categoriesByLength[length].forEach(category => sortedCategories.push(category));
        });

    return sortedCategories;
}

export default sortCategoriesByNestedLength;


