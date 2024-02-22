
const { Category } = require('../models/category');

exports.getAllCategories = async (req, res) => {
  try {
    const category = await Category.find({});
    if (category.length === 0) {
      return res.status(404).json({ Message: "no categories found" })

    }
    res.status(200).json(category);
  } catch (err) {
    return res.status(400).json("Categories not found");
  }
};

exports.addCategory = async (req, res) => {
  try {
    const createdCategory = await Category.create({
      name: req.body.name,
      color: req.body.color
    });
    if (!createdCategory) {
      return res.status(400).json("Category not added");
    }
    res.status(201).json(`Category ${createdCategory.name} added successfully`);
  } catch (err) {
    return res.status(400).json("Category not added");
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const update = {
      name: req.body.name,
      color: req.body.color
    };
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id,
      update, { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (err) {
    return res.status(400).json("Category not updated");
  }
};


exports.deleteCategory = async (req, res) => {
  try {
    await Category.findOneAndDelete({ _id: req.params.id });
    res.status(200).send('Category deleted');
  } catch (err) {
    return res.status(400).json("Category not deleted");
  }
};

exports.getCategoryById = async (req, res) => {
  const fetchedCategory = await Category.findById(req.params.id);
  if (!fetchedCategory) {
    return res.status(404).json("Category not found");
  }
  res.status(200).json(fetchedCategory);
};
