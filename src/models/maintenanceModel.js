import db from "../config/db.js";
import { Schema } from "mongoose";

const maintenanceSchema = new db.Schema({
workshop: {
        type: Schema.Types.ObjectId,
        ref: 'Workshop',
        required: true
},
vehicle: {
    type: Schema.Types.ObjectId,
    ref: 'Vehicle',
    required: true
},
services: {
    type: String,
    required: true
},
date: {
    type: Date,
    required: true,
},
totalCost: {
    type: Number,
    required: true
}
});

const Maintenance = db.model("Maintenance", maintenanceSchema);

export default Maintenance;