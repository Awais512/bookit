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
// @desc    Create new Room
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
// @desc    Create new Room
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

export { allRooms, createRoom, getRoom };
