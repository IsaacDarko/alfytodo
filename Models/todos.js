import { Schema, model, models } from 'mongoose';

const TodoSchema = new Schema({
    item: {
        type: String,
        required: [true, 'An item to do is needed']
    },
    done: {
        type: Boolean,
        default: false
    },
    time: { 
        type: Date, 
        default: Date.now 
    }   
    
});

const Todo = models.Todo || model("Todo", TodoSchema);

export default Todo;