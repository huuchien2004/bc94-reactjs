import { useState } from "react";
export default function ExampleLogin() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  };
  const handleLogout = () => {
    setIsLogin(false);
  };

  const renderLogin = () => {
    return (
      <div>
        <h1>Vui long dang nhap</h1>
        <button
          type="button"
          className="text-white bg-success box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    );
  };

  const renderLogout = () => {
    return (
      <div>
        <h1>Hello User</h1>
        <button
          type="button"
          className="text-white bg-danger box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    );
  };

  return (
    <div>
      <h1>ExampleLogin</h1>
      {isLogin ? renderLogout() : renderLogin()}
    </div>
  );
}
