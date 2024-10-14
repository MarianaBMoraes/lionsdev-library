import e from "express";
//import "dotenv/config";
import workshop_router from "./routers/workshopRouter.js";
import vehicle_router from "./routers/vehicleRouter.js";
import maintenance_router from "./routers/maintenanceRouter.js";
// import maintenance_router "./routers/maintenanceRouter.js";

const app = e();

app.use(e.json());

app.use("/workshop", workshop_router);
app.use("/vehicle", vehicle_router);
app.use("/maintenance", maintenance_router);

app.listen(3000, () => console.log('Server is running on port 3000'));