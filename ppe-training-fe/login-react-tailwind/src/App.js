// import logo from './logo.svg';
// import './App.css';
// import './assets/css/dist/tailwind.css';
import './assets/css/dist/tailwind.css';

function App() {
  return (
    <div className="bg-gray-200 flex p-10 h-screen w-screen overflow-hidden">
      {/* <button className="btn">PPE</button> */}
      <section className="">
      <section className="bg-white max-w-sm	rounded-lg shadow-md py-8 px-5">
        <h1 className="text-2xl font-bold w-screen">Login</h1>
        <p className="text-gray-400">
          Doesn't have an account yet?
          <a className="text-indigo-700 underline ml-1">Sign Up</a>
        </p>
        <div className="mt-4">
          <label className="block text-grey-darker text-sm mb-1" for="username">
            Email Address
          </label>
          <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight " 
            id="username" 
            type="text" 
            placeholder="you@example.com" />
        </div>
        <div className="mt-4">
          <label className="block text-grey-darker text-sm mb-1 flex justify-between" for="username">
            Password
            <a className="text-indigo-700 underline ml-1">Forgot password?</a>
          </label>
          <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight " 
            id="username" 
            type="text" 
            placeholder="Enter 6 character or more" />
        </div>
        <div className="mt-4 text-gray-500">
          <input type="checkbox"/>
          <label className="ml-2">Remember me</label>
        </div>
        <button className="mt-4 btn font-bold w-full">LOGIN</button>
        <div className="h-px bg-gray-200 mt-8 relative">
          <span className="absolute absolute-x absolute-y bg-white px-3 mt-px text-sm text-gray-400">or login with</span>
        </div>
        <div className="flex space-x-3 mt-5">
          <button className="flex item-center px-4 py-2 rounded font-bold w-full text-red-600 border border-red-600">
            <img className="w-5 mr-4" src=".\assets\images\google-icon.png" />
            Google
          </button>
          <button className="flex item-center px-4 py-2 rounded font-bold w-full text-blue-600 border border-blue-600">
            <img className="w-7 mr-2" src=".\assets\images\facebook-icon1.png" />
            Facebook
          </button>
        </div>

      </section>
      <section className=""></section>
      </section>
      <section>
        <img className="max-w-lg ml-20 mt-20" src=".\assets\images\bg-login\undraw_book_lover_mkck-1.png" />
      </section>
    </div>
  );
}

export default App;
