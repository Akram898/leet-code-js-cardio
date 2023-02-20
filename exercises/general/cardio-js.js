function reverseString(s){
    // const revArr = s.toLowerCase().split('').reverse().join('');
    // console.log(revArr)

    // return s.
    // toLowerCase().
    // split('').
    // reverse().
    // join('');

    let tevSt = '';

    // for(let i = s.length-1 ; i >= 0; i--){
    //     tevSt = tevSt + s[i];
    // }

    for(let i = 0 ; i <= s.length-1; i++){
        tevSt = s[i] + tevSt;
    }

    return tevSt
}

function capitalizeLetter(str){
    // const capStr = str.toLowerCase().split(' ');

    // for(let i = 0; i < capStr.length; i++){
    //     capStr[i] = capStr[i].substring(0, 1).toUpperCase() + capStr[i].substring(1)
    // }

    // return capStr.join(' ')

    return str.toLowerCase().split(' ').map( word => 
      word[0].toUpperCase() + word.substring(1)
    ).join(' ');

    // return str.replace(/\b[a-z]/gi, function(char){
    //     return char.toUpperCase();
    //}
    //)
}

function isPalindrome(str){
    const revStr = str.split('').reverse().join('');
    console.log(revStr)

    return str === revStr
}

function reverseInt(int){
    revInt = int.toString().split('').reverse().join('');

    return parseInt(revInt) * Math.sign(int);
}

function maxCharacter(str){
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach((char) => {
        if(charMap[char]){
            charMap[char] ++
        }else{
            charMap[char] = 1;
        }
    })

    // console.log(charMap)

for(let char in charMap) {
    // debugger;

    if(charMap[char] > maxNum){
        maxNum = charMap[char]
        maxChar = char
    }
}
    return maxChar;
}

function fizzBuzz(){
    for (let i = 1; i <= 100; i++){
      //  console.log(i);
      if(i % 3 === 0 && i % 5 === 0){
        console.log('FIzz BUzz');
      }else if(i % 3 === 0){
        console.log('FIzz');
      }else if(i % 5 === 0){
        console.log('Buzz');
      }else{
        console.log(i)
      }
    }
}

function longestWord(sent){
    // maxLetters = 0
    // longWrd= '';

    // str.split(' ').forEach((word) => {
    //    const lettersNum = word.split('');
    //    lettersNum.length

    //    if(lettersNum.length > maxLetters){
    //     return lettersNum.join('')
    //    }
    // })

    // return str.join(' ')

    const wrdArr = sent.toLowerCase().match(/[a-z0-9]+/g);

    // console.log(wrdArr)
    
    const sortedArr = wrdArr.sort((a, b) => {return b.length - a.length})

    console.log(sortedArr)

    const longestWordArray = sortedArr.filter((word) => {
        return word.length === sortedArr[0].length
    })

    if(longestWordArray.length === 1){
        return longestWordArray[0]
    }else{
        return longestWordArray;
    }

}

// console.log(reverseString('ela4bQTWe'));

// console.log(capitalizeLetter('i love js too much'));

// console.log(isPalindrome('racecar'));

// console.log(reverseInt(-123456789));

// console.log(maxCharacter('javascriptbbbbbbbb'));

// console.log(fizzBuzz());

console.log(longestWord('hi there, Welcome nicests to the show'));
