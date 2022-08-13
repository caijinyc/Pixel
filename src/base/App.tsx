import { Field, useForm } from "@atomic-form/react";
import { Layout } from "../components/layout";

function App() {
  const form = useForm<string>({
    initialValue: "",
  });

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
