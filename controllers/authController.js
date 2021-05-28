import User from '../models/user';
import ErrorHandler from '../utils/errorHandler';
import catchAsync from '../middlewares/catchAsyncErrors';

// @route   POST /api/rooms
// @desc    Create new Room
// @access  Private
const registerUser = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: 'PUBLIC_ID',
      url: 'URL',
    },
  });
  res
    .status(200)
    .json({ success: true, message: 'Account registered successfully' });
});

export { registerUser };
