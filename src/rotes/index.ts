import express, { Express, Request, Response } from "express";
import tarefas from "./gerenciadorRoutes"; //importando as rotas das tarefas

const routes = (app: Express): void => {
    app.route("/").get((req: Request, res: Response) => { //rota principal
        res.status(200).send("Seja bem-vindo(a) ao Gerenciador de Tarefas!")
    });

    app.use(express.json());
    app.use("/tarefas", tarefas);
};

export default routes;