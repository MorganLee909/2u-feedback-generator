let module01 = {
    text: {
        introduction: function(quality, name){
            switch(quality){
                case "perfect":
                    return `Amazing work on this assignment ${name}. You have a great start to the course here. You did a great job refactoring everything and making it all work just right.
                    
The HTML is all semantic and logical. You did a great job consolidating and commenting on all of the CSS and everything on the site works exactly as expected`;
                case "almostPerfect":
                    return `Really great work on this assignment ${name}, you did a great job on this assignment. Almost everything is perfect in this one, except for just a few small things.`
                case "fewProblems":
                    return `Hey ${name}, good work on this assignment. This first assignment can be a challenge because it is your first experience working with HTML/CSS, but you did a really good job at meeting most of the requirements for this assignment. There are only a few things that need fixing.`;
                case "manyProblems":
                    return `Good start on this assignment ${name}. I can see that you have put some effort into refactoring this assignment with better code. However, there are a few problems that I ran into when checking it over.`;
            }
        },

        conclusion: function(quality){
            switch(quality){
                case "perfect":
                    return `Again, just really great work on this assignment. Keep up the great work and you will be developing great websites in no time. Good luck on your future coding!`;
                case "almostPerfect":
                    return `Again, really great job on this assignment. It is clear that you are catching on to HTML and CSS very quickly. Keep up the great work.`
                case "fewProblems":
                    return `Overall really great work on this assignment. It is clear that you are starting to get the hang of HTML and CSS. There are only minor issues with the page, you did a really great job on it. Keep up the great work!`;
                case "manyProblems":
                    return `Good job on this first assignment. It could use a bit of improvement, but it is pretty good overall. Don't forget to reach out to your instructors if you need help with anything. That is what they are there for. Good luck in your future coding!`;
            }
        }
    },
    
    comments: [
        {
            title: "HTML not semantic",
            type: "checkbox",
            comment: "The HTML could be refactored a bit better in order to be semantic. I noticed that it still contains many 'div' tags. Make sure that you rename these tags to have a more semantic meaning. You can use tags such as aside, section, article, header, etc."
        },
        {
            title: "CSS not consolidated",
            type: "checkbox",
            comment: "The CSS could be consolidated quite a bit more. Make sure that you look for anything that is repeated and then combine it into one selector."
        },
        {
            title: "First link doesn't work",
            type: "checkbox",
            comment: "The first link 'Search Engine Optimization' does not work. Make sure that you are using the correct href and also that the element that you want to link to has the matching id."
        },
        {
            title: "Missing alt tags",
            type: "checkbox",
            comment: "You need to make sure that all of your 'img' tags contain the 'alt' attribute. This helps with SEO and with accessibility. Some or all of your 'img' tags do not contain this attribute."
        },
        {
            title: "Few or no CSS comments",
            type: "checkbox",
            comment: "Your CSS has very few or no comments whatsoever. It is very important that CSS is commented so that I can be more easily read and other users can find what they are looking for in the file."
        },
        {
            title: "Title not concise/descriptive",
            type: "checkbox",
            comment: "Your title element needs to be concise, yet descriptive."
        },
        {
            title: "2 or 3 links not working",
            type: "checkbox",
            comment: "It looks like the links in your menue are not working. Make sure that when these links are clicked on that they shift to the relevant part of the page."
        }
    ]
}