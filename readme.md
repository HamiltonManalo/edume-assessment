# Edume Dev Assessment

The general gist of the assessment was create a full stack project with an API that provided results which resembled the old, T9 texting standard. As an algorithmic problem this is combinatorial in nature. 


## Project

### Description
Edume uses JavaScript full stack so the project was developed using NodeJS and React. I implemented it in TypeScript, as I have preference for the language. 

### Spec
The API expects only a string of numeric digits and returns a list of suitable words to suggest

### Implementation
A list of english words was pulled from [here](https://github.com/dwyl/english-words) and filtered to include words 4 characters or less (complexity jumps quite a bit after 4 letters.) The length is validated client and server side 

The front end was implemented using functional components in React. 

### Running

To run the project clone the github repo to your local environment and run "npm install" 
Then to launch the project in development mode run "npm run dev:start" and the server and front-end will launch in a development configuration

### Notes 
Due to time restrictions and rusty-ness with the technologies certain aspects of the project were curtailed

- CSS, it's been awhile since I've written CSS and the UI isn't as well styled as I would like. 
- There are some dependencies that I added and ended up not using. Tidying would have taken more time and I've delayed submitting quite awhile so I'm leaving them with the hope the reviewer will understand. 
- I really would have loved to get this containerized before submitting, but again time limitations. [Here](https://github.com/HamiltonManalo/WarwickAnalyticsDevTest) is an example of a React frontend project that was containizered, so to my review, I can do it.
- Organization was based on the practices I have from working in .NET, i've used NodeJS in personally projects but they have generally been on the smaller side. 
- The word list could be cleaned up. While "a", "b" and "c" are all valid according to dictionary.com, I don't feel they ought be popping up as suggestions. 
- In the UI it gives you the option to select a word. Given a bit more time the feature should have automatically added what you typed to the message box, and allowed you to change it based on other suggestions. 
- Setting up launch scripts to run in production mode. 

Over all, it was a fun project to work on and the algorithmic section was ended up being more challenging then I had thought it would be. 
