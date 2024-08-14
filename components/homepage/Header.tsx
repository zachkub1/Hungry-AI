'use client';

const Header = () => {
  return (
    <>
      <header className="bg-green-500 shadow-md p-4 mb-8 rounded-lg">
        <nav className="flex justify-between items-center">
          <div className="logo">
            <h1 className="text-white text-lg sm:text-xl">I&aposm Hungry AI</h1>
          </div>
        </nav>
      </header>
      <section className="hero flex flex-wrap items-center justify-between bg-lime-50 p-6 md:p-10 rounded-lg">
        <div className="hero-content flex-1 max-w-full md:max-w-md">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Unleash the Culinary Magic of AI</h2>
          <p className="text-black mt-4 text-sm sm:text-base md:text-lg">
            At I&aposm Hungry AI, we believe that cooking should be a delightful adventure, not a daunting task. Our state-of-the-art AI recipe generator is here to transform your kitchen experience, bringing creativity, ease, and joy to every meal you prepare.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4">
            <a href="/sign-in" className="btn bg-green-700 text-white py-2 px-4 rounded text-center mt-2 sm:mt-0">LOGIN</a>
            <a href="/sign-up" className="btn bg-green-700 text-white py-2 px-4 rounded text-center mt-2 sm:mt-0">SIGN UP</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
