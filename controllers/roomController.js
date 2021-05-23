const Room = require('../models/room');

// @route   GET /api/rooms
// @desc    Create new Room
// @access  Public
const allRooms = async (req, res) => {
  res.status(200).json({ success: true, message: 'All Rooms' });
};

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

export { allRooms, createRoom };
