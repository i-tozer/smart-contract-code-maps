import categorise from "./../helpers/categorise.js";
import sortCategoriesByNestedLength from "./../helpers/sortCategoriesByNestedLength.js";

const repositoryTraversal = (contractsDir) => {
    const categorisedDir = categorise(contractsDir);
    const sortedDir = sortCategoriesByNestedLength(categorisedDir);
    return sortedDir
}

export default repositoryTraversal;

