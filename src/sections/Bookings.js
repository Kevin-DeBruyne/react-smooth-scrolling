import { useNav } from "../hooks/useNav"
import Card from "react-bootstrap/Card";
const Bookings = () => {
  const bookingRef = useNav("Bookings")

  return (
    <section ref={bookingRef} id="bookingsSection">
      
      <h2>contact us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio
        dolorum exercitationem, harum repellat explicabo quis error excepturi
        porro soluta.
      </p>
    </section>
  );
}

export default Bookings