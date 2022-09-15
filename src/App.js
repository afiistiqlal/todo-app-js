import Tambah from "./components/ButtonTambah";
import Header from "./components/Header";
import EmptyState from "./components/EmptyState";

function App() {
  return (
    <div className="text-2xl font-bold">
      <Header />
      <div className="md:w-3/4 mx-auto">
        <div className="relative my-8">
          <div className="absolute right-0 top-0">
            <Tambah data-cy="activity-add-button" />
          </div>
          <h1 className="text-4xl">Activity</h1>
          <EmptyState />
        </div>
      </div>
    </div>
  );
}

export default App;
