let commonComments = [
    {
        title: "Small commit history",
        comment: `Your commit history is a bit sparse. Make sure that you commit every time that you make a meaningful change to the code and give it a message that describes the change that was made. Think of commits as a history of the development of your repository.`,
    },
    {
        title: "Bad repo name",
        comment: `Make sure that the name of the repository is descriptive of what the application is or does. Do not name it after the assignment. You want to make sure that others that view your repo can generally identify what things are by the name.`
    },
    {
        title: "Contains develop directory",
        comment: `Your repository contains the 'Develop' directory that should not be there. Everything in that folder should be at the top level of your repository. Copying and pasting this folder into your repository can cause unexpected issues due to the unexpected folder structure.`
    },
    {
        title: "Bad README",
        comment: `Make sure that you have a good quality README file in your application. The README is the first thing that visitors are going to see when they come to your repository. You should describe the repository appropriately and give as much information about it as you can. Refer to the rubric for the exact requirements for this assignment.`
    },
    {
        title: "Copy/paste of README",
        comment: `Make sure that you include a quality README that is unique to your repository. The README is the first thing that visitors are going to see when they come to your repository. Don't just copy/paste the assignment into your README.`,
    },
    {
        title: "Repository contains node_modules",
        comment: `You have the 'node_modules' directory in your repository, which should never be there. Make sure that you add this to your '.gitignore' file so that git ignores it and it is not uploaded to GitHub.`
    },
    {
        title: "No video",
        comment: `Make sure to include a walkthrough video for this assignment. The video is a large part of the grade.`
    },
    {
        title: "package-lock.json in .gitignore",
        comment: `Your 'package-lock.json' file is in your '.gitignore' file and should not be. The package lock is what insures that the exact version of a dependency is installed rather than the most recent when installing them in an existing code base. This ensures that if there is some breaking change in a future version of a package, then it will not affect the code.`
    },
    {
        title: "No deployment",
        comment: `Make sure that you deploy this application. The deployment is a significant part of the grade, so get it deployed as soon as possible.`
    },
    {
        title: "Multiple import errors",
        comment: "Your code contains multiple errors due to improper importing of other files. You need to make sure that when you import other files with 'require' that the path and filename exactly match the path and filename of the file that you are trying to import. Pay attention to pluralization and capitalization of the files. The program will not run at all if any of your imports are incorrect."
    },
    {
        title: "Uploaded video to GitHub",
        comment: "Don't upload videos to GitHub. GitHub is built for code and is not meant to be used to hold large files such as video. Use a video sharing service such as Screencastify or YouTube and then just share the link in your README file and the submission."
    },
    {
        title: "No access to video",
        comment: "While you have submitted a link to your walkthrough video, unfortunately I am unable to access it. The usual reason for this is either that you have a type in your link, or that you have not made the video public for other people to view. Make sure that you check the link and that it is public so that we can view and grade it, as the video is a large part of the grade."
    }
];