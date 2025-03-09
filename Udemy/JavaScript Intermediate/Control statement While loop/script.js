function bottlesOfBeer() {
    var bottle = 99;

    while (bottle >= 0) {
        if (bottle > 1) {
            console.log(bottle + " bottles of beer on the wall, " + bottle + " bottles of beer. Take one down and pass it around, " + (bottle - 1) + " bottles of beer on the wall.");
        }
        else if (bottle === 1) {
            console.log(bottle + " bottle of beer on the wall, " + bottle + " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
        }

        else if (bottle === 0) {
            console.log("no more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
        }

        bottle--;
    }
}

bottlesOfBeer();