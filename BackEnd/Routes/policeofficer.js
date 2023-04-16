
import express from 'express';
import {PoliceOfficer} from '../Models/policeofficer.model.js';
const router = express.Router();
router.route('/').get((req, res) => {
    PoliceOfficer.find()
      .then(PoliceOfficer => res.json(PoliceOfficer))
      .catch(err => res.status(400).json('Error: ' + err));
  });
router.route('/add').post((req,res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const password= req.body.password;
    const Location= req.body.Location;
    const newOfficer = new PoliceOfficer({name,phone,email,password,Location});
    newOfficer.save()
        .then(()=>res.json("Police Officer added!!!"))
        .catch(err=>res.status(400).json('Error: '+err))
});
router.route('/:id').delete((req, res) => {
    PoliceOfficer.findByIdAndDelete(req.params.id)
    .then(() => res.json('Police Officer deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
    PoliceOfficer.findById(req.params.id)
    .then(PoliceOfficer => {
        PoliceOfficer.name = req.body.name;
        PoliceOfficer.phone = req.body.phone;
        PoliceOfficer.email = req.body.email;
        PoliceOfficer.password = req.body.password;
        PoliceOfficer.Location = req.body.Location;
   

        PoliceOfficer.save()
        .then(() => res.json('Police Officer updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
export default router;
