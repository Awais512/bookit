import mongoose from 'mongoose';

// const connectDb = async () => {
//   try {
//     if (mongoose.connection.readyState >= 1) {
//       return;
//     }
//     await mongoose.connect('mongodb://localhost:27017/bookit', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//       useCreateIndex: true,
//     });
//     console.log('Mongodb connection established');
//   } catch (error) {
//     console.log(`Mongodb connection error is ${error}`);
//   }
// };

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose.connect('mongodb://localhost:27017/bookit', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
};

export default dbConnect;
