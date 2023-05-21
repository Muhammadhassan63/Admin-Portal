import express from 'express';
import {CrimeReportDispatcher} from '../Models/crimeDispatcher.model.js';

const router = express.Router();

router.route('/').get((req, res) => {
  CrimeReportDispatcher.find()
    .then((reports) => res.json(reports))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const { crimeType, detail, phoneNumber, location } = req.body;
  const newReport = new CrimeReportDispatcher({ crimeType, detail, phoneNumber, location });

  newReport
    .save()
    .then(() => res.json('Report added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  CrimeReportDispatcher.findByIdAndDelete(req.params.id)
    .then(() => res.json('Report deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  CrimeReportDispatcher.findById(req.params.id)
    .then((report) => {
      report.crimeType = req.body.crimeType;
      report.detail = req.body.detail;
      report.phoneNumber = req.body.phoneNumber;
      report.location = req.body.location;

      report
        .save()
        .then(() => res.json('Report updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

export default router;
