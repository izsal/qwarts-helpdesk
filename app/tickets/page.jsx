import React from "react";
import TicketList from "./TicketList";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Ticket List</h2>
          <p>
            <small>Currently opent tickets.</small>
          </p>
        </div>
      </nav>

      <TicketList />
    </main>
  );
}
