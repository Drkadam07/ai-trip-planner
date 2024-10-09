import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../components/providers/Auth.Provider";

function AppProvider() {
    <AuthProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </AuthProvider>
}

export default AppProvider;
