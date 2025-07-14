import React from "react";
import { categories } from "../../App";

interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory(e.target.value)}
      aria-label="Default select example"
    >
      {categories.map((categories) => (
        <option key={categories} value={categories}>
          {categories}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
