let module05 = {
    text: {
        introduction: function(quality, name){
            switch(quality){
                case "perfect":
                    return `Great work on this assignment ${name}! You created a really great application for managing appointments. Everything works exactly as expected. You should be proud of what you have created, it is clear that you are really getting the hang of building applications with JavaScript.`;
                case "almostPerfect":
                    return `Excellent work on this assignment ${name}. You did a really excellent job on this assignment with a working application. You displayed that you understand how to use JavaScript to create a great functional program in the browser that is easy to use. There are only a few minor issues to address.`;
                case "fewProblems":
                    return `Great work on this assignment ${name}. You created a really well-functioning application using HTML, CSS and JavaScript. Almost everything seems to work really well, with just a few issues.`;
                case "manyProblems":
                    return `Hey ${name}, you got a good start to this application. It has the basics displayed on the page and some functionality, but there are some issues.`;
                case "inProgress":
                    return `Hey ${name}. It appears that you are still working on this assignment. I can see that you have gotten a bit of the code written and are still working on it. Just not everything is there yet. Here are a few suggestions that might help you out on this.`;
            }
        },

        conclusion: function(quality){
            switch(quality){
                case "perfect":
                    return 'Again, great work. Even your repo is in very good condition with a quality README and a great commit history. Keep up the amazing work!'
                case "almostPerfect":
                    return `Again, amazing work. The application you created works really well and shows that you really understand how to implement JavaScript, HTML and CSS to great something amazing. Keep up the great work!`;
                case "fewProblems":
                    return `Really great work on this one. You showed that you are proficient with JS. Other than those mistakes mentioned above, everything looks great. Keep up the good work!`;
                case "inProgress":
                    return `Again, good work so far, and a good job getting started, it just needs some more time spent on it.
                    
If you need help, be sure to reach out to your instructors. They are there to help you.`;
            }
        }
    },

    comments: [
        {
            title: "Doesn't save to localStorage",
            type: "checkbox",
            comment: "The application is not saving data to localStorage. This means that If I refresh the page, or come back to it later, then the data does not persist."
        }
    ]
}