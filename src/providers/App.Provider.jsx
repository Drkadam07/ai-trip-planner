import { BrowserRouter } from "react-router-dom";

function AppProvider({ children }) {
  return(
    <BrowserRouter>{children}</BrowserRouter>
  );
}

export default AppProvider;
