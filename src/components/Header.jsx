const Header = () => {
  return (
    <header className="bg-black text-white py-6">
      <div className="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
        <a href="/" className="text-3xl font-bold">Todo アプリ</a>
        <nav className="space-x-5 md:flex items-center">
          <a href="#" className="hover:text-selected-text transition-all duration-300">テストユーザさん</a>
          <a href="#" className="hover:text-selected-text transition-all duration-300">ログアウト</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
