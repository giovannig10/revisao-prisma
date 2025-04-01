import express from "express";
import PersonagemController from "../controllers/personagemController.js";

const personagensRouter = express.Router();

// Rotas de Personagens
// GET personagens - Listar todos os personagens
personagensRouter.get("/", PersonagemController.getAllPersonagens);

// GET personagens/:id - Obter um personagem pelo ID
personagensRouter.get("/:id", PersonagemController.getPersonagemById);

// POST personagens - Criar um novo personagem
personagensRouter.post("/", PersonagemController.createPersonagem);

// PUT personagens/:id - Atualizar um personagem
personagensRouter.put("/:id", PersonagemController.updatePersonagem);

// DELETE personagens/:id - Remover um personagem
personagensRouter.delete("/:id", PersonagemController.deletePersonagem);

export default personagensRouter;
