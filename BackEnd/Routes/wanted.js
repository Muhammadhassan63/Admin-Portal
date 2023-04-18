import express from "express";
import multer from "multer";
import { wantedCriminal } from "../Models/wanted.model.js";

const router = express.Router();

const upload = multer();

router.route("/").get((req, res) => {
  wantedCriminal
    .findById()
    .then((criminals) => res.json(criminals))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.route("/add").post(upload.single("image"), (req, res) => {
  const name = req.body.name;
  const image = req.file.buffer.toString("base64");
  const description = req.body.description;
  const newCrime = new wantedCriminal({ name, image, description });
  newCrime
    .save()
    .then(() => res.json("Wanted Criminal added!!!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  wantedCriminal
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("Wanted Criminal deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  wantedCriminal
    .findById(req.params.id)
    .then((criminal) => {
      criminal.name = req.body.name;
      criminal.image = req.body.image;
      criminal.description = req.body.description;

      criminal
        .save()
        .then(() => res.json("Wanted Criminal updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

export default router;
