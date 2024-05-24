import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./views/NotFound"
import DashboardLayout from "./layouts/DashboardLayout"
// import AuthLayout from "./layouts/AuthLayout"
import Dashboard from "./views/Dashboard"
import { Hub } from 'aws-amplify/utils';

Hub.listen('auth', ({ payload }) => {
  switch (payload.event) {
    case 'signedIn':
      window.location.reload()
      break;
    case 'signedOut':
      window.location.reload()
      break;
  }
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* <Route element={<AuthLayout />}>
        </Route> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
