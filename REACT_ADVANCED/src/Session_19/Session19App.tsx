import { Provider } from "react-redux";
import { store } from "./store";
import LoginForm from "./LoginForm";

const Session19App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-slate-950 text-white p-8 flex flex-col items-center gap-8 font-sans">
        <h1 className="text-3xl font-bold tracking-tight bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Playlist Manager
        </h1>
        <LoginForm />
      </div>
    </Provider>
  );
};

export default Session19App;
