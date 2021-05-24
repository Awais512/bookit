import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import {
  getRoom,
  updateRoom,
  deleteRoom,
} from '../../../controllers/roomController';

import onError from '../../../middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.get(getRoom);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
