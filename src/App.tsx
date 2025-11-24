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
      <div className="desktop:w-[1280px] short:max-w-[1210px] min-[1270px]:px-6 mobile:px-6">
        <Header />
        <Hero />
      </div>{' '}
      <div className="mobile:px-6 tablet:px-10">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
