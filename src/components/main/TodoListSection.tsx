import { useTodos } from "../../context/TodosContext";
import TodoButton from "../TodoButton";

function TodoListSection() {
    const { page, active, completed, todoArray, updateTodo, setPage, clearCompleted } = useTodos();

    const getCurrentTodos = () => {
        if (page === "active") {
            return active;
        }

        if (page === "completed") {
            return completed;
        }

        return todoArray;
    };

    const currentTodos = getCurrentTodos();

    const todoLists = currentTodos.map((todo) => {
        const checkbox = (
            <div>
                <input type="checkbox" checked={todo.completed} onChange={() => updateTodo(todo.key)} id={todo.key} />
            </div>
        );

        const todoTask = <p>{todo.name}</p>;

        const todoLi = (
            <li key={todo.key}>
                {checkbox}
                {todoTask}
            </li>
        );

        return todoLi;
    });

    const defaultTodo = <li>There's no task</li>;

    const todosCount = currentTodos.length;

    const allPage = () => setPage("all");
    const activePage = () => setPage("active");
    const completedPage = () => setPage("completed");

    return (
        <section className="bg-white rounded-[1rem] mb-[4.8rem] shadow-[-1px_5px_20px_10px_rgba(37,39,60,0.2)]">
            <ul>{todoLists.length === 0 ? defaultTodo : todoLists}</ul>
            <div className="flex justify-between items-center p-[2.4rem] border-t-[0.1rem] border-gray-400">
                <div>{todosCount}items Left</div>
                <div className="flex gap-[1rem]">
                    <div className="flex gap-[1rem]">
                        <TodoButton onClick={allPage}>All</TodoButton>
                        <TodoButton onClick={activePage}>Active</TodoButton>
                        <TodoButton onClick={completedPage}>Completed</TodoButton>
                    </div>
                </div>
                <div>
                    <TodoButton onClick={clearCompleted}>Clear Completed</TodoButton>
                </div>
            </div>
        </section>
    );
}

export default TodoListSection;
