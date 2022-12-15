import mongoose from "mongoose";

const storeSchema = mongoose.Schema({
    storeName: {
        type: String,
        required: true
    },
    storePhone: {
        type: String,
        required: true
    },
    storeMail: {
        type: String,
        required: true
    },
    storeAddress: {
        type: String,
        required: true
    },
    storeDescription: {
        type: String,
        required: true
    },
    storeWorkingHour: {
        type: String,
        required: true
    },
    storeWebsite: {
        type: String,
        required: true
    },
})

const storeModel = mongoose.model('store', storeSchema)

export default storeModel