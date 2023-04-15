import express from 'express';
import {DispatcherOfficer} from '../Models/dispatcher.model.js';
const router = express.Router();
router.route('/').get((req, res) => {
    DispatcherOfficer.find()
      .then(DispatcherOffice => res.json(DispatcherOffice))
      .catch(err => res.status(400).json('Error: ' + err));
  });
router.route('/add').post((req,res) => {
    const username = req.body.username;
    const phone = req.body.phone;
    const email = req.body.email;
    const newCrime = new DispatcherOfficer({username,phone,email});
    newCrime.save()
        .then(()=>res.json("Dispatcher added!!!"))
        .catch(err=>res.status(400).json('Error: '+err))
});
export default router;
