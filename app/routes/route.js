const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller.js");

router.post("/", userController.createUser);
router.get("/", userController.getAllUser);
router.get("/:id", userController.getUserById);
router.delete("/:id", userController.deleteUser);

// export router
module.exports = router;
