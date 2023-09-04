let module02 = {
    text: {
        introduction: function(quality, name){
            switch(quality){
                case "perfect":
                    return `Great work on this assignment ${name}. You created an excellent portfolio that really displays your skills and shows that you have a very firm grasp on HTML and CSS already. Your page looks great and is responsive and your code is clean and organized.`;
                case "almostPerfect":
                    return `Really good job creating a personal portfolio page ${name}. It looks really amazing. You showed that you have a really good grasp of how to create a webpage using good HTML and CSS. Creating a good style can be really challenging, so you should be proud of how well you did.`;
                case "fewProblems":
                    return `Hey ${name}, great work on your first portfolio. You created a good-looking portfolio that you can use and update in the future with even more of your own work. You did a really good job on this assignment, there are just a few things that need improvement.`;
                case "manyProblems":
                    return `Hey ${name}, good start on this assignment. You have the basics of a portfolio page and it displays many of the things necessary. However, there are quite a few things missing that could be improved upon.`;
                case "inProgress":
                    return `Hey ${name}, I can see that you are still working on this assignment. You have a good start here, it just needs a bit more time and effort.`
            }
        },

        conclusion: function(quality){
            switch(quality){
                case "perfect":
                    return `Again, amazing working on this assignment. You have displayed that you are really getting a hang of creating nice web pages using HTML and CSS. Keep up the great work!`;
                case "almostPerfect":
                    return `Again, you did a really great job on this assignment. You are clearly catching on to these ideas very quickly. Great work on creating a good portfolio with HTML and CSS. Keep up the great work!`;
                case "fewProblems":
                    return `Good job on this one. I can tell that you are really starting to understand the basics of HTML and CSS, which is the structure that everything else is built upon. Keep up the good work.`;
                case "manyProblems":
                    return `Not a bad start for this assignment, you just need to put a bit more work into it in order to meet all of the requirements.
                    
If you need help, don't be afraid to reach out to your instructors, they are there to help you. Good luck!`;
                case "inProgress":
                    return `Keep working on this and you will have it done in no time.
                    
Be sure to reach out to your instructors if you need any help. That is what they are there for. Good luck!`;
            }
        }
    },

    comments: [
        {
            title: "Not responsive",
            type: "checkbox",
            comment: "Your page is not responsive. When the screen size shrinks, the elements on the page should adjust to properly fit the screen. Make sure that you are using media queries to adjust how things are displayed on smaller screens."
        },
        {
            title: "Partially responsive",
            type: "checkbox",
            comment: "Your page is only somewhat responsive. Most of the elements on the page do resize pretty well when the screen size shrinks. However, there are a few elements that overlap the screen or get a little bit out of shape."
        },
        {
            title: "No photo/avatar",
            type: "checkbox",
            comment: "You need to include either a photo of yourself or an avatar in its place as a requirement for this assignment."
        },
        {
            title: "No link for project",
            type: "checkbox",
            comment: "Make sure that the you add a link to at least one of the projects you are displaying. It can just be a placeholder link, but it must go somewhere to show that you know how to make a link to your projects."
        },
        {
            title: "Navigation links not working",
            type: "checkbox",
            comment: "The navigation links on the page are not working. When clicking on something in the menu it should take me to that part of the page. This can be done using '#link-to-id' as the href, and an id on the element to link to."
        },
        {
            title: "One project",
            type: "checkbox",
            comment: "You need to include more than one project in your portfolio, and the first project should display larger than the others to mark it as the primary thing that you want to display. I understand that you may not have more than one project to display yet, but placeholders are perfectly fine as well. An image of a fake/future project with a title and a link to anywhere is fine."
        },
        {
            title: "No name",
            type: "checkbox",
            comment: "You did not include your name in the section about you, which is one of the requirements for the assignment."
        }
    ]
}