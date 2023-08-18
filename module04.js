let module04 = {
    text: {
        introduction: function(quality, name){
            switch(quality){
                case "perfect":
                    return `Amazing work on this assignment ${name}! You created a really great quiz that met all of the requirements. Everything ran perfectly and without errors. You have gotten a really great start using JavaScript in the browser.`;
                case "almostPerfect":
                    return `Great job ${name}. You have a really good application here. I was able to take the quiz and the UI was good as well, so that I had no issue figuring out how to play. You displayed that you have gotten comfortable with JavaScript/HTML/CSS and can implement actual applications with it in the browser.`;
                case "fewProblems":
                    return `Good work on this assignment ${name}. It is clear that you have a good grasp on JavaScript as you were able to create a mostly functional quiz game in the browser. Overall, you did a pretty good job on this, but there are some things that could use improving.`;
                case "manyProblems":
                    return `Hey ${name}, you got a good start on this assignment, but there is still a lot missing. This can be a tricky assignment as it is your first experience building a full application with JavaScript. You got some of the basics down, but it still needs some work.`;
                case "inProgress":
                    return `Hey ${name}, it looks like you are still working on this assignment. I can see that you have gotten started with a good bit of code, but the main functionality is not quite there yet.`;
            }
        },

        conclusion: function(quality){
            switch(quality){
                case "perfect":
                    return `Again, amazing job creating this quiz. You really showed that you know how to use JavaScript in the browser, as well good HTML/CSS. Keep up the great work!`;
                case "almostPerfect":
                    return `Again, great work. Almost everything worked perfectly with very few bugs. You have created a really great quiz here, keep up the great work.`;
                case "fewProblems":
                    return `Overall you did a really good job on this assignment. Other than those things mentioned above, it works great and you displayed that you are capable of creating a functional frontend application using HTML/CSS/JS. Keep up the great work.`;
                case "manyProblems":
                    return `Overall, not a bad job, you just need to put a bit more work in to the project to get everything working properly. You have a good base, now you just need to build out the rest.

Remember to reach out to your instructional staff if you need help. Your instructors are there to help you. Best of luck to you!`;
                case "inProgress":
                    return `You have a good start to this assignment, it just needs some more work to get everything working properly.
                    
Make sure that you reach out to your instructors if you need any help with this assignment, they are there to help you. Good luck!`;
            }
        }
    },

    comments: [
        {
            title: "No highscores",
            type: "checkbox",
            comment: "Users are unable to save their highscores and then view them later. Make sure that you save their initials/score to local storage, then provide a page where you retrieve that data and display it."
        },
        {
            title: "Bad answer time not subtracted",
            type: "checkbox",
            comment: "When a wrong answer is provided by the user, no additional time is subtracted from the timer."
        },
        {
            title: "No timer",
            type: "checkbox",
            comment: "Your quiz does not contain a timer. Once the game starts, there should be a timer on the page that is counting down every second until the game ends at 0. Additionaly, time should be subtracted from the timer for every incorrect answer."
        },
        {
            title: "Start quiz button",
            type: "checkbox",
            comment: "There should be a button on the main page to start the quiz. This allows the user to decide when they want to start the quiz rather than just starting it right off the bat."
        }
    ]
}