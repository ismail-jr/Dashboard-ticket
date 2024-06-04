import React, { Suspense } from "react";
import TicketList from "./ticketList";
import Loading from "../loading";

const Ticket = () => {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>currently open tickets.</small>
          </p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
};

export default Ticket;
