import Router from 'express';
import { createNote, getNotes, getNoteById, deleteNote, updateNote } from '../controllers/tarjeta.js';

const router = Router();

router.post('/create-note', createNote);
router.get('/notes', getNotes);
router.put('/update-note/:id', updateNote);
router.get('/note/:id', getNoteById);
router.delete('/delete-note/:id', deleteNote);

export default router;