const PI = Math.PI;
    let r = 2.6;
    
    // Print the area of the circle:
    let circleArea = (PI) * (r ** 2);
    console.log(circleArea);
    
    // Print the perimeter of the circle:
    let perim = 2 * (PI) * (r);
    console.log(perim);

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }