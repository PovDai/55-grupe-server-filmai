import { connection } from "../../db.js";
import { IsValid } from "../../lib/IsValid.js";

export async function postRegister(req, res) {/// async asinkronine funkcija sincronizacijai
    const [err, msg] = IsValid.fields(req.body, {
        username: 'username',
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
        const sql = 'SELECT * FROM USERS;';
        const response = await connection.query(sql)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }



    return res.json({
        status: 'success',
        msg: 'Sekminga registracija',
    });
}