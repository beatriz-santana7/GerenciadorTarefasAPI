import http from "http";
import app from "./src/app"; // Supondo que seu app esteja em src/app.ts
import "dotenv/config"; // Para carregar variáveis de ambiente

const PORT = process.env.PORT || 3000; // Usando a variável de ambiente ou 3000 como padrão

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}!`);
});
