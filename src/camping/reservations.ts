import { Campground } from "./campground";
import { Campsite } from "./campsite";


export function makeReservation(campGround: Campground, campSite: Campsite, startDate: Date, endDate: Date): Reservation {
  return new Reservation(campGround, campSite, startDate, endDate);
}

export class Reservation {
  constructor(public campGround: Campground, public campSite: Campsite, public startDate: Date, public endDate: Date) {}
}