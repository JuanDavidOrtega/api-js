import express from "express";
import fs from "fs";
import bodyparser from "body-parser";

const app = express();

app.use(bodyparser.json());

app.listen(3000, () =>{
  console.log(`puerto aceptado ${3000}`)
});

const rdb = () => {
  try {
    const datos = fs.readFileSync("./equipos.json");
    
    return(
     
      JSON.parse(datos)
    );
  } catch (error) {
    console.log(error);
  }
}

app.get("/", (req,res)=> {
  res.send("Bienvenido");
});


app.get("/equipos", (req,res)=> {
  const datos = rdb();
  console.log(datos.equipos);
  res.json(datos.equipos);
});

app.get("/equipos/1", (req,res)=> {
  try {
    const datos = rdb();
    console.log(datos.equipos[0]);
  res.json(datos.equipos[0]);
  } catch (error) {
    console.log(error);
  }
});

