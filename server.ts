import app from "./src/app";

// Define a porta como número (você também pode usar `process.env.PORT`)
const PORT: number = 5000;

app.listen(PORT, () => {
  console.log("Servidor escutando!");
});
