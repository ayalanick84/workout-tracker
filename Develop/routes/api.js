const router = require("express").Router();
const mongojs = require("mongojs");
// TODO: import required model/s
const db = require("../models");

// TODO: and add code to the routes so that the app functions correctly


// Creates a workout using data in the request body.
router.post("/api/workouts", (req, res) => {
  // CODE HERE
  db.Workout.create(req.body)

    .then((data) => {
      // send response to client
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Respond with workout for id url parameter. This should
// respond with the updated workout json
router.put("/api/workouts/:id", (req, res) => {
  // CODE HERE
  db.Workout.update(
    {
      _id: mongojs.ObjectId(req.params.id),
    },
    
    {
      $inc : {totalDuration : req.body.duration},
      $push: { exercises:req.body }
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {

        res.send(data);
      }
    }
  );
});

// Respond with json for all the workouts in an array.
router.get("/api/workouts", (req, res) => {
  // CODE HERE
  db.Workout.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

// Respond with json array containing the last 7 workouts
router.get("/api/workouts/range", (req, res) => {
  // CODE HERE
  db.Workout.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  }).sort({ day: 1 }).limit(7);
});

// Delete workout with id matching id in the request body.
router.delete("/api/workouts", (req, res) => {
  // CODE HERE
  db.Workout.remove(
    {
      _id: mongojs.ObjectID(req.body.id),
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

module.exports = router;
