const blogModel = require('../models/blogs');

const createBlog = async (req, res) => {
  try {
    const {
      title,
      description,
      tag,
      author,
      timestamp,
      state,
      read_count,
      reading_time,
      body,
    } = req.body;
    const user_id = req.user_id;

   

    const existingBlog = await blogModel.findOne({
      title: title,
      description: description,
      tag: tag,
      author: author,
      state: state,
      user_id: user_id,
      body: body,
    });

    
    const blog = await blogModel.create({
      title: title,
      description: description,
      tag: tag,
      author: author,
      state: state,
      user_id: user_id,
      body: body,
    });

    res.status(302).redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};
