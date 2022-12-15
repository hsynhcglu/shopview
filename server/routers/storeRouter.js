import express from 'express'
import mongoose from 'mongoose'
import Store from '../db/storeModel.js'

const router = express.Router()

// Create a new store

router.post('/storesettings', async (req,res) => {
    try{
        const store = req.body;

        const createdStore = await Store.create(store);

        res.status(201).json(createdStore)

    }catch(error) {
        console.log(error.message)
        res.json({message: 'Create store failed'})
    }
})

export default router