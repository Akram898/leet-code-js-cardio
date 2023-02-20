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

    // console.log(sortedArr)

    const longestWordArray = sortedArr.filter((word) => {
        return word.length === sortedArr[0].length
    })

    if(longestWordArray.length === 1){
        return longestWordArray[0]
    }else{
        return longestWordArray;
    }

}

console.log(longestWord('hi there, aaaaaa b to the show'));

function chunkArray(arr, len) {
    
}
