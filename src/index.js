module.exports = function check(str, bracketsConfig) {
    const array = str.split('');  // получаем массив из скобок
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < bracketsConfig.length ; j++) {
        if (array[i] === bracketsConfig[j][0] && array[i + 1] === bracketsConfig[j][1]) { //пообегаемся по массиву в поисках хотя бы одной закрытой пары, потом откатываем счетчик на 2 индекса назад
          array.splice(i, 2);
          i -= 2;
        }
      }
    }
    if (array.length === 0){
        return true;
    }
    else{
        return false;
    }
}
