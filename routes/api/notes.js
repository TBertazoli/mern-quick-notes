const express = require("express");
const router = express.Router();
const notesCtrl = require("../../controllers/api/notes");

router.post("/", notesCtrl.create);
router.get("/", notesCtrl.show);
router.delete("/:id", notesCtrl.delete);
router.get("/:id", notesCtrl.showOne);
router.put("/:id", notesCtrl.update);

module.exports = router;
