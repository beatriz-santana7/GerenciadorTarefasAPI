import mongoose, { Document, Schema } from "mongoose";

// 1. Interface que representa o tipo do documento
interface IFuncionario extends Document {  //uma interface em ts descreve como o objeto deve ser, "instancia os objetos"
  nome: string;
  cargo: string
  setor: string;  
}

// 2. Schema
const funcionarioSchema: Schema = new mongoose.Schema({
  nome: { type: String, required: true },
  cargo: { type: String },
  setor: { type: String },
}, {
  versionKey: false
});

// 3. Model
const funcionario = mongoose.model<IFuncionario>("funcionario", funcionarioSchema);

export {funcionario, funcionarioSchema} ;
export type { IFuncionario };