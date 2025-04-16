import mongoose, { Document, Schema } from "mongoose";

// 1. Interface que representa o tipo do documento
interface ITarefas extends Document {
  tarefa: string;
  status: { type: String, required: true, enum: ["pendente", "em progresso", "concluída"], default: "pendente" };
  nivel?: string;
  prazo?: Date;
}

// 2. Schema
const tarefaSchema: Schema = new mongoose.Schema({
  tarefa: { type: String, required: true },
  status: { type: String },
  nivel: { type: Number },
  prazo: { type: Date },
}, {
  versionKey: false
});

// 3. Model
const gerenciador = mongoose.model<ITarefas>("Livro", tarefaSchema);

export default gerenciador;
export type { ITarefas };

