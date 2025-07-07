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

    try {
        const sql = 'SELECT  * FROM  users WHERE username= ? OR email= ?;'; // konkreciai irasymo eilute i db nes insertas
        const [response] = await connection.execute(sql, [username, email]) 

        console.log(response)

        if (response.length > 0) {
            return res.status(400).json({
                status: 'error',
                msg: 'Toks vartotojas jau uzregistruotas'
            });
        }
    }

    catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida',
        });
    
}
    const passwordHash = hash(password);



    try { /// try apsauga no kodo kuris gali crashint ir sustabdyti serveri.
        const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ? );`; // konkreciai irasymo eilute i db nes insertas

        const response = await connection.execute(sql, [username, email, passwordHash]) // per cia irasomna i duomenu baze registruojami duomenys
        if (response.affectedRows !== 1) {
            return res.status(500).json({
                status: 'error',
                msg: 'Serverio klaida'
            });
        }
        


        console.log(response);
        
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(500).json({
                status: 'error',
                msg:'kartojasi irasas'
            })
        }

        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg:'Serverio klaida',
        })
        
    }

    return res.status(201).json({
        status: 'success',
        msg: 'Sekminga registracija',
    });
}