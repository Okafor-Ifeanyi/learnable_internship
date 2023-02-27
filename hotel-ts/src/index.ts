import express from 'express';
import 'dotenv/config';
import connectDb from './util/connectDb.util';
import room from './routes/room.route';
import roomType from './routes/roomTypes.route';
import user from './routes/user.route';
import errorHandler from './middlewares/error.middleware';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/rooms', room);
app.use('/api/v1/rooms-types', roomType);
app.use('/api/v1/auth', user);

app.use(errorHandler);

app.listen(process.env.PORT || 5432, async () => {
  console.log('Server is running on port 5000');
  await connectDb();
});
