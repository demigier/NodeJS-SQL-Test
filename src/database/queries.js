export const queries = {

    getAllNotes: "SELECT * FROM Note",
    verifyCreatorById: "SELECT TOP 1 username FROM Creator WHERE id = @idCreator",
    createNote: "INSERT INTO Note (idCreator, title, body, createdAt) VALUES (@idCreator, @title, @body, GETDATE())",
    getNoteById: "SELECT TOP 1 * FROM Note WHERE id = @idNote",
    deleteNoteById: "DELETE FROM Note WHERE id = @idNote",
    updateNoteById: "UPDATE Note SET title = @title, body = @body WHERE id = @id"
    
}