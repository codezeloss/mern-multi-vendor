const Shop = require("../models/ShopModel");
const Event = require("../models/EventModel");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/ErrorHandler");

// !! @desc   Create new Event
// !! @route  POST /create-event
// !! @access Private
const createEvent = asyncHandler(async (req, res, next) => {
  try {
    const { shopId } = req.body;

    // ** Check if the Shop with the id exists
    const shop = await Shop.findById(shopId);

    if (shop) {
      // ** Get uploaded files
      const files = req.files;
      console.log(files);
      const imageURLs = files.map((file) => `${file.filename}`);

      // ** Get Event Data from body
      const eventData = req.body;
      eventData.images = imageURLs;
      eventData.shop = shop;

      // ** New Event
      const event = await Event.create(eventData);

      if (event) res.status(201).json(event);
    } else {
      return next(new ErrorHandler("Shop Id is invalid!", 400));
    }
  } catch (e) {
    return next(new ErrorHandler(e, 400));
  }
});

// !! @desc   All Events
// !! @route  GET /get-events/:id
// !! @access Private
const getAllEvents = asyncHandler(async (req, res, next) => {
  try {
    const shopId = req.params.id;

    const events = await Event.find({ shopId });

    res.status(201).json(events);
  } catch (e) {
    return next(new ErrorHandler(e, 400));
  }
});

// !! @desc   Delete event
// !! @route  DELETE /delete-event/:id
// !! @access Private
const deleteEvent = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;

    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return next(new ErrorHandler("Event Not Found with this ID!", 400));
    }

    res.status(201).json(event._id);
  } catch (e) {
    return next(new ErrorHandler(e, 400));
  }
});

module.exports = {
  createEvent,
  getAllEvents,
  deleteEvent,
};
