import { connectToDB } from '../../../utils/database';
import Todo from '../../../Models/todos';

export const GET = async (request) => {
    console.log("GET transactions route was hit");
    
    try{
        await connectToDB();
        const todos = await Todo.find({}).sort({_id: -1});
        console.log(todos)
        return new Response(JSON.stringify(todos), {status: 200});    
    }catch(error){
        return new Response("Failed to fetch all todos", {status: 500})
    }
} 