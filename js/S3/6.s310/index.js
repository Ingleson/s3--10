function positions(firstPlace, secondPlace, lastPlace){
    const array = [lastPlace, secondPlace, firstPlace]
    if(firstPlace == [2]){
        return firstPlace == [1] 
    }
    else if(firstPlace == [1]){
        return firstPlace == [0];
    }
    console.log(`1ª-Colocado ${array[0]}`)
    return  array;
}
console.log(positions("Daniel", "Rodrigo", "Marcos" ))
