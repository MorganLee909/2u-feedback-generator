let module13 = {
    text: {
        introduction: function(quality, name){
            switch(quality){
                case "perfect":
                    return `Amazing work on this assignment ${name}. This is a really challenging assignment and you managed to create an API that works perfectly. All of the routes work and you managed to meet all of the requirements for this assignment.`;
                case "almostPerfect": 
                    return `Good work on this assignment ${name}. You created a really good API using a SQL database. This can be a challenging assignment but you still did a great job on it. There are just a few issues.`;
                case "fewProblems":
                    return `Good work on this assignment ${name}. You created a really good API that meets most of the requirements. This is a really tough assignment, so great work on getting everything working well. There are just a few things that need improvement.`;
                case "manyProblems":
                    return `Hey ${name}, good job on creating a working API that can recieve data from the frontend and work with ExpressJS and MySQL to store the data and respond with it. This is a challenging assignment, so just getting that is a big achievement. There are some issues with the API though.`;
                case "inProgress":
                    return `It looks like you are still working on this ${name}. You have a good start, you just need to make sure that you finish up adding in the necessary code to make things work.`
                case "notWorking":
                    return `Hey ${name}, it looks like you got started here, unfortunately I was unable to get the server started for this assignment due to a number of errors.`;
            }
        },

        conclusion: function(quality){
            switch(quality){
                case "perfect":
                    return `You did a really great job on this assignment, especially since this can be one of the more challenging assignments for students. You should be proud of what a really great API you have created here. Keep up the great work.`;
                case "almostPerfect":
                    return `Overall really good job on this assignment. You met almost all of the requirements with very few issues. This is a difficult assignment, so you did a great job getting this API going. Keep up the great work!`;
                case "fewProblems":
                    return `Good work on this one. You got everything working almost perfectly and created a really good API with a SQL database. Keep up the great work.`;
                case "manyProblems":
                    return `Overall you did a good job on this assignment. As I said, this one is really challenging. It is also really important as it contains a lot of the most important concepts. You got through it and did it quite well with just some things that need fixing.
                    
If there is anything that you are having trouble with on this assignment, make sure that you reach out to your instructors, they are there to help you. Good luck!`
                case "inProgress":
                    return `You were able to still get some points for your submission and for the quality of your repo.
                    
Make sure that you reach out to your instructors if you feel that you need help. That is what they are there for. Good luck!`
                case "notWorking":
                    return `You have a good start here, you just need to put in a bit more work to get it up and running.

Remember to reach out to your instructors if you need help with anything, that is what they are there for. Good luck.`;
            }
        }
    },

    comments: [
        {
            title: "GET SINGLE PRODUCT",
            type: "select",
            options: [
                {
                    title: "Hangs",
                    comment: "The route for retrieving a single product just hangs, waiting for a response and never displaying the product."
                },
                {
                    title: "SequelizeEagerLoadingError",
                    comment: "When trying to get a single product, I am receiving a 'SequelizeEagerLoadingError'. This is usually caused by having something wrong with associations between different models."
                }
            ]
        },
        {
            title: "GET SINGLE TAG",
            type: "select",
            options: [
                {
                    title: "Hangs",
                    comment: "The route for retrieving a single tag just hangs, waiting for a response and never displaying the tag."
                }
            ]
        },
        {
            title: "CREATE TAG",
            type: "select",
            options: [
                {
                    title: "Hangs/doesn't create",
                    comment: "When trying to create a tag, the route hangs and never sends a response. The tag is also never created in the database."
                }
            ]
        },
        {
            title: "UPDATE TAG",
            type: "select",
            options: [
                {
                    title: "Hangs/doesn't update",
                    comment: "when trying to update a tag, the route hangs and never sends a response. The tag is also never updated in the datbase."
                }
            ]
        },
        {
            title: "DELETE CATEGORY",
            type: "select",
            options: [
                {
                    title: "SequelizeForeignKeyConstraintError",
                    comment: "When trying to delete a category, the route will sometimes return 'SequelizeForeignKeyConstraintError' and does not delete the category. The reason for this is that Sequelize detects that the category is required by a Product, and prevents its deletion in order to prevent more serious errors later on. the simple solution for this is to add 'allowNull: true' to the category_id property on the Product model. This allows the category to be null so that it doesn't throw errors when deleting."
                }
            ]
        }
    ]
}