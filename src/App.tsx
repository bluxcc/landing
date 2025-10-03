import Footer from './containers/Footer';
import Header from './containers/Header';
import Main from './containers/Main';
import Hero from './containers/Hero';

function App() {
  return (
    <div
      className="flex font-manrope w-full flex-col justify-between items-center !bg-white font-medium
    text-primary pt-[17px] tablet:px-10 tablet:pt-8 mobile:px-6"
    >
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
