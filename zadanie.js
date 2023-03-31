let myArray = ['молоко', 'пиво', 'пиво', 'молоко', 'молоко']
myArray.forEach(function(item){
    if (item === ('молоко'))
        console.log('хорошо');
    else 
        console.log('плохо');
}) 