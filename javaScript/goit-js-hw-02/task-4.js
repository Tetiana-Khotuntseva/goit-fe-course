"use scrict";
function formatString(string){
    const stringLength = string.length;
    if (stringLength < 40) {
      return(string);
    } else {
      const newString = string.slice(0,40);
      const addText = ['...'];
      const newText = newString.concat(addText);
      return (newText);
    }
  };
  
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  
