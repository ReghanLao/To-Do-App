import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from './PageTitle';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <PageTitle title="Todo List" />
      <ToastProvider>
        <TodoList />
      </ToastProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
