"use client";

import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Cari Penyedia PaaS Free", completed: true },
    { id: 2, text: "Buat Aplikasi Next.js", completed: true },
    { id: 3, text: "Deploy ke Vercel", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: newTask, completed: false },
    ]);
    setNewTask("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white font-sans selection:bg-blue-500 selection:text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>

      <main className="relative max-w-4xl mx-auto px-6 py-20">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            Tugas 12 &mdash; Cloud Computing
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300 mb-6 drop-shadow-2xl">
            PaaS Assignment
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Aplikasi sederhana menggunakan Next.js sebagai demonstrasi penggunaan
            layanan Platform as a Service (PaaS).
          </p>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Info Card */}
          <div className="group relative rounded-3xl bg-gray-900/50 border border-gray-800 p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </span>
              Project Info
            </h2>
            <div className="space-y-4 text-gray-400">
              <div className="flex justify-between items-center border-b border-gray-800/50 pb-2">
                <span>Framework</span>
                <span className="text-white font-medium">Next.js 15</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-800/50 pb-2">
                <span>Language</span>
                <span className="text-white font-medium">TypeScript</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-800/50 pb-2">
                <span>Styling</span>
                <span className="text-white font-medium">Tailwind CSS</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Deployment</span>
                <span className="text-yellow-400 font-medium">Pending</span>
              </div>
            </div>
          </div>

          {/* Interactive To-Do */}
          <div className="rounded-3xl bg-gray-900/50 border border-gray-800 p-8 flex flex-col h-full shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="p-2 rounded-lg bg-green-500/20 text-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </span>
              Task List
            </h2>

            <form onSubmit={addTask} className="mb-6 relative">
              <input
                type="text"
                placeholder="Add a new task..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder-gray-500 text-sm"
              />
              <button
                type="submit"
                disabled={!newTask.trim()}
                className="absolute right-2 top-2 p-1.5 bg-blue-600 rounded-lg hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
            </form>

            <ul className="space-y-3 flex-1 overflow-y-auto max-h-[300px] custom-scrollbar">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className={`group flex items-center justify-between p-3 rounded-xl border transition-all duration-200 ${task.completed
                      ? "bg-gray-800/30 border-gray-800/50 opacity-60"
                      : "bg-gray-800/80 border-gray-700 hover:border-gray-600"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${task.completed
                          ? "bg-green-500 border-green-500 text-black"
                          : "border-gray-500 hover:border-gray-400"
                        }`}
                    >
                      {task.completed && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </button>
                    <span
                      className={`text-sm ${task.completed ? "line-through text-gray-500" : "text-gray-200"
                        }`}
                    >
                      {task.text}
                    </span>
                  </div>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="opacity-0 group-hover:opacity-100 text-red-400 hover:bg-red-500/10 p-1.5 rounded-lg transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </li>
              ))}
              {tasks.length === 0 && (
                <div className="text-center py-8 text-gray-500 text-sm">
                  No tasks yet. Add one above!
                </div>
              )}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Telkom University. Cloud Computing Assignment.</p>
        </footer>
      </main>
    </div>
  );
}
