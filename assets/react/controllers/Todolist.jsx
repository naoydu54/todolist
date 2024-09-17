import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [newTodoTitle, setNewTodoTitle] = useState('');

    // Charger les tâches depuis l'API
    useEffect(() => {
        axios.get('/api/todo_lists')
            .then(response => {
                setTodos(response.data['hydra:member']);
            })
            .catch(error => {
                console.error("There was an error fetching the todos!", error);
            });
    }, []);

    // Créer une nouvelle tâche
    const addTodo = () => {
        const newTodo = {
            title: newTodoTitle,
            completed: false
        };

        axios.post('/api/todo_lists', newTodo, {
            headers: {
                'Content-Type': 'application/ld+json'
            }
        })
            .then(response => {
                setTodos([...todos, response.data]);
                setNewTodoTitle('');
            })
            .catch(error => {
                console.error("There was an error adding the todo!", error);
            });
    };

    // Mettre à jour le statut de completion
    const toggleCompleted = (id, completed) => {
        axios.patch(`/api/todo_lists/${id}`, { completed: !completed }, {
            headers: {
                'Content-Type': 'application/merge-patch+json'
            }
        })
            .then(response => {
                setTodos(todos.map(todo =>
                    todo.id === id ? { ...todo, completed: !completed } : todo
                ));
            })
            .catch(error => {
                console.error("There was an error updating the todo!", error);
            });
    };

    // Supprimer une tâche
    const deleteTodo = (id) => {
        axios.delete(`/api/todo_lists/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id));
            })
            .catch(error => {
                console.error("There was an error deleting the todo!", error);
            });
    };

    return (
        <div className="max-w-3xl mx-auto mt-12 p-8 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">My To-Do List</h1>
            <div className="flex items-center mb-6">
                <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                    placeholder="Add a new task"
                    value={newTodoTitle}
                    onChange={(e) => setNewTodoTitle(e.target.value)}
                />
                <button
                    onClick={addTodo}
                    className="ml-4 px-6 py-3 bg-indigo-500 text-white font-bold rounded-lg shadow-md hover:bg-indigo-600 transition-all duration-200"
                >
                    Add
                </button>
            </div>
            <ul className="space-y-4">
                {todos.map(todo => (
                    <li key={todo.id} className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                        <div className="flex items-center space-x-4">
                            <span className={`text-xl font-medium ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                                {todo.title}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${todo.completed ? 'bg-green-200 text-green-700' : 'bg-yellow-200 text-yellow-700'}`}>
                                {todo.completed ? 'Completed' : 'Not Completed'}
                            </span>
                        </div>
                        <div className="flex space-x-4">
                            <button
                                onClick={() => toggleCompleted(todo.id, todo.completed)}
                                className={`px-4 py-2 rounded-lg text-white font-semibold ${todo.completed ? 'bg-green-500 hover:bg-green-600' : 'bg-yellow-500 hover:bg-yellow-600'} transition-all duration-200`}
                            >
                                {todo.completed ? 'Undo' : 'Complete'}
                            </button>
                            <button
                                onClick={() => deleteTodo(todo.id)}
                                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all duration-200"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
