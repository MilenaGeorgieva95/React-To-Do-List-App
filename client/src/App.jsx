import Footer from "./components/Footer";
import NavHeader from "./components/NavHeader";
import TodoContainer from "./components/TodoContainer";
import "./MyApp.css";

function App() {
  return (
    <>
      {/* <!-- Navigation header --> */}
      <NavHeader />

      {/* <!-- Main content --> */}
      <main className="main">
        {/* <!-- Section container --> */}
        <TodoContainer />
      </main>

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}

export default App;
