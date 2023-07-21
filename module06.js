let module06 = {
    text: {
        introduction: function(quality, name){
            switch(quality){
                case "perfect":
                    return `Great work on this assignment ${name}. I was able to search for weather in any city and see current conditions as well as a 5 day forecast. I was also able to use the buttons to do another quick search for the same city. You did great work on this assignment and displayed that you understand how to use third-party API's while meeting all of the assignment requirements.`;
                case "almostPerfect":
                    return `Excellent work on this assignment ${name}. You created a really good weather application and showed that you really understand how to use JavaScript and third-party API's. Third-party API's can really be a challenge at times, so great job getting this up and working.`;
                case "fewProblems":
                    return `You did a really good job on this assignment ${name}. You displayed that you know how to use third-party API's and integrated them into a web site that you have created using JavaScript. You met most of the requirements with just a few issues.`;
                case "manyProblems":
                    return `Hey ${name}, good overall job on this project. You have a working application that can display the weather using a third-party API. However, there are some problems.`;
                case "inProgress":
                    return `Good start on this one ${name}. It appears that you are still working on this assignment. I can see that you got some of the application working, but not everything is there.`;
            }
        },

        conclusion: function(quality){
            switch(quality){
                case "perfect":
                    return `You did a really good job on this assignment and should be proud of what you created. I can tell that you have a solid understanding of how to use JavaScript already. Keep up the amazing work!`;
                case "almostPerfect":
                    return `Otherwise, amazing work. You really displayed how well you know JavaScript and that you are really improving with your development skills. Good luck on your future coding!`;
                case "fewProblems":
                    return `Otherwise, great work. Your application contains all or most of the necessary components and the UI is clean and easy to use. Great work, keep it up.`;
                case "manyProblems":
                    return `You did a pretty good job on this assignment. Getting used to using third-party API's can be quite challenging. Things mostly work, there are just some bugs and other issues that need to be fixed. Good luck!`;
                case "inProgress":
                    return `Again, you have a good start, you just need to keep working on it to get everything to 100%.
                    
If you need help, don't forget to reach out to your instructors, they are there to help you.`
            }
        }
    },

    comments: []
};