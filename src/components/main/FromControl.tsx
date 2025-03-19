import { useState } from "react";
import { useTodos } from "../../context/TodosContext";

function FromControl() {
    const [inputValue, setInputValue] = useState("");
    const { addTodos } = useTodos();
    const addTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        addTodos(inputValue);
        setInputValue("");
    };

    return (
        <div className="bg-white w-full h-[6.4rem] flex justify-stretch items-center p-[2.4rem] gap-[2.4rem] rounded-[1rem] mb-[2.4rem] dark:bg-[hsl(235,24%,19%)]">
            <form onSubmit={addTodo} className="w-full">
                <input
                    type="text"
                    className="border-none outline-none w-full font-[500] dark:bg-[hsl(235,24%,19%)] font-sans text-[1.8rem]"
                    value={inputValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                    id="todoInput"
                    placeholder="Create a new todo"
                />
            </form>
        </div>
    );
}

export default FromControl;
