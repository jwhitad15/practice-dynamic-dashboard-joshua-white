 let isPremium = false;
// USING TERNARY NOTATION
// const PremiumMember = {isPremium ? "Upgrade to premium to enjoy exclusive features!" : "Thank you for being a premium member!"};

const PremiumMember = () => {
    let alert;

    if (isPremium) {
        return <div id="scrolling1"> <p class="paragraph"> UPGRADE TO PREMIUM TO ENJOY PREMIUM FEATURES! </p> </div>;
    } else if (!isPremium) {
        return <div id="scrolling2"> <p class="paragraph"> THANK YOU FOR BEING A PREMIUM MEMBER! </p> </div>;
    };
};
<br />


export default PremiumMember;

// You can include things like variable declarations, if/else/else-if statements,
// and anything else you might think of as a means to produce your desired result. 

// TERNARY NOTATION
// An alternate version of writing an if-else statement can be found in something called
// ternary notation. This type of notation replaces the if/else & return keywords with 
// symbols...specifically ? (if), : (else)...The ternary statement basically discards
// the return keyword and stores the output values in priority order.

    // EXAMPLE: condition ? "This is awesome!" : "This is fantastic!"
    //          ^^^(1)^^^(2)^^^^^(3)^^^^^^^^^^(4)^^^^^^^^^(5)^^^^^^^
    //                                  |
    //                                  |
    //          ________________________|___________________________________________________
    //          Verbatim this reads, "condition(1) - 'if this is true(2)' print 'This is 
    //          awesome!'(3) - else if this is not true(4), print 'This is fantastic!'(5)" 
    //          *** You can store this entire thing in variable to make for clean code!