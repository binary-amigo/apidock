const apiModel = require("../models/apiModel.js");
// const fs = require("fs");

//add api item

const addApi = async (req, res) => {
  // const image_filename = `${req.file.filename}`;

  const api = new apiModel({
    name: req.body.name,
    description: req.body.description,
    url: req.body.url
});
  try {
    await api.save();
    res.json({ sucess: true, message: "api item added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, message: "Failed to add api item" });
  }
};

//all api list
const listApi = async (req, res) => {
  try {
    const apis = await apiModel.find({});
    res.json({ success: true, apis });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to get api list" });
  }
};

//remove api item
// const removeapi = async (req, res) => {
//     try {
//         const api = await apiModel.findById(req.body.id);
//         fs.unlink(`uploads/${api.image}`,() => {} );

//         await apiModel.findByIdAndDelete(req.body.id);
//         res.json({ success: true, message: "api item deleted successfully" });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Failed to delete api item" });
//     }
// };

module.exports = { listApi, addApi };
