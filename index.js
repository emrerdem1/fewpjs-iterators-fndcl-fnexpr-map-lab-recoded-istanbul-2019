const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

titleCased = () => {
  return tutorials.map(item => {
    let spaceArr = item.split(' ');
    return spaceArr.map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ');
  })
};
titleCased();

/*titleCased = (array) => {
  return array.map(item => {
    let spaceArr = item.split(' ');
    let mock = spaceArr.forEach(e => e.charAt(0).toUpperCase() + e.slice(1))
    mock.join(' ');
  })
};
titleCased(tutorials);*/

