import Layout from "./components/layout/Layout";
import { TodosProvider } from "./context/TodosContext";

function App() {
    return (
        <TodosProvider>
            <Layout />
        </TodosProvider>
    );
}

export default App;
