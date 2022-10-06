describe('Being Explicit', () => {
    it('Any Data Type is Bad And You Should Feel Bad For Using It', () => {
        let thing: any = 12;

        expect(thing % 2 === 0).toBe(true);

        thing = 'Bird!';

        expect(thing.length).toBe(5);

        thing = 12;

        expect(thing.length).toBeUndefined();

        thing = 'Bird Again!';

        expect(thing % 2 === 0).toBe(false);
        expect(thing.toUpperCase()).toBe('BIRD AGAIN!');

        thing = 13;
        expect(() => thing.toUpperCase()).toThrow();

    });
    it('If you do not know, then it is unknown', () => {
        let thing: unknown = 12;

        // Next line Type Errors
        // expect(thing % 2 === 0).toBe(true);
        if (typeof thing === 'number') {
            expect(thing % 2 === 0).toBe(true);
        }

        thing = 'Bird!';

        // Next Line Type Errors
        // expect(thing.length).toBe(5);

        if (typeof thing === 'string') {
            expect(thing.length).toBe(5);
        }

        // This works too - String (capital) is the constructor
        if (thing instanceof String) {
            expect(thing.length).toBe(5);
        }

        class Bird {
            sqwak() {
                return 'CaCaw! CaCaw!';
            }
        }

        thing = new Bird();

        if (thing instanceof Bird) {
            expect(thing.sqwak()).toEqual('CaCaw! CaCaw!');
        }
    });
})