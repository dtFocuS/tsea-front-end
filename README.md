# Trivia Training App

This is a trivia training web application for the Code Challenge project for the Software Engeineer Apprenticeship program at Tandem. 

## Goal

The goal is to create an trivia application that displays questions with multiple-choice answers to choose from. The web application is built in React.

### Assumptions
- A round of trivia has 10 questions
- All questions are multiple-choice questions
- The score does not need to update in real time
- Results can update on form submit, button click, or any interaction you choose
- Trivia data such as the questions, correct and incorrect answers is provided in a JSON file

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Accptance Criteria
- A user can view questions
- Questions with their multiple choice options much be displayed one at a time
- Questions should not repeat in a round
- A user can select only 1 answer out of the 4 possible answers
- The correct answer must be revealed after a user has submitted their answer
- A user can see the score they received at the end of the round

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Instruction to run the app
1. Download and install Node.js and npm.
2. Clone this git repo to your local machine.
3. Cd into the directory and run npm install.
4. Type in npm start in your terminal to run the app.

### How to use
Once the app is opened in the browser, enter a user name on the landing page to proceed to the home page. When you reach home page, you will see welcome message on top with your user name. Underneath the heading message is your score out of 10. The center part is the main game with the question number, question description and the multiple choice options to choose from. Read the question and pick the right answer by clicking on one of the options. If you choose the right answer, the background of the option you choose will turn green. If the answer is incorrect, the background will turn red. The score up top will update in real time based on the number of right answers you have chosen. Once you have finished the round by answering all 10 questions, the final result will display in the end by showing you the number of correct answers you have chosen as well as your personal best score so far. If you wish to keep playing, simply click on the play again button to play a new round to try to beat your best score. The personal best score is stored in the react state so if you happen to refresh the page, the personal best score will be resetted to zero. 

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
