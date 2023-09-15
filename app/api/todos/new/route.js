import { connectToDB } from '@utils/database';
import Todo from '../../../models/transactions';

export const POST = async (req) => {
    console.log("trxn route was hit");
    const{ 
            item,
            done,
            time
        } = await req.json();
    
    try{
        await connectToDB();
        const newTodo = new Todo({
            item,
            done,
            time
        });
        await newTodo.save();
        console.log("the task was save to db");
        return new Response(JSON.stringify(newTodo), {status: 201})
    }catch(err){
        return new Response("failed to create the new task", { status:500 })
    }

}