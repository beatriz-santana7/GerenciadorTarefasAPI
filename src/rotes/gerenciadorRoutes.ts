import express, { Router } from "express";
import GerenciadorController from "../controller/gerenciadorController";

const routes: Router = express.Router();

routes.get("/tarefas", GerenciadorController.listarTarefas);

export default routes;