function beer(){
    var beercount = 99;
    var startingbeercount = 99;
    while (beercount >= -1){
        if (beercount > 1){
        console.log(beercount + " bottles of beer on the wall, " + beercount + " bottles of beer.")
        }if(beercount === 1){
            console.log(beercount + " bottle of beer on the wall, " + beercount + " bottle of beer.")
        }
        beercount--
        if(beercount === 1){
            console.log("Take one down and pass it around, " + beercount + " bottle of beer on the wall.");
        }
            if(beercount > 1){
            console.log("Take one down and pass it around, " + beercount + " bottles of beer on the wall.");
        }
        else if(beercount === 0){
            console.log("Take one down and pass it around, no more bottles of beer on the wall.");
        }
      }
    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, " + startingbeercount + " bottles of beer on the wall.");
}beer()