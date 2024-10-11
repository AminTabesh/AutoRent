import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import PageNotFound from "./pages/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/Login";

function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
