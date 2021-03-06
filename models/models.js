const db = require('../knex.js');

module.exports = {
    getNotes,
    createNote,
    updateNote,
    findNoteById,
    removeNote
};

function getNotes() {
    return db('notes');
};

function createNote(note) {
    return db('notes')
        .insert(note)
        .into('notes');
};

function updateNote(id, changes) {
    return db('notes')
      .where({ id })
      .update(changes);
};

function findNoteById(id) {
    return db('notes')
      .where({ id })
      .first();
};

function removeNote(id) {
    return db('notes')
      .where({ id })
      .del();
};