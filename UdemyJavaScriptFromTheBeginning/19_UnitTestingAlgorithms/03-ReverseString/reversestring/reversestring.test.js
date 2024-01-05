const reverseString = require('./reversestring');

describe('Reverse String', () => {
  
  it('should be a function', () => {
    expect(typeof reverseString).toBe('function');
  });

  it('should return', () => {
    expect(typeof reverseString('hello')).toBe('string');
  });

  it('should return the reversed string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('wow')).toBe('wow');
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });
  
})