import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dispatcherRoute from './Routes/dispatcher.js';
// Configuring the server
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// //Routes
// app.use("/admin", adminRoutes);
// app.use("/policestation", policestationRoutes);
app.use("/dispatcher", dispatcherRoute);


//DB connection
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => {
        console.log('Server Port: ' + PORT)
    })
}).catch((error) => console.log(error))