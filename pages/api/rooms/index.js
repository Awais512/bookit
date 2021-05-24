import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import { allRooms, createRoom } from '../../../controllers/roomController';
import onError from '../../../middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.get(allRooms);
handler.post(createRoom);

export default handler;
