import express from 'express';
import {DispatcherOfficer} from '../Models/dispatcher.model.js';
const router = express.Router();
router.route('/').get((req, res) => {
    DispatcherOfficer.find()
      .then(DispatcherOffice => res.json(DispatcherOffice))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').get((req, res) => {
    DispatcherOfficer.findById(req.params.id)
      .then(DisptacherOffice => res.json(DisptacherOffice))
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
router.route('/:id').delete((req, res) => {
  DispatcherOfficer.findByIdAndDelete(req.params.id)
    .then(() => res.json('Dispatcher deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').patch((req, res) => {
  DispatcherOfficer.findById(req.params.id)
    .then(DisptacherOffice => {
      DisptacherOffice.username = req.body.name;
      DisptacherOffice.phone = req.body.phone;
      DisptacherOffice.email = req.body.email;
      DisptacherOffice.password = req.body.password;
      DisptacherOffice.save()
        .then(() => res.json('Dispatcher updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
export default router;

