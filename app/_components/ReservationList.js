"use client";

import { useOptimistic } from "react";
import { deleteBookingAction } from "../_lib/actions";
import ReservationCard from "./ReservationCard";

function ReservationList({ bookings }) {
  // ========= USEOPTIMISTIC HOOK ===============
  // MAIN SYNTAX
  // const [optimisticState, addOptimistic] = useOptimistic(passthroughState, updateFn);

  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    },
  );

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteBookingAction(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          onDelete={handleDelete}
          key={booking.id}
        />
      ))}
    </ul>
  );
}

export default ReservationList;

// The useOptimistic hook has two arguments or states:
//#1. Actual or current (initial) state("bookings" in this case): The useOptimistic "bookings" is the VALUE that's gonna be returned in the beginning, while there's no async action running, and also while no server action is pending."
// #2. State update function:
//  This help determine the next optimistic state. Takes in two thing: The current state(curBookings); secondly, the same value passed into the setter function(optimisticDelete)...
/*
(curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    },
*/

// ON THE LEFT HAND SIDE...
// It returns two values that we can immediately destructure:
// #1. The Optimistic state(called here as "optimisticBookings"): Same explanation as #1 Actual state. It's used to replace the initial state, onto which the "map" array method is attached.
// #2. Setter function (called here as "optimisticDelete")
