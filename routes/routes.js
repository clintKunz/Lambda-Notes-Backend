const express = require('express');

const models = require('../models/models.js');

const router = express.Router();

//Get list of notes
router.get('/notes', (req, res) => {
    models
        .getNotes()
            .then(notes => {
                res.status(200).json(notes);
            })
            .catch(err => res.status(500).json(err));
});

//Get one specific note
router.get('/note/:id', (req, res) => {
    const { id } = req.params; 
    console.log('id', id);
    
    models
        .findNoteById(id)
            .then(note => {
                res.status(200).json(note);
            })
            .catch(err => res.status(500).json(err));
});

//Create a note with a title and content
router.post('/create', (req, res) => {
    const { title, content } = req.body;
    const note = { title, content };
    console.log(note);

    if(!title && !content) {
        res.status(406).json({ error: 'req body not acceptable' });
    } else {
        models
            .createNote(note)
                .then(ids => {
                    res.status(201).json(ids[0]);
                })
                .catch(err => res.status(500).json({ error: 'createNote failed', err }));
    }
});

//Update a note 
router.put('/note/:id', (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body; 
    const edited = 1;
    const changes = { title, content, edited };
    
    models 
        .updateNote(id, changes)
            .then(note => {
                res.status(200).json(note);
            })
            .catch(err => res.status(500).json(err));
});

//Delete a specific note
router.delete('/note/:id', (req, res) => {
    const { id } = req.params;

    models 
        .removeNote(id)
        .then(count => {
            if (!count || count < 1) {
              res.status(404).json({ message: 'No records found to delete' });
            } else {
              res.status(200).json({ recordsDeleted: count });
            }
          })
          .catch(err => res.status(500).json(err));
});

module.exports = router; 