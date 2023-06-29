
import { QueryResult } from "pg";
import { db } from "../config/dataBase";

export async function getRandomPeople() {
    
    // Faz a busca da quantidade de pessoas cadastradas no banco
    const selectMax = ` SELECT * FROM people`
    const max: number = (await db.query(selectMax)).rowCount;

    // Randomiza um númeor inteiro para que seja feita uma busca por id
    const id: number = Math.floor(Math.random() * (max - 1 + 1)) + 1;

    // Faz a busca no banco com o id randomizado.
    const select: string = `SELECT "firstName", "lastName" FROM people WHERE id = $1`;

    const rPeople = await db.query(select, [id]);
    // console.log(rPeople.rows[0]);
    return rPeople.rows[0];
} 