import { Request, Response } from "express";
import gerenciador from "../src/models/Gerenciador";
import { funcionario } from "../src/models/Funcionario";

class GerenciadorController{

    static async listarTarefas(req: Request, res: Response): Promise<void>{ //buscar todas as tarefas
        try{
            const listarTarefas = await gerenciador.find().populate("funcionario");
            res.status(200).json(listarTarefas); 
        }catch(erro: any){
            res.status(500).json({ message: `${erro.message} - Falha ao listar tarefas` });
        };
    };

    static async listarTarefasConcluidas(req: Request, res: Response): Promise<void>{ //buscar todas as tarefas concluidas
        try{
            const tarefasConcluidas = await gerenciador.find({ status: { $in: ["concluida", "concluída"] } });
            res.status(200).json(tarefasConcluidas); 
        }catch(erro: any){
            res.status(500).json({ message: `${erro.message} - Falha ao listar tarefas concluídas` });
        };
    };

    static async listarTarefasAndamento(req: Request, res: Response): Promise<void>{ //buscar todas as tarefas em andamento
        try{
            const tarefasAndamento = await gerenciador.find({ status: "em progresso" });
            res.status(200).json(tarefasAndamento); 
        }catch(erro: any){
            res.status(500).json({ message: `${erro.message} - Falha ao listar tarefas concluídas` });
        };
    };

    static async listarTarefasPendentes(req: Request, res: Response): Promise<void>{ //buscar todas as tarefas pendentes
        try{
            const tarefasPendentes = await gerenciador.find({ status: "pendente" });
            res.status(200).json(tarefasPendentes); 
        }catch(erro: any){
            res.status(500).json({ message: `${erro.message} - Falha ao listar tarefas pendentes` });
        };
    };

    static async listarTarefaPorId(req: Request, res: Response){  //listar tarefa por id
        try{
            const id = req.params.id;
            const tarefaEncontrada = await gerenciador.findById(id);  
            res.status(200).json(tarefaEncontrada); 
        } catch(erro: any){  //por que do any? O TypeScript infere erro como unknown, e não permite acessar propriedades (como erro.message) sem antes verificar ou converter.
            res.status(500).json({message: `${erro.message} - falha na requisição do livroda tarefa!`})
        };
    };

    static async cadastroTarefa(req: Request, res: Response){ //cadastrar nova tarefa
        try{
            const novaTarefa = await gerenciador.create(req.body);
            res.status(201).json({message: "criado com sucesso!", livro: novaTarefa});
        }catch (erro: any) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar tarefa!`});
        }
    };

    static async atualizarTarefa(req: Request, res: Response){ //editar tarefa por id
        try{
            const id = req.params.id;
            await gerenciador.findByIdAndUpdate(id, req.body);  
            res.status(200).json({message: "tarefa aualizada!"}); 
        } catch(erro: any){
            res.status(500).json({message: `${erro.message} - falha na atualização da tarefa!`})
        }
    };

    static async deletarTarefa(req: Request, res: Response){ //deletar livro por Id
        try{
            const id = req.params.id;
            await gerenciador.findByIdAndDelete(id, req.body);  
            res.status(200).json({message: "tarefa removida!"}); 
        } catch(erro: any){
            res.status(500).json({message: `${erro.message} - falha na remoção da tarefa!`})
        }
    };

};

export default GerenciadorController;