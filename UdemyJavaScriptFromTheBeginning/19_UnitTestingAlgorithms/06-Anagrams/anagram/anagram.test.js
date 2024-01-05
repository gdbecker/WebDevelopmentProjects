const anagram = require('./anagram');

describe('Anagram', () => {

  it('should be a function', ()=> {
    expect(typeof anagram).toEqual('function');
  });

  it('should return a boolean', ()=> {
    expect(typeof anagram('wow', 'woo')).toEqual('boolean');
  });

  it('should return true if anagram', ()=> {
    expect(anagram('ram', 'arm')).toBeTruthy();
    expect(anagram('cinema', 'iceman')).toBeTruthy();
    expect(anagram('cat', 'tac')).toBeTruthy();
  });

  it('should return false if not anagram', ()=> {
    expect(anagram('hello', 'twirl')).toBeFalsy();
    expect(anagram('cinema', 'ice')).toBeFalsy();
    expect(anagram('dog', 'lost')).toBeFalsy();
  });
  
})