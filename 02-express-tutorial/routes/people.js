const express = require("express");
const router = express.Router();

let { people } = require("../data");

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// router.get("/", getPeople);

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const filteredPeople = people.find((item) => item.id === +id);

  res.status(200).json({ success: true, data: filteredPeople });
});

// router.post("/", createPerson);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);

router.route("/").get(getPeople).post(createPerson);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
