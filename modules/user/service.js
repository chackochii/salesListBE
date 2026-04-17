import db from '../index.js';


export const getAllUsers = async () => {
  return await db.User.findAll({
    attributes: ['UserID', 'UserName'],
    order: [['UserName', 'ASC']]    
  });
};