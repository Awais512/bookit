const Room = require('../models/room');

// @route   POST /api/rooms
// @desc    Create new Room
// @access  Private
const createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(200).json({ success: true, room });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @route   GET /api/rooms
// @desc    Fetch all Rooms
// @access  Public
const allRooms = async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.status(200).json({ success: true, count: rooms.length, rooms });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @route   GET /api/rooms/:id
// @desc    Get Single Room
// @access  Public
const getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);
    if (!room) {
      return res
        .status(404)
        .json({ success: false, message: 'Room does not exist' });
    }
    res.status(200).json({ success: true, room });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @route   PUT /api/rooms/:id
// @desc    UPDATE  Room
// @access  PRIVATE
const updateRoom = async (req, res) => {
  try {
    let room = await Room.findById(req.query.id);
    if (!room) {
      return res
        .status(404)
        .json({ success: false, message: 'Room does not exist' });
    }
    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({ success: true, room });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @route   DELETE /api/rooms/:id
// @desc    Delete  Room
// @access  PRIVATE
const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);
    if (!room) {
      return res
        .status(404)
        .json({ success: false, message: 'Room does not exist' });
    }
    await Room.remove();
    res
      .status(200)
      .json({ success: true, message: 'Room was successfully removed' });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export { allRooms, createRoom, getRoom, updateRoom, deleteRoom };
