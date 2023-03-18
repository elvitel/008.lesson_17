const elements = ['5', 'a', 2, 'k', true, 'l', 8, 5, 'k', 'm', 6, 4, 'o', 9, 7, 'm', 'g', NaN, Infinity];  
function average(elements) {    
   let elementsNumber = elements.filter(elem => typeof elem === 'number' && isFinite(elem));
   let elementsNumberSum = elementsNumber.reduce((sum, elem) => sum += elem);
   return elementsNumberSum / elementsNumber.length;     
}
console.log(average(elements));



let x = prompt('Введіть перше число:');                 
let zeroInfo = 'Введене некоректне значення або значення не введене. Спробуйте ще раз.';                                       
if (x === '' || x === null || isNaN(x)) {
   alert(zeroInfo);
} else {
   let y = prompt('Введіть друге число:');
   if (y === '' || y === null || isNaN(y)) {
      alert(zeroInfo);
   } else {
      let znak = prompt('Введіть знак математичної дії, яку необхідно виконати (а саме, один із знаків: + , -, *, /, %, ^ (ступінь)):');
      let doMath = function(x, znak, y) {    
             switch (znak) {
                 case '+': return Number(x) + Number(y); 
                 case '-': return Number(x) - Number(y); 
                 case '*': return Number(x) * Number(y);
                 case '/': 
                     if (y == 0) {
                        return zeroInfo;
                     } else {
                        return Number(x) / Number(y); 
                     } 
                 case '%': 
                     if (y == 0) {
                         return zeroInfo; 
                     } else {
                         return Number(x) % Number(y);
                     }
                 case '^': return Math.pow(Number(x), Number(y));
                 default: return zeroInfo;
             }
      };
      alert(doMath(x, znak, y));
   }
}



let arrayMain = +prompt('Введіть цифру - кількість масивів:');     
if (arrayMain > 0 && Number.isInteger(arrayMain)) {
   let arrayTwoDimensional = function() {
      let array = [];
      for (let i = 0; i < arrayMain; i++) {                                                 
         let arrayValue = prompt('Введіть через кому значення масиву:');
         if (arrayValue === null) {
            alert('Операція скасована.');
         } else {
            array.push(arrayValue.split(','));        
         }                          
      }
      return array;
   };
   console.log(arrayTwoDimensional());
} else {
   alert('Введене некоректне значення або значення не введене. Спробуйте ще раз.');
}



let phrase = prompt('Введіть фразу:');                                        
if (phrase === null || phrase === '') {
   alert('Значення не введене або операція скасована.');
} else {
   let phraseArray = phrase.split('');
   let symbol = prompt('Введіть символи, які необхідно видалити з фрази:');
   if (symbol === null) {
      alert('Операція скасована.');
   } else {
      let symbolArray = symbol.split('');
      let removeSymbols = function(phrase, symbolArray) {   
         phraseArray = phraseArray.filter(elem => !symbolArray.includes(elem));
         phrase = phraseArray.join(' ');
         return phrase;
      };
      alert(removeSymbols(phrase, symbolArray));
   }    
}







