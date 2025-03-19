import { ReactNode } from "react";

const TodoButton = ({
    onClick,
    children,
    className,
}: {
    onClick: () => void;
    children: ReactNode;
    className: string;
}) => {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export default TodoButton;
