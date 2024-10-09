import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function AppProvider() {
  <QueryClientProvider client={queryClient}>
    <GlobalProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </GlobalProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>;
}

export default AppProvider;
