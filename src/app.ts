import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

export default app; //exportando o app para ser acessado pelo server.ts

interface Tarefa{
    id: number;
    tarefa: string;
    status: "pendente" | "concluida" | "cancelada";
}

const tarefas: Tarefa[] = [
    {
        id: 1,
        tarefa: "Iniciar parte 3 do Curso",
        status: "pendente"
      },

      {
        id: 2,
        tarefa: "Implementar o CRUD no projeto",
        status: "concluida"
      }
      
    
];

    
function buscaTarefa(id: string): number{  //função para buscar a tarefa pelo id
    return tarefas.findIndex((tarefa) => tarefa.id === Number(id))

}


app.get("/tarefas/pendentes", (_req, res) => {         //busca de tarefa por status
    const pendentes = tarefas.filter(t => t.status === "pendente");
    res.status(200).json(pendentes);
  });

  app.get("/tarefas/concluidas", (_req, res) => {         //busca de tarefa por status
    const concluidas = tarefas.filter(t => t.status === "concluida");
    res.status(200).json(concluidas);
  });
  

app.get("/tarefas/:id", (req: Request, resp: Response) => {  //buscando tarefa por id
    const index = buscaTarefa(req.params.id);
    resp.status(200).json(tarefas[index]);
})

app.post("/tarefas", (req: Request, res: Response) => {  //adicionando nova tarefa via post
    const novaTarefa: Tarefa = req.body;
    tarefas.push(novaTarefa);
    res.status(201).send("Tarefa cadastrada!");
});

app.put("/tarefas/:id", (req: Request, res: Response) => {  //editar uma terefa, passando o id
    const index = buscaTarefa(req.params.id);
    tarefas[index].tarefa = req.body.tarefa;
    res.status(200).json(tarefas);

});

app.delete("/tarefas/:id", (req: Request, res: Response) =>
{
    const index = buscaTarefa(req.params.id);
    tarefas.splice(index, 1);
    res.status(200).send("Tarefa removida!")
} )




