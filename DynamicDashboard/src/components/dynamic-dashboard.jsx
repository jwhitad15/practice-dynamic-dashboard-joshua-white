let userName = "Joshua";
const greeting = <h1> Good Day <br /> {userName} </h1>;

const DashboardGreeting = () => {

    return greeting;

};

export default DashboardGreeting;

// In React,
// you can store JSX object inside a variable name.
// To ensure your 'dynamically updated object' displays in the browser, 
// you must use backticks `` to encapsulate the object AND it's string
// content.

// You'll also want to define a function (which simply means creating a 
// formula that is capable of performing your desired task.) 
    // NOTE: Each function should only perform ONE thing!
                // Think wisely about what you want it to do!

// Inside your function, you can include whatever is necessary to produce
// your desired results. But primarily, you'll want to include a return 
// (which essentially commits the return('s) value. 
    // NOTE: This example shows a differentiality between console
    // and return...although console will print an output, it is 
    // not required to render your output in a browser. 
        // NOTE: This is because return saves the 
        // the value (output) to memory, so that
        // it can be recalled & displayed to a user.

