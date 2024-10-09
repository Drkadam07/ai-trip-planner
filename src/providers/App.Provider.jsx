import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "@/lib/QueryClient";
import { AuthProvider } from "../components/providers/Auth.Provider";

function AppProvider() {
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </AuthProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>;
}

export default AppProvider;
