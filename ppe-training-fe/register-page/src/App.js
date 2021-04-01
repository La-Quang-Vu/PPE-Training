// import logo from './logo.svg';
// import './App.css';
import './assets/css/dist/tailwind.css';

function App() {
  return (
    <div className="bg-gray-200 flex p-10">
      <section className="max-w-sm bg-white rounded-lg shadow-md py-10 px-8">
        <h1 className="text-2xl font-bold w-screen">Register</h1>
        <p className="text-gray-400 text-xl mt-5">
          Let's get you on board
        </p>
        <div className="mt-4">
          <label className="block text-grey-darker text-sm mb-1" for="username">
            Full Name
          </label>
          <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight " 
            id="username" 
            type="text" 
            placeholder="Ex: Nguyen Van A" />
        </div>
        <div className="mt-4">
          <label className="block text-grey-darker text-sm mb-1" for="useremail">
            Email Address
          </label>
          <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight " 
            id="useremail" 
            type="text" 
            placeholder="you@example.com" />
        </div>
        <div className="mt-4">
          <label className="block text-grey-darker text-sm mb-1 flex justify-between" for="userpassword">
            Password
          </label>
          <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight " 
            id="userpassword" 
            type="text" 
            placeholder="Enter 6 character or more" />
        </div>
        <button className="mt-6 btn font-bold w-full">REGISTER</button>
        <div className="h-px bg-gray-200 mt-8 relative">
          <span className="absolute absolute-x absolute-y bg-white px-3 mt-px text-sm text-gray-400">or</span>
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
        <p className="text-gray-400 text-center mt-5">
          Already have an account?
          <a className="text-indigo-700 underline ml-1">Sign In</a>
        </p>
      </section>
      <section className="">
      <img className="max-w-lg ml-20 mt-20" src=".\assets\images\bg-login\reading-book.png" />
      
      </section>
    </div>
  );
}

export default App;
