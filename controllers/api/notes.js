const Notes = require("../../models/note");
const User = require("../../models/user");

module.exports = {
  create,
};

async function create(req, res) {
  const user = await User.findById(req.user._id);

  if (user.notes === undefined) {
    user.notes = [];
  }
  user.notes.push(req.body.text);
  try {
    const note = await Notes.create(req.body);
    user.notes.push(note);
  } catch (err) {
    res.status(400).json(err);
  }
  res.redirect("/");
}
