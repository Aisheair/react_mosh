import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";



function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenxes, setExpenxes] = useState([
    { id: 1, description: "aaa", amount: 50, category: "Utilities" },
    { id: 2, description: "bbb", amount: 500, category: "Utilities" },
    { id: 3, description: "ddd", amount: 100, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenxes.filter((e) => e.category === selectedCategory)
    : expenxes;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenxes(expenxes.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
