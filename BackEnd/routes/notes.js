const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');



// route1 fetch all notes using get ./api/auth/fetchallnotes LOGIN REQUIRED

router.get("/fetchallnotes", fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });

        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})

// route1 ADD notes using get ./api/auth/addnote LOGIN REQUIRED

router.post("/addnote", fetchuser, [

    body('title', 'enter a valid title').isLength({ min: 3 }),
    body('description', 'Description Adds At least 5 character').isLength({ min: 5 }),

], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        });

        const savednotes = await note.save();

        res.json(savednotes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");

    }

})

// route1 UPATE notes using put ./api/auth/deletenote LOGIN REQUIRED

router.put("/updatenote/:id", fetchuser, [

    body('title', 'enter a valid title').isLength({ min: 3 }),
    body('description', 'Description Adds At least 5 character').isLength({ min: 5 }),

], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const newNote ={};
        if(title){
            newNote.title=title;
        }
        if(description){
            newNote.description=description;
        }
        if(tag){
            newNote.tag=tag;
        }

        // find the notes
        let note=await Note.findById(req.param.id);
        if(!note){return res.status(404).send("Not Found!")}
        if(note.user.toString()!==req.user.id){return res.status(401).send("Not Allowed")}
        
        note=await Note.findByIdAndUpdate(req.param.id,{$set:newNote},{new:true});
        res.json(note);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");

    }

})
// route1 Delete notes using delete ./api/auth/updatenote LOGIN REQUIRED

router.put("/deletenote/:id", fetchuser, async (req, res) => {
    try {
        
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
       

        // find the notes
        let note=await Note.findById(req.param.id);
        if(!note){return res.status(404).send("Not Found!")}
        if(note.user.toString()!==req.user.id){return res.status(401).send("Not Allowed")}
        
        note=await Note.findByIdAndDelete(req.param.id);
        res.json({Sucess:"Success Note has been deleted",note:note});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");

    }

})

module.exports = router;