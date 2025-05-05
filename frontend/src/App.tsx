import { Route, Router } from "wouter";
import Layout from "../components/Layout";
import Landing from "../routes/Landing";
import Tienda from "../routes/Tienda";
import { useState } from "react";

export default function App() {
  const [showLayout, setShowLayout] = useState(false);

  return (
    <>
      {!showLayout ? (
        <Landing onFinish={() => setShowLayout(true)} />
      ) : (
        <Layout>
          <Router>
            <Route path="/Tienda" component={Tienda} />
          </Router>
        </Layout>
      )}
    </>
  );
}
