import Room from '../models/room';
import ErrorHandler from '../utils/errorHandler';
import catchAsync from '../middlewares/catchAsyncErrors';
import APIFeatures from '../utils/apiFeatures';

// @route   POST /api/rooms
// @desc    Create new Room
// @access  Private
const createRoom = catchAsync(async (req, res, next) => {
  const room = await Room.create(req.body);
  res.status(200).json({ success: true, room });
});

// @route   GET /api/rooms
// @desc    Fetch all Rooms
// @access  Public
const allRooms = catchAsync(async (req, res, next) => {
  const resPerPage = 4;

  const roomsCount = await Room.countDocuments();

  const apiFeatures = new APIFeatures(Room.find(), req.query).search().filter();

  let rooms = await apiFeatures.query;
  let filteredRoomsCount = rooms.length;

  apiFeatures.pagination(resPerPage);
  rooms = await apiFeatures.query;

  res.status(200).json({
    success: true,
    roomsCount,
    resPerPage,
    filteredRoomsCount,
    rooms,
  });
});

// @route   GET /api/rooms/:id
// @desc    Get Single Room
// @access  Public
const getRoom = catchAsync(async (req, res, next) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler('Room does not exist', 404));
  }
  res.status(200).json({ success: true, room });
});

// @route   PUT /api/rooms/:id
// @desc    UPDATE  Room
// @access  PRIVATE
const updateRoom = catchAsync(async (req, res, next) => {
  let room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler('Room does not exist', 404));
  }
  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({ success: true, room });
});

// @route   DELETE /api/rooms/:id
// @desc    Delete  Room
// @access  PRIVATE
const deleteRoom = catchAsync(async (req, res, next) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler('Room does not exist', 404));
  }
  await Room.remove();
  res
    .status(200)
    .json({ success: true, message: 'Room was successfully removed' });
});

export { allRooms, createRoom, getRoom, updateRoom, deleteRoom };
