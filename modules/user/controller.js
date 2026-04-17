import * as userService from './service.js';

export const listUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    
    res.status(200).json({
      success: true,
      data: users
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: "Error fetching user list", 
      error: error.message 
    });
  }
};