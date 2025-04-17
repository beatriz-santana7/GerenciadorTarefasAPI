import mongoose, { Document, Types, Schema } from "mongoose";

// 1. Interface que representa o tipo do documento
interface ITarefas extends Document {
  tarefa: string;
  status: "pendente" | "em progresso" | "concluida";
  nivel: string;  //se quiser que esse atributo seja opcional, precisa estar assim: nivel?: string;
  prazo: Date;
  funcionario: Types.ObjectId;
}

// 2. Schema
const tarefaSchema: Schema = new mongoose.Schema(
  {
    tarefa: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ["pendente", "em progresso", "concluida"],
      default: "pendente",
    },
  nivel: { type: String },
  prazo: { type: Date },
  funcionario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "funcionario", 
    required: true,
  },
}, 
{
  versionKey: false
}
);

// 3. Model
const gerenciador = mongoose.model<ITarefas>("Gerenciador", tarefaSchema);

export default gerenciador;
export type { ITarefas };

