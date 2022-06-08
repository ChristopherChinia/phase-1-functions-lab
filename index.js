// Code your solution in this file!
function distanceFromHqInBlocks(walk){
    if(walk<42){
        return (42-walk)
    }else{
        return (walk-42)
    }
}

function distanceFromHqInFeet(walk){
    return distanceFromHqInBlocks(walk) *264;
}
function distanceTravelledInFeet(start, destination){
    if (destination>start){
        return((destination - start)* 264);
    }else {
        return ((start - destination)* 264);
}
    }
function calculatesFarePrice(start, destination){
    let movement = distanceTravelledInFeet(start, destination);
    if (movement <= 400){
        return 0;
    }
    else if (movement> 400 && movement< 2000){
        return(movement - 400)*0.02;
    }else if(movement> 2000 && movement<= 2500){
        return 25;
    }
    else if (movement>2500){
        return "cannot travel that far";
    }
}