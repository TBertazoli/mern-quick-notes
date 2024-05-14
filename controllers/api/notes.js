const Notes = require("../../models/note");
const User = require("../../models/user");

module.exports = {
  create,
};

async function create(req, res) {
  const user = await User.findById(req.user._id);

  try {
    const note = await Notes.create({ text: req.body.text, user: user });
    console.log(note);
    user.save(note);

    res.json(note);
  } catch (err) {
    res.status(400).json(err);
  }
}
