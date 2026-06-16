import Card from "./components/Card";

function App() {
  let myObject1 = {
    name: "Tripti",
    age: 24,
  }
  let myObject2 = {
    name: "Mayank",
    age: 24,
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800 flex items-center justify-center p-6">
      <Card Name={myObject1.name} Age={myObject1.age} />
      <Card Name={myObject2.name} Age={myObject2.age} />
    </div>
  );
}

export default App;