import {Request, Response} from "express";
import {funcionario} from "../src/models/Funcionario";
import { fchown } from "fs";

class GerenciadorFuncionario{

    static async listarFuncionario(req: Request, res: Response): Promise<void>{ //buscar todos os funcionários
        try{
            const listarFuncionario = await funcionario.find();
            res.status(200).json(listarFuncionario); 
        }catch(erro: any){
            res.status(500).json({ message: `${erro.message} - Falha ao listar funcionários!` });
        };
    };

    static async listarFuncionarioPorId(req: Request, res: Response){  //listar funcionario por id
        try{
            const id = req.params.id;
            const funcionarioEncontrado = await funcionario.findById(id);  
            res.status(200).json(funcionarioEncontrado); 
        } catch(erro: any){  //por que do any? O TypeScript infere erro como unknown, e não permite acessar propriedades (como erro.message) sem antes verificar ou converter.
            res.status(500).json({message: `${erro.message} - falha na requisição do funcionário!`})
        };
        };

    static async cadastroFuncionario(req: Request, res: Response){ //cadastrar novo funcionário
        try{
            const novoFuncionario = await funcionario.create(req.body);
            res.status(201).json({message: "criado com sucesso!", livro: novoFuncionario});
        }catch (erro: any) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar funcionario!`});
        }
    };

    static async atualizarFuncionario(req: Request, res: Response){ //editar funcionário por id
        try{
            const id = req.params.id;
            await funcionario.findByIdAndUpdate(id, req.body);  
            res.status(200).json({message: "funcionário atualizado!"}); 
        } catch(erro: any){
            res.status(500).json({message: `${erro.message} - falha na atualização do funcionário!`})
        }
    };

    static async deletarFuncionario(req: Request, res: Response){ //deletar fucnionário por Id
        try{
            const id = req.params.id;
            await funcionario.findByIdAndDelete(id, req.body);  
            res.status(200).json({message: "funcionario removido!"}); 
        } catch(erro: any){
            res.status(500).json({message: `${erro.message} - falha na remoção do!`})
        }
    };
};

export default GerenciadorFuncionario;