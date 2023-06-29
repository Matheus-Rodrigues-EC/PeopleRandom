import express from "express";

const person = express();

person.use(express.json());

import { getPerson } from "../controllers/peopleControllers";

person.get('/person', getPerson);

export default person;