import mongoose from "mongoose"
import { Category } from "../models/category.js";
import { connectDB } from "../config/connect-db.js";

const categories = [
    { userId: "6724ec68786b17306833d11e", name: 'Food', description: 'Expenses on food and dining'},
    {userId: "6724ec68786b17306833d11e", name: 'Transportation', description: 'Expenses on travel and transportation' },
    { userId: "6724ec68786b17306833d11e",name: 'Utilities', description: 'Monthly utilities such as electricity and water' },
    { userId: "6724ec68786b17306833d11e",name: 'Entertainment', description: 'Expenses for recreation and entertainment' },
    { userId: "6724ec68786b17306833d11e", name: 'Healthcare', description: 'Medical and healthcare expenses' }
];


const seedCategory = async () => {
    try {
        connectDB()
        await Category.deleteMany()

        // add categories to database

        await Category.insertMany(categories)
        console.log("Categories added.")

        // close db connection
        await mongoose.connection.close()


    }catch(error) {
        console.log(error)
    }
}

seedCategory()