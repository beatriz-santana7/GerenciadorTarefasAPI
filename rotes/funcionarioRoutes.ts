import express, { Router } from "express";
import GerenciadorFuncionario from "../controllers/funcionarioController";

const routes: Router = express.Router();

routes.get("/funcionarios", GerenciadorFuncionario.listarFuncionario);
routes.get("/funcionarios/:id", GerenciadorFuncionario.listarFuncionarioPorId);
routes.post("/funcionarios", GerenciadorFuncionario.cadastroFuncionario);
routes.put("/funcionarios/:id", GerenciadorFuncionario.atualizarFuncionario);
routes.delete("/funcionarios/:id", GerenciadorFuncionario.deletarFuncionario);

export default routes;
