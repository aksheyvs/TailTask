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
                <input
                    type="checkbox"
                    className="flex w-[2.4rem] h-[2.4rem] justify-center items-center cursor-pointer"
                    checked={todo.completed}
                    onChange={() => updateTodo(todo.key)}
                    id={todo.key}
                />
            </div>
        );

        const todoTask =
            todo.completed === false ? (
                <p className="font-sans font-[500] text-[1.8rem]">{todo.name}</p>
            ) : (
                <p className="font-sans font-[500] text-[1.8rem] line-through text-[hsl(233,11%,84%)] dark:text-[hsl(233,14%,35%)]">
                    {todo.name}
                </p>
            );

        const todoLi = (
            <li
                key={todo.key}
                className="flex flex-row h-[6.4rem] justify-start items-center pl-[2.4rem] pr-[2.4rem] gap-[2.4rem] border-b-[0.1rem] border-b-[hsl(236,33%,92%)] last:border-b-0 dark:border-b-[hsl(237,14%,26%)] dark:last:border-b-[hsl(237,14%,26%)]"
            >
                {checkbox}
                {todoTask}
            </li>
        );

        return todoLi;
    });

    const defaultTodo = (
        <li className="flex flex-row h-[6.4rem] justify-start items-center pl-[2.4rem] pr-[2.4rem] font-sans font-[500] text-[1.8rem]">
            There's no task
        </li>
    );

    const todosCount = currentTodos.length;

    const allPage = () => setPage("all");
    const activePage = () => setPage("active");
    const completedPage = () => setPage("completed");

    return (
        <section className="bg-white rounded-[1rem] mb-[4.8rem] shadow-[-1px_5px_20px_10px_rgba(157,162,235,0.3)] dark:bg-[hsl(235,24%,19%)] dark:shadow-[-1px_5px_20px_10px_rgba(37,39,60,0.2)]">
            <ul>{todoLists.length === 0 ? defaultTodo : todoLists}</ul>
            <div className="flex justify-between items-center p-[2.4rem] border-t-[0.1rem] border-t-[hsl(236,33%,92%)] dark:border-t-[hsl(237,14%,26%)]">
                <div className="font-sans text-[1.8rem] font-[500]">{todosCount} items Left</div>
                <div className="flex gap-[1rem]">
                    <div className="flex gap-[1rem]">
                        <TodoButton
                            onClick={allPage}
                            className={
                                page === "all"
                                    ? "cursor-pointer font-sans text-[1.8rem] font-[700] text-[hsl(236,9%,61%)] dark:text-[hsl(192,100%,67%)]"
                                    : "cursor-pointer font-sans font-[500] text-[1.8rem] text-[hsl(236,9%,61%)]"
                            }
                        >
                            All
                        </TodoButton>
                        <TodoButton
                            onClick={activePage}
                            className={
                                page === "active"
                                    ? "cursor-pointer font-sans text-[1.8rem] font-[700] text-[hsl(236,9%,61%)] dark:text-[hsl(192,100%,67%)]"
                                    : "cursor-pointer font-sans font-[500] text-[1.8rem] text-[hsl(236,9%,61%)]"
                            }
                        >
                            Active
                        </TodoButton>
                        <TodoButton
                            onClick={completedPage}
                            className={
                                page === "completed"
                                    ? "cursor-pointer font-sans text-[1.8rem] font-[700] text-[hsl(236,9%,61%)] dark:text-[hsl(192,100%,67%)]"
                                    : "cursor-pointer font-sans font-[500] text-[1.8rem] text-[hsl(236,9%,61%)]"
                            }
                        >
                            Completed
                        </TodoButton>
                    </div>
                </div>
                <div>
                    <TodoButton onClick={clearCompleted} className="font-sans text-[1.8rem] font-[500]">
                        Clear Completed
                    </TodoButton>
                </div>
            </div>
        </section>
    );
}

export default TodoListSection;
