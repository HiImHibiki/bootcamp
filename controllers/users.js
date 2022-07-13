const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const User = require('../models/User');

// @desc    Get all users
// @route   GET /api/v1/auth/users
// @access  Private/Admin
exports.getUsers = asyncHandler(async (req, res, next) => {
  res.json(res.advancedResults);
});

// @desc    Get single user
// @route   GET /api/v1/auth/users/:id
// @access  Private/Admin
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.json({
    status: 200,
    success: true,
    data: user,
  });
});

// @desc    Create user
// @route   POST /api/v1/auth/users
// @access  Private/Admin
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    status: 201,
    success: true,
    data: user,
  });
});

// @desc    Update user
// @route   PUT /api/v1/auth/users/:id
// @access  Private/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.json({
    status: 200,
    success: true,
    data: user,
  });
});

// @desc    Delete user
// @route   DELETE /api/v1/auth/users
// @access  Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);

  res.json({
    status: 200,
    success: true,
    data: {},
  });
});
