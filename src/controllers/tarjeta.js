import { getConnection, sql, queries } from '../database/index.js'

export const createNote = async (req, res, next) => {
    try {
        const { idCreator, title, body } = req.body;
        const pool = await getConnection();

        //VALIDO CAMPOS
        if (!idCreator || !title) return res.status(400).json({ msg: 'No deje campos vacios' });
        if (!body) body = "";

        //VALIDO CREATOR
        const creatorFound = await pool.request().input('idCreator', sql.Int, idCreator).query(queries.verifyCreatorById);
        if (creatorFound.recordset.length == 0) return res.status(404).json({ msg: 'Creador invalido' });

        await pool.request()
            .input('title', sql.VarChar, title)
            .input('body', sql.VarChar, body)
            .input('idCreator', sql.Int, idCreator)
            .query(queries.createNote);

        res.json({ message: "Nota creada exitosamente" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getNotes = async(req, res, next) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllNotes);
        console.log(result);

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getNoteById = async(req, res, next) => {
    try {
        const { id } = req.params
        const pool = await getConnection();
        
        if (!id) return res.status(400).json({ msg: 'Error en los parametros' });

        const noteFound = await pool.request().input('idNote', sql.Int, id).query(queries.getNoteById);
        if (noteFound.recordset.length == 0) return res.status(404).json({ msg: 'Nota invalida' });
        

        res.json(noteFound.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const deleteNote = async(req, res, next) => {
    try {
        const { id } = req.params
        const pool = await getConnection();
        
        if (!id) return res.status(400).json({ msg: 'Error en los parametros' });

        const noteFound = await pool.request().input('idNote', sql.Int, id).query(queries.deleteNoteById);
        if (noteFound.rowsAffected[0] < 1) return res.status(404).json({ msg: 'Nota invalida' });
        

        res.json({ message: "Nota eliminada exitosamente" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const updateNote = async(req, res, next) => {
    try {
        const pool = await getConnection();
        const { id } = req.params
        const { title, body } = req.body;

        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('title', sql.VarChar, title)
            .input('body', sql.VarChar, body)
            .query(queries.updateNoteById);
        if (result.rowsAffected[0] < 1) return res.status(404).json({ msg: 'Nota invalida' });

        res.json({ message: "Nota editada exitosamente" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

//export default createTarjeta;