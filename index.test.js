const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handle Midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  })

  it('Handle O`clock', () => {
    const timeInWords = convertTimeToWords('1:00');
    expect(timeInWords).toBe("one o'clock");
  })

  it('Handle Past Hour', () => {
    const timeInWords = convertTimeToWords('8:12');
    expect(timeInWords).toBe('eight past twelve');
  });

  // it('Handles 30 - 8:30', () => {
  //   const timeInWords = convertTimeToWords('8:30');
  //   expect(timeInWords).toBe('half past eight');
  // });



  // it('Handles times after 30 mins - 2:45', () => {
  //   const timeInWords = convertTimeToWords('2:45');
  //   expect(timeInWords).toBe('quarter to three');
  // });
});
