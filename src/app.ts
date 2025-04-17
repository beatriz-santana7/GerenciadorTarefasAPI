import express, { Request, Response } from "express";
import { Connection } from "mongoose"; 
import conectaNaDatabase from "../src/config/dbConnect";

const app = express();
app.use(express.json());  // Middleware para processar JSON

// Função para conectar ao banco de dados
async function main() {
  const conexao: Connection = await conectaNaDatabase();

  conexao.on("error", (erro: Error) => {
    console.error("Erro de conexão:", erro);
  });

  conexao.on("connected", () => {
    console.log("Conexão com o banco feita com sucesso (evento: connected)!");
  });
}

main().catch(err => console.error("Erro no main:", err));

export default app;
  // Agora as rotas definidas em `routes` estarão acessíveis via /api


//exportando o app para ser acessado pelo server.ts


//app.get("/tarefas/pendentes", (_req, res) => {         //busca de tarefa por status
    //const pendentes = tarefas.filter(t => t.status === "pendente");
    //res.status(200).json(pendentes);
  //});

  //aapp.get("/tarefas/concluidas", (_req, res) => {         //busca de tarefa por status
    //aconst concluidas = tarefas.filter(t => t.status === "concluida");
    //ares.status(200).json(concluidas);
 //a });
  

//app.get("/tarefas/:id", (req: Request, resp: Response) => {  //buscando tarefa por id
    //const index = buscaTarefa(req.params.id);
   // resp.status(200).json(tarefas[index]);
//})

//app.post("/tarefas", (req: Request, res: Response) => {  //adicionando nova tarefa via post
   // const novaTarefa: Tarefa = req.body;
   // tarefas.push(novaTarefa);
   // res.status(201).send("Tarefa cadastrada!");
//});

// app.put("/tarefas/:id", (req: Request, res: Response) => {  //editar uma terefa, passando o id
//     const index = buscaTarefa(req.params.id);
//     tarefas[index].tarefa = req.body.tarefa;
//     res.status(200).json(tarefas);

// });

// app.delete("/tarefas/:id", (req: Request, res: Response) =>
// {
//     const index = buscaTarefa(req.params.id);
//     tarefas.splice(index, 1);
//     res.status(200).send("Tarefa removida!")
// } )




