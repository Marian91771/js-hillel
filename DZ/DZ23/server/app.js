import express from 'express';
import cors from 'cors';
import {data} from './todoList.js';

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (request, response) => {
    response.send(JSON.stringify(data));
});

app.post('/', (request, response) => {
    data.push(request.body)
    response.send(request.body);
    response.status(200);
});

app.put('/:id', (request, response) => {
    const todoId = parseInt(request.params.id);
    const updateTodo = request.body;
    const index = data.findIndex(todo => todo.id == todoId);

    if(index !== -1){
        data[index] = {...data[index], ...updateTodo};
        response.status(200);
        response.send("updated");
    } else {
        response.status(404);
        response.send("not updated");
    }
});

app.delete('/:id', (request, response) => {
    const todoId = parseInt(request.params.id);
    const index = data.findIndex(todo => todo.id == todoId);

    if(index !== -1){
        data.splice(index, 1);
        response.status(200);
        response.send("deleted");
    } else {
        response.status(404);
        response.send("not deleted");
    }
})


app.listen(PORT);