import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "../src/db.js";
import { PORT } from "../src/config.js";
import userRoute from "../src/routes/userRoute.js";
import productRoute from "../src/routes/productRoute.js";
import categoryRoute from "../src/routes/categoryRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexión a la base de datos
connectDB();

// Rutas de la aplicación
//ruta base
app.get("/", (req, res) => {
  res.send("home");
});

//rutas de usuario
app.use("/api/user", userRoute);

//rutas de producto
app.use("/api/product", productRoute);

//rutas de categorias
app.use("/api/category", categoryRoute);

// Iniciar el servidor

    app.listen(PORT, () =>
      console.log(`Example app listening on port ${PORT}!`),
    );
    
export default app