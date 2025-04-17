import express, { Express, Request, Response } from "express";
import tarefas from "./gerenciadorRoutes"; //importando as rotas das tarefas
import funcionarios from "./funcionarioRoutes";

const routes = (app: Express): void => { //apenas define as rotas
    app.use(express.json());
    app.route("/").get((req: Request, res: Response) => { //rota principal
        res.status(200).send("Seja bem-vindo(a) ao Gerenciador de Tarefas!")
    });


    app.use("/", tarefas, funcionarios);
};

export default routes;

//por que separar a rta principal das demais? boa prática, o arquivo ficará mais organizado e escalável. Apenas em projeto menores ou de tese, que todas as rotas são mapeadas diretamente no index