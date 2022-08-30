import { Routes, Route } from "react-router-dom";
import Home from './home';
import Policy from './Policy';
import Service from './Service';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return ( 
    // 548256646668-n546allgb8l0brg4b30uffjj1cibrnjf.apps.googleusercontent.com
    <GoogleOAuthProvider clientId="897716234453-c1o770u1l7jfpnjcc7j2ot879h079o9a.apps.googleusercontent.com">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/service" element={<Service />} />

      </Routes>
  </GoogleOAuthProvider>
  );
}

export default App;
