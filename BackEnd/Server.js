import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from "body-parser"; 
import dispatcherRoute from './Routes/dispatcher.js';
import officerRoute from './Routes/policeofficer.js';
import stationRoute from './Routes/policestation.js';
import wantedRoute from './Routes/wanted.js';
// Configuring the server
dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// //Routes
// app.use("/admin", adminRoutes);
// app.use("/policestation", policestationRoutes);
app.use("/dispatcher", dispatcherRoute);
app.use("/officer", officerRoute);
app.use("/station", stationRoute);
app.use("/wanted", wantedRoute);

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