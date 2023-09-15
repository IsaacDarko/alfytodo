import { connectToDB } from '@/utils/database';
import Todo from '@/Models/todos';

export const POST = async (req) => {
    console.log("todo route was hit");
    const{ item, status, time } = await req.json();
    
    try{
        await connectToDB();
        const newTodo = new Todo({
            item,
            status,
            time
        });
        await newTodo.save();
        console.log("the task was save to db");
        return new Response(JSON.stringify(newTodo), {status: 201})
    }catch(err){
        return new Response("failed to create the new task", { status:500 })
    }

}