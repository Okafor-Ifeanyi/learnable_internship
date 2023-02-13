const express = require("express");
const HotelName = require("../models/room");
const router = new express.Router();

router.post("/rooms", async (req, res) => {
  const rooms = new HotelName(req.body);
  try {
    await rooms.save();
    res.status(201).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/rooms", async (req, res) => {
    const search = req.query.search;
    const roomType = req.query.roomType;
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
  try {
    let queryString = {};
    if (search) {
        queryString.Name = {$regex: search}
    }
    if (roomType) {
        queryString.roomType = roomType;
    }
    if (minPrice) {
        queryString.price = {$gte: minPrice}
    }
    if (maxPrice) {
        queryString.price = {$lte: maxPrice}
    }
    const rooms = await HotelName.find({queryString});
    res.send(rooms);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/rooms/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const room = await HotelName.findById(_id);
    if (!room) {
      res.status(404).send();
    } else {
      res.send(room);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/rooms/:id", async (req, res) => {
  const _id = req.params.id;
//   Validating the neccessary updates.
  const updates = Object.keys(req.body);
  const allowedUpdates = ["codeName", "type", "prize"];
  const isValidUpdate = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidUpdate) {
    return res.status(400).send({ error: "Invalid Update" });
  }

  try {
    const room = await HotelName.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!room) {
      res.status(404).send();
    } else {
      res.send(room);
    }
  } catch (e) {
    res.status(404).send(e);
  }
});

router.delete("/rooms/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const room = await HotelName.findByIdAndDelete(_id);
    if (!room) {
      res.status(404).send();
    } else {
      res.send(room);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router; 