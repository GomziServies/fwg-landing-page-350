import React from "react";
import Routes from "./Routes";
import { Toaster } from "react-hot-toast";
import WhatsAppButton from "components/ui/WhatsAppButton";

function App() {
    return (
        <>
            <Routes />
            <Toaster />
            <WhatsAppButton />
        </>
    );
}

export default App;
