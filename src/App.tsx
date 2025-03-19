import { Layout } from "./components/layout/Layout";
import { TodosProvider } from "./context/TodosContext";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/layout/Header";
import MainComponents from "./components/MainComponents";

function App() {
    return (
        <TodosProvider>
            <ThemeProvider>
                <Layout>
                    <Header />
                    <MainComponents />
                </Layout>
            </ThemeProvider>
        </TodosProvider>
    );
}

export default App;
