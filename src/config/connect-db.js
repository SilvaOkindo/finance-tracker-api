import mongoose from "mongoose"

export const connectDB = () => {
    mongoose.connect("mongodb://localhost/financial-tracker").then(() => {
        console.log("DB connected...")
    }).catch((error) => {
        console.log(error)
    })
}