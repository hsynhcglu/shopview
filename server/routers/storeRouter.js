import express from 'express'
import mongoose from 'mongoose'
import Store from '../db/storeModel.js'
import User from '../db/userModel.js'

const router = express.Router()

// Create a new store

router.post('/storesettings', async (req,res) => {
    try{
        const store = req.body;
        // if(userId) {
        //     return res.status(400).json({message: 'sdasa'})
        // }

        // const userId = await User.findOne({ email })
        const createdStore = await Store.create(store);

        res.status(201).json(createdStore)

    }catch(error) {
        console.log(error.message)
        res.json({message: 'Create store failed'})
    }
})

export default router