import "./App.css";
import FormSingUp from "./components/FormSingUp";
import { Container } from "@mui/material";

function App() {
    return (
        <Container
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
            }}
            component='main'
        >
            <FormSingUp />
        </Container>
    );
}

export default App;
