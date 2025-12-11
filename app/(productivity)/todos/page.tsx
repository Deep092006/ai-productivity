"use client";

import { useEffect } from "react";
import { getAllUserTodos } from "@/features/todo/actions";
import TodoPage from "@/features/todo/components/list/TodoView";
import { useTodo } from "@/features/todo/store";
import { getuser } from "@/lib/actions/getuser";

export default function DashboardTodosPage() {
  // 🗂 Global todos store
  const { todos, setTodos } = useTodo();

  // 🔄 Fetch todos on mount
  useEffect(() => {
    const fetchTodos = async () => {
      if (todos.length > 0) return; // ✅ Already cached, skip fetch

      // 👤 Get user ID
      const user_id = await getuser();
      if (!user_id) return;

      // 📥 Fetch all todos
      const allTodos = await getAllUserTodos(user_id);
      if (allTodos) setTodos(allTodos);
    };

    fetchTodos();
  }, [todos.length, setTodos]);

  return (
    // 📋 Render todo list
    <TodoPage allTodo={todos} />
  );
}
