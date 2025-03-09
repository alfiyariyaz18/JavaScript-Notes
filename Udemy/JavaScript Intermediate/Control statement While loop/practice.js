function bottlesOfBeer(){
    let bottles = 99;
    while(bottles >= 0){
        if(bottles === 1){
            console.log(`${bottles} ${bottles >= 1? 'bottle': 'bottles'} of beer on the wall, ${bottles} ${bottles >= 1? 'bottle': 'bottles'} of beer,\nTake one down and pass it around, no more bottles of beer on the wall.`);
        }
        else if(bottles >= 1){
            console.log(`${bottles} ${bottles >= 1? 'bottle': 'bottles'} of beer on the wall, ${bottles} ${bottles >= 1? 'bottle': 'bottles'} of beer,\nTake one down and pass it around, ${bottles - 1} ${bottles >= 1? 'bottle': 'bottles'} of beer on the wall.`);
        }
        else if(bottles === 0){
            console.log(`No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`);
        }
        
        bottles--
    }
    
}

bottlesOfBeer()





