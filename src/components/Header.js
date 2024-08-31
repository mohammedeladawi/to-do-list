import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const todosLen = useSelector((state) => state.todosState.todos).length;
  return (
    <header>
      <h1>
        قائمة المهام <span>({todosLen})</span>
      </h1>
    </header>
  );
};

export default Header;
