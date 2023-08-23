let moduleFE04 = {
    text: {
        introduction: function(quality, name){
            console.log("something");
            console.log(quality);
            switch(quality){
                case "almostPerfect":
                    return `Really great work on this assignment ${name}. You did a really good job on this assignment getting accustomed to using a bunch of different components of JavaScript create a great algorithm for solving a difficult challenge. You got this one almost perfect.`;
            }
        },

        conclusion: function(quality){
            switch(quality){
                case "almostPerfect":
                    return `Again, amazing work here. You really showed that you are getting the hang of JavaScript, one of the most critical parts of web development. Keep up the amazing work and good luck to you on future assignments!`;
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
}