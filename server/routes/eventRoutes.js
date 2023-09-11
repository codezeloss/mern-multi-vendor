const express = require("express");
const router = express.Router();
const { upload } = require("../multer");
const {
  createEvent,
  getAllEvents,
  deleteEvent,
} = require("../controllers/eventController");
const { isSellerAuthenticated } = require("../middlewares/authMiddleware");

router.post("/create-event", upload.array("images"), createEvent);
router.get("/get-events/:id", getAllEvents);
router.delete("/delete-event/:id", isSellerAuthenticated, deleteEvent);

module.exports = router;
