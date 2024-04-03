import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

function categorise(dir) {
  const category = {
    id: '',
    name: path.basename(dir),
    contracts: [],
    categories: [],
  };

  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      const nestedCategory = categorise(fullPath); // recursion
      category.categories.push(nestedCategory);
    } else if (file.endsWith('.sol')) {
      const contractName = path.basename(file, '.sol');
      category.contracts.push(contractName);
    }
  });

  const nestedCategoryIds = category.categories.map((nestedCategory) => nestedCategory.id);
  const idComponents = [category.name, ...nestedCategoryIds, ...category.contracts];
  const idString = idComponents.join('/');
  category.id = crypto.createHash('md5').update(idString).digest('hex');

  return category;
}

export default categorise;