let moduleFE07 = {
    text: {
        introduction: function(quality, name){
            switch(quality){
                case "perfect":
                    return `Hey ${name}, amazing work on this assignment. You did a perfect job on this assignment and you managed to meet all of the requirements. I am able to create notes based on the time of the day and save them using the buttons. The notes are saved to local storage, meaning that they persist between sessions. The date is displayed at the top of the page and the time block are color coordinated based on past/present/future.
                    
You also did a great job managing your repository. You have a good number of commmits and the folder structure is well organized. Your README matches the requirements and is descriptive of the project.`;
            }
        },

        conclusion: function(quality){
            switch(quality){
                case "perfect":
                    return "Again, great work here. You did a great job meeting all of the requirements and it is clear that you put a lot of workin into making this assignment work just right. Keep up the great work and you will be a great front-end developer in just a few more weeks.";
            }
        }
    },

    comments: []
}