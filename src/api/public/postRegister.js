import { connection } from "../../db.js";
import { IsValid } from "../../lib/IsValid.js";

export async function postRegister(req, res) {/// async asinkronine funkcija sincronizacijai
    const [err, msg] = IsValid.fields(req.body, {
        username: 'username', // validavimo funkciojos cia issauskiamos
        email: 'email',
        password: 'password',
        tos:'tos',
    })
    if (err) {
        return res.json({

            status: 'error',
            msg: msg,
        });
    }
    const { username, email, password } = req.body;

    try { /// try apsauga no kodo kuris gali crashint ir sustabdyti serveri.
        const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ? );`; // konkreciai irasymo eilute i db nes insertas

        const response = await connection.execute(sql, [username, email, password]) // per cia irasomna i duomenu baze registruojami duomenys 
        
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }

    return res.json({
        status: 'success',
        msg: 'Sekminga registracija',
    });
}