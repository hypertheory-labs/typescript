import  grounds, {  Reservation, Campsite, makeReservation } from './camping';
describe('Barrels', () => {
    it('Making a Reservation', () => {
        const reservation = makeReservation(grounds.chippewa, new Campsite(), new Date(), new Date());
        expect(reservation).toBeInstanceOf(Reservation);
    })
});