function feetToMile(feet)
{
    if(feet < 0)
    {
        console.log('distance can not be negetive');
    }
    else
    {
        var mile = feet / 5280 ;
        return mile ;
    } 
}
var mileCounted = feetToMile() ;
console.log('converted to '+mileCounted+' mile.');




var woodAmount = 0;
function woodCalculator(chair , table , bed)
{
    if(chair>0)
    {
        woodAmount = woodAmount + chair*1 ;
    }
    else
    {
        console.log('Amount of chair not found');
    }
    if( table > 0 )
    {
        woodAmount = woodAmount + table*3 ;
    }
    else
    {
        console.log('Amount of table not found');
    }
    if( bed > 0 )
    {
        woodAmount = woodAmount + bed*5 ;
    }
    else
    {
        console.log('Amount of bed not found');
    }
    return woodAmount ;
}


var woodNeeded = woodCalculator() ;
console.log('You need '+woodNeeded+' cubic feet of wood');










var brickAmount = 0 ;
var first10Floors = 10 ;
var second10Floors = 10 ;
var restOfTheFloors = 0 ;
function brickCalculator(floors)
{
    if(floors>0 && floors <= 10)
    {
        brickAmount = brickAmount + floors * 15 * 1000 ;
        
    }
    else if(floors >10 && floors <= 20)
    {
        restOfTheFloors = floors - 10 ;
        brickAmount = brickAmount +  first10Floors * 15 * 1000;
        brickAmount = brickAmount +  restOfTheFloors * 12 * 1000;

    }
    else if(floors > 20)
    {
        restOfTheFloors = floors - 20 ; 
        brickAmount = brickAmount +  first10Floors * 15 * 1000;
        brickAmount = brickAmount +  second10Floors * 12 * 1000; 
        brickAmount = brickAmount +  restOfTheFloors * 10 * 1000;
    }
    else
    {
        console.log('You dont need any brick .');
    }
    return brickAmount ;
}

var brickNeeded = brickCalculator();
console.log('Number of bricks you need is ='+' '+brickNeeded);








function tinyFriend(friendlist)
{
    var smallestName = friendlist[0];
    var smallestNameLength = friendlist[0].length ;
    for(var i = 1 ; i< friendlist.length ; i++)
    {
       if(friendlist[i] != " ")
       {
        var friendName = friendlist[i];
        var friendNameLength = friendlist[i].length;
        if(friendNameLength < smallestNameLength)
        {
            smallestName = friendName ;
        }
       }
    }
    return smallestName ;
}


var tiniestFriend = tinyFriend();
console.log(tiniestFriend);
