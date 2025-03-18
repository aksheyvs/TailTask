import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

export type Todo = { key: string; name: string; completed: boolean };

type TodosContextType = {
    addTodos: (inputValue: string) => void;
    page: string;
    setPage: Dispatch<SetStateAction<string>>;
    active: Todo[];
    completed: Todo[];
    todoArray: Todo[];
    updateTodo: (key: string) => void;
    clearCompleted: () => void;
};

const TodosContext = createContext<TodosContextType | undefined>(undefined);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
    const [todoArray, setTodoArray] = useLocalStorage<Todo[]>("todoArray1", []);
    const [page, setPage] = useState("all");

    const addTodos = (inputValue: string) => {
        const newTodo = { key: uuidv4(), name: inputValue, completed: false };
        setTodoArray((prevTodos) => {
            const updatedTodos = [...prevTodos, newTodo];
            return updatedTodos;
        });
    };

    const active = todoArray.filter((todo) => todo.completed === false);
    const completed = todoArray.filter((todo) => todo.completed === true);

    const updateTodo = (key: string) => {
        setTodoArray((todos) =>
            todos.map((todo) => {
                if (todo.key === key) return { ...todo, completed: !todo.completed };
                return todo;
            })
        );
    };

    const clearCompleted = () => {
        setTodoArray((todos) => todos.filter((todo) => todo.completed === false));
    };

    return (
        <TodosContext.Provider
            value={{ addTodos, page, setPage, active, completed, todoArray, updateTodo, clearCompleted }}
        >
            {children}
        </TodosContext.Provider>
    );
};

export const useTodos = () => {
    const context = useContext(TodosContext);
    if (!context) throw new Error("useTodos must be used within a TodosProvider");

    return context;
};
