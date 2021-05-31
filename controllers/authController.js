import User from '../models/user';
import ErrorHandler from '../utils/errorHandler';
import catchAsync from '../middlewares/catchAsyncErrors';
import cloudinary from 'cloudinary';

//Setting up cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// @route   POST /api/rooms
// @desc    Create new Room
// @access  Private
const registerUser = catchAsync(async (req, res, next) => {
  const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
    folder: 'bookit/avatars',
    width: '150',
    crop: 'scale',
  });
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });
  res
    .status(200)
    .json({ success: true, message: 'Account registered successfully' });
});

export { registerUser };
