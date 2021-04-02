// import logo from './logo.svg';
// import './App.css';
import './assets/css/dist/tailwind.css';

function App() {
  return (
    <div className="bg-gray-200 flex justify-center lg:justify-center md:justify-start p-10 h-screen w-screen overflow-hidden">
      <section className="">
        <section className="bg-white max-w-sm	rounded-lg shadow-md py-8 px-5">
        <h1 className="text-2xl font-bold w-screen">Forgot Password?</h1>
        <div className="mt-4">
          <label className="block text-grey-darker text-sm mb-1" for="username">
            Email Address
          </label>
          <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight " 
            id="username" 
            type="text" 
            placeholder="Enter valid email" />
        </div>
        <button className="mt-7 btn font-bold w-full">SUBMIT</button>
        <p className="text-gray-400 mt-6">
          Back to
          <a className="text-indigo-700 underline ml-1">Login</a>
        </p>
        </section>
        <section></section>
      </section>
      <section className="hidden md:block">
        <img className="max-w-lg ml-20 mt-0" src=".\assets\images\bg-login\undraw_book_lover_mkck-1.png" />
      </section>
    </div>
  );
}

export default App;
