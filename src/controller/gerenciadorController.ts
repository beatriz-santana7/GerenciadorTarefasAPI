import { Request, Response } from "express";
import gerenciador from "../models/gerenciador";

class GerenciadorController{

    static async listarTarefas(req: Request, res: Response): Promise<void>{
        try{
            const tarefas = await gerenciador.find();
            res.status(200).json(tarefas); 
        }catch(erro: any){
            res.status(500).json({ message: `${erro.message} - Falha ao listar tarefas` });
        };

    };
};

export default GerenciadorController;