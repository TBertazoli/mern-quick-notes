const Notes = require("../../models/note");
const User = require("../../models/user");

module.exports = {
  create,
  show,
  delete: deleteNote,
  update,
  showOne,
};

async function create(req, res) {
  const user = await User.findById(req.user._id);

  try {
    const note = await Notes.create({ text: req.body.text, user: user });
    user.save(note);
    res.json(note);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function show(req, res) {
  try {
    const user = await User.findById(req.user._id);
    const notes = await Notes.find({ user: user });
    res.json(notes);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteNote(req, res) {
  try {
    const deletedNote = await Notes.findByIdAndDelete(req.params.id);
    res.json(deletedNote);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function showOne(req, res) {
  try {
    const note = await Notes.findById(req.params.id);
    res.json(note);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function update(req, res) {
  try {
    const editedNote = await Notes.findByIdAndUpdate(
      req.params.id,
      { text: req.body.text },
      { new: true }
    );
    res.json(editedNote);
  } catch (err) {
    res.status(400).json(err);
  }
}
