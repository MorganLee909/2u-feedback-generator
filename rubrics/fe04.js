let moduleFE04 = {
    text: {
        introduction: function(quality, name){
            switch(quality){
                case "perfect":
                    return `Great work on this assignment ${name}. You did a great job getting started with JavaScript and working with many different aspects of programming. You created a great console program that accurately calculated everything required by the assignment.`;
                case "almostPerfect":
                    return `Really great work on this assignment ${name}. You did a really good job on this assignment getting accustomed to using a bunch of different components of JavaScript create a great algorithm for solving a difficult challenge. You got this one almost perfect.`;
                case "fewProblems":
                    return `Good work on this assignment ${name}. You got a really good start with JavaScript here. Programming can be quite the challenge to get the hang of, but I can see that you are really catching on to creating good JavaScript code already. You did a great job on this one with just a few small mistakes.`;
            }
        },

        conclusion: function(quality){
            switch(quality){
                case "perfect":
                    return "You met all of the requirements in this assignment. You did a really good job creating good, readable JavaScript and displayed that you have the basics of running JavaScript in the browser. This is a great foundation for further improvement of your work with creating browser applications. JavaScript isthe base of everything that happens in the browser, so this will give you a great start moving forward. Good luck in the future and keep up the great work."
                case "almostPerfect":
                    return `Again, amazing work here. You really showed that you are getting the hang of JavaScript, one of the most critical parts of web development. Keep up the amazing work and good luck to you on future assignments!`;
                case "fewProblems":
                    return `Great working writing some JavaScript here and getting it to run in the browser. Writing algorithms like these are the first step towards creating some really amazing applications with HTML, CSS, JavaScript and more.Other than a few minor mistakes, you wrote some great JavaScript here. Keep up the great work and you will be creating amazing front-end in no time. Good luck going forward!`;
            }
        }
    },

    comments: [
        {
            title: "Average Change: $7803.48",
            type: "checkbox",
            comment: "The average change that you have calculated should actually be -2315.12. The mistake that you made is that you calculated the change on the first element in the 'finances' array. Since there is no previous element, the change was calculated as 867884 for that first one, which skews the data. You need to make sure that you skip that first element in the array for this one since there is no change."
        }
    ]
};