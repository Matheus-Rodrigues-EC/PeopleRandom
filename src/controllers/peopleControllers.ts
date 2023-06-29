import { QueryResult } from "pg";
import { getRandomPeople } from "../repositories/peopleRepositorie";

export async function getPerson(req: any, res: any){
    try {
        const person = await getRandomPeople();
        
        return res.status(200).send(person);
    } catch (error) {
        return res.status(500).send(error);
    }
}