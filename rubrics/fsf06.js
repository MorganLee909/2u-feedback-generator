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
                case "notWorking":
                    return `Hey ${name}, I can see that you got a good start on this assignment, but unfortunately it is not working at the moment. I am unable to perform a search at all.`;
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
                    
If you need help, don't forget to reach out to your instructors, they are there to help you.`;
                case "notWorking":
                    return `Not a bad start to this assignment, you just need to fix somethings to get everything working correctly.
                    
Remember to reach out to your instructors if you need any further help, that is what they are there for.`;
            }
        }
    },

    comments: [
        {
            title: "No search history",
            type: "checkbox",
            comment: "After searching for a city, that city does not appear as an option that I can then click on again to have the weather for that city quickly displayed again. Make sure that you use 'localStorage' to save that data, and display a button for each searched location."
        },
        {
            title: "No 5-day forecast",
            type: "checkbox",
            comment: "You need to have a 5 day forecast. It should display the date, a weather icon, the temperature, windspeed and humidity for the next 5 days."
        },
        {
            title: "Location buttons don't re-search",
            type: "checkbox",
            comment: "While you are saving the search results to the page, they don't work as buttons in order to display the information for that location again. You need to make sure that the search history can be used as a way to quickly see weather information just by clicking on it."
        }
    ]
};