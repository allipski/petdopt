import { Router } from "express";
import { getPets, postPet, deletePet, updatePet } from "../controller/pets-controller.js";
var petsRouter = Router();
petsRouter.post('/pets', postPet);
petsRouter.get('/pets', getPets);
petsRouter["delete"]('/pets/:id', deletePet);
petsRouter.put('/pets/:id', updatePet);
export default petsRouter;