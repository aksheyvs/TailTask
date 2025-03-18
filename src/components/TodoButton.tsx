import { ReactNode } from "react";

const TodoButton = ({ onClick, children }: { onClick: () => void; children: ReactNode }) => {
    return <button onClick={onClick}>{children}</button>;
};

export default TodoButton;
