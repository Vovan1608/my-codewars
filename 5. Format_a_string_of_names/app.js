function list(names) {
    //your code here
    var newNamesFirst = [];
    var newNamesSecond = []
    if(names.length == 0) {
        return "''";
    }else if(names.length == 1) {
        return names[0].name;
    }else{
        for (var i = 0; i < names.length - 1; i++) {
            newNamesFirst[i] = names[i].name;
        }
        newNamesFirst = newNamesFirst.join(', ');
        newNamesSecond = names[names.length - 1].name;
        var newNames = newNamesFirst.concat(" & ", newNamesSecond);
        return newNames;
    } 
}

console.log(list([  
    {name: 'Bart'}, 
    {name: 'Lisa'}, 
    {name: 'Maggie'} 
])) // returns 'Bart, Lisa & Maggie'

console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ])) // returns 'Bart & Lisa'
console.log(list([ {name: 'Bart'} ])) // returns 'Bart'
console.log(list([])) // returns ''