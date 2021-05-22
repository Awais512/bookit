const allRooms = async (req, res, next) => {
  res.status(200).json({ success: true, message: 'All Rooms' });
};

export { allRooms };
