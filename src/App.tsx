import Footer from './containers/Footer';
import Header from './containers/Header';
import Main from './containers/Main';
import Hero from './containers/Hero';

function App() {
  return (
    <div
      className="flex font-manrope w-full flex-col justify-between items-center !bg-white font-medium
    text-primary pt-[17px] tablet:pt-8"
    >
      <div className="mobile:px-6 tablet:px-10">
        <Header />
        <Hero />
        <Main />
      </div>

      <Footer />
    </div>
  );
}

export default App;
