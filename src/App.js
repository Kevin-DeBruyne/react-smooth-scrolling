import Header from "./components/Header";
import Bookings from "./sections/Bookings";
import Destinations from "./sections/Destinations";
import Flights from "./sections/Flights";
import Home from "./sections/Home";
import Hotels from "./sections/Hotels";
import NavProvider from './context/NavContext'
import Footer from './sections/Footer'

function App() {
  return (
    <div>
      <NavProvider>
        <Header />
        <Home />
        <Destinations />
        <Hotels />
        <Flights />
        <Bookings />
      </NavProvider>
      <Footer />
    </div>
  );
}

export default App;
