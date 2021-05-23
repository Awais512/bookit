import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import { getRoom, updateRoom } from '../../../controllers/roomController';

const handler = nc();

dbConnect();

handler.get(getRoom);
handler.put(updateRoom);

export default handler;
