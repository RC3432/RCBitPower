/*

Author: Rylei C,
Date Created: 16/5/2023,
Date Finished: 17/05/2023,
Purpose: Teach beginner programmers simple syntax
*/


//To the extent possible under law, Rylei C has waived all copyright and related or neighboring rights to RCBitPower. This work is published from: United States. 
//




main(); //Calls the function main, a function is a collection of code that can run code repeatedly, accept parameters, and return values. These are vital to preventing boilerplate code, or repeated bloating code.

function main() //Runs the following sequence
{
   //The keyword 'var' creates a variable, this allows you to define, alter, evaluate and manipulate data values in the program.

    var num = 2; //Declares the number to be evaluated as 2, try changing the number!
    var power = 0; //Declares the power increase, which adjusts how much the power increases with every iteration. Note that the code below doesn't account for negative or less than 1 numbers.
    var bit = 32; //Declares how many bits are counted. This number divided by 8 also determines the number of bytes!

    var pow_min; //Defines the power minimum, which is the lowest number from the sequence about to be produced.
    var pow_max; //Defines the power maximum, which is the highest number from the sequence about to be produced.

    const BIT_IN_BYTES = 8; //Declares the amount of bits in a byte. Note that this variable is declared by 'const'. This is a constant variable, and cannot be altered in run-time, or program execution. This is useful for numbers that will never change!
    const BYTES_IN_KBYTES = 1028; //Declares the amount of bytes in a kilobyte. Note that this is also a constant, which will not change in runtime. For computing reasons, a kilobyte is technically 1024 bytes, not 1000.


    console.log("Here is all powers of " + num + " to " + bit +" bits!"); //Prints an introduction message, not the ability to embed variables within the message! Text within quotes is called a string (Text). In this context, it's a literal string, or a string that isn't defined as a variable.

    for (var i = 0; i < bit; i++) //Repeat bit times. This declares a variable as 'i', then as long as 'i' is less than bit, it will call the code below, adding 1 to 'i' each time until it reaches bit.
    {
        if (power <= 1) //If the power is less than or is equal to 1,
        {
            pow_min = Math.pow(num, power); //Set power minimum to the power of 'power' to the number to be evaluated, 'num'.
        }
        else if (power == bit-1) //If the previous condition isn't fufilled, but the power is equal to bit minus one,
        {
            pow_max = Math.pow(num, power); //Set the power maximum to the power of 'power' to the number to be evaluated, 'num'.
        }
        console.log(Math.pow(num, power)); //Print out 'num' to the power of the current 'power'.
        power++; //Add one to 'power'
    }

    console.log("\n\nThe minimum is " + pow_min + ", while the maximum is " + pow_max); //Print to the console 2 new lines through \n, which allows you to skip over a line wtihin a string. Next, tell the user the power minimum, and the power maximum. 
    console.log("That means that you have " + (bit) + " bits, " + (bit/BIT_IN_BYTES)  + " bytes, and " + (bit/(BIT_IN_BYTES*BYTES_IN_KBYTES)).toPrecision(1) /*This makes sure we don't have floating point precision errors!*/ + " kilobytes!"); //Print out byte facts! To get the number of bits, bytes, and kilobytes, we take the number, and if required, divide it by our declared constants!

}

