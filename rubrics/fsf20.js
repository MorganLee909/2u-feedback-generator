let module20 = {
    text: {
        introduction: function(quality, name){
            switch(quality){
                case "perfect":
                    return `Great work on this assignment ${name}. You created a really great portfolio that demonstrates that you understand how to use all of the aspects of React. You did an excellent job using components to create a Single Page Application that runs without errors and displays your skills. Getting started with React is a huge achievement. It can be a bit of a challenge, but it is one of the more important aspects of web development due to the popularity of front-end frameworks.`;
                case "almostPerfect":
                    return `Amazing work on this assignment ${name}. You created a really great Portfolio using React that works with few or no issues. Great job showing that you understand how to use React to create a great single page application`;
                case "fewProblems":
                    return `Good work on this assignment ${name}. You created a really good quality portfolio using React. The site looks really good and displays important information about yourself. Most things work great and follow the requirements of the assignment with just some issues.`;
                case "manyProblems":
                    return `Good job on this assignment ${name}. You have created a working React application that demonstrates that you can create a good website with React. However, there are some problems with the project`;
                case "inProgress":
                    return `I can see that you are still working on this assignment ${name}. You have a good start here, so you just need to put a bit more time into it.`;
                case "notWorking":
                    return `Hey ${name}, unfortunately I was unable to get your React app working. I can see that you have done some work to build up this app, but unfortunately I was unable to get it to start.`;
            }
        },

        conclusion: function(quality){
            switch(quality){
                case "perfect":
                    `Again, great job on this assignment, you really nailed it. Keep up the amazing work!`;
                case "almostPerfect":
                    return `Again, really amazing work on this. You are working with a lot of really complicated things when working with React, and you still managed to create a really great looking and working portfolio. Keep up the great work!`;
                case "fewProblems":
                    return `Overall you did a really great job on this assignment. There are just a few issues that need fixing. You have a really nice portfolio now that looks really great and works well. Keep up the good work.`;
                case "manyProblems":
                    return `Good overall job on this one. It has some things that need a bit more time put into it to fix, but overall it is pretty good.
                    
If you have questions or need any help, don't forget to reach out to your instructors. They are there to help you. Good luck with your future coding!`;
                case "inProgress":
                    return `Again, good job getting this started. I am sure that you will have this up and running in no time if you just put in a bit more work.
                    
Remember, if you have questions or need help, your instructional staff is there to help you, just reach out to them. Good luck!`;
                case "notWorking":
                    return `You definitely have a good start on this assignment. All that you need to do now is to fix the bugs. Don't get discouraged, you are really close to having a working React app. React can be difficult to get started with, just keep working at it. 

Also remember to reach out to your instructors if you need further help, that is what they are there for.`;
            }
        }
    },

    comments: [
        {
            title: "No header",
            type: "checkbox",
            comment: "You don't have any header component. You need to create a header component that contains links to the different sections of your portfolio page and is displayed at the top of the page."
        },
        {
            title: "No footer",
            type: "checkbox",
            comment: "Your application doesn't have a footer. Make sure to create a 'Footer' component that will display on all pages."
        },
        {
            title: "Single project component",
            type: "checkbox",
            comment: "You need to make sure that you have a single 'Project' component that you reuse multiple times to display each of your projects. This is one of the core concepts of React, reusable components so that you don't have to duplicate code for the same thing that appears multiple times."
        },
        {
            title: "No resume",
            type: "checkbox",
            comment: "You should have a resume section that contains a link to download your resume as well as a list of your proficiences."
        },
        {
            title: "Links not working",
            type: "checkbox",
            comment: "Your links are not working for the different sections of your portfolio. When one of them is clicked, it should display a different page containing the necessary information."
        },
        {
            title: "Missing avatar",
            type: "checkbox",
            comment: "Your bio is missing either a picture of yourself or an avatar as per the requirements."
        },
        {
            title: "Not enough projects",
            type: "checkbox",
            comment: "You need to have 6 of your projects displayed. You may use placeholders if you like, or even repeat some of them, but there needs to be at least 6."
        },
        {
            title: "Missing contact form",
            type: "checkbox",
            comment: "You are missing the required contact form. Make sure that you create a form for contacting you that contains form validation."
        }
    ]
}