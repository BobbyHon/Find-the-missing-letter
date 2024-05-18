function findMissingLetter(array)
{
  for(let i = 1; i < array.length; i++){
    if (array.join('').charCodeAt(i) != array.join('').charCodeAt(i - 1) + 1)
      {
        return  String.fromCharCode(array.join('').charCodeAt(i - 1) + 1)
      }
  }
}