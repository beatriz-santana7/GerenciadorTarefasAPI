import express, { Router } from "express";
import GerenciadorController from "../controllers/gerenciadorController";

const routes: Router = express.Router();

routes.get("/tarefas", GerenciadorController.listarTarefas);
routes.get("/tarefas/concluidas", GerenciadorController.listarTarefasConcluidas);
routes.get("/tarefas/pendentes", GerenciadorController.listarTarefasPendentes);
routes.get("/tarefas/andamento", GerenciadorController.listarTarefasAndamento);
routes.get("/tarefas/:id", GerenciadorController.listarTarefaPorId);
routes.post("/tarefas", GerenciadorController.cadastroTarefa);
routes.put("/tarefas/:id", GerenciadorController.atualizarTarefa);
routes.delete("/tarefas/:id", GerenciadorController.deletarTarefa);

export default routes;