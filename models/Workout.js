const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    // CODE HERE
    day: {
        type: Date,
        default: Date.now
    },
    totalDuration: {
        type: Number,
        default:0
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Type is Required"
        },
        duration: {
            type: Number,
            required: "How long was your workout?"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
