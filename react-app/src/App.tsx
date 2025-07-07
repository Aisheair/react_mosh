import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenxes, setExpenxes] = useState([
    { id: 1, description: "aaa", amount: 50, category: "Food" },
    { id: 2, description: "bbb", amount: 500, category: "Housing" },
    { id: 3, description: "ddd", amount: 100, category: "Bills" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenxes}
        onDelete={(id) => setExpenxes(expenxes.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
