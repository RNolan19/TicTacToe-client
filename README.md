My TIC-TAC-TOE Project

Introduction

This is a single page application that allows the user to play a simple game of Tic Tac Toe.
You can see and play the game here: https://rnolan19.github.io/TicTacToe-client/
As a junior developer, the goal was just to create a functional tic tac game.
Emphasis on functional.  I was not overly concerned with how the game looked, from
a style/CSS perspective.  I just wanted to create a game that would allow 2 people to
successfully play the timeless game of Tic Tac Toe.  It was certainly harder than it appears.

Technologies Used

I created the game primarily by using JavaScript, JQuery, CSS, HTML, Bootstrap, and an API.

User Stories

-As a user, I would like to be able to sign up easily.
-As a user, I would like to be able to sign in.
-As a user, I would to be able to change my password once signed in.
-As a user, I would like to be able to start a new game once signed in.
-As a user, I would like feedback when I make a valid or invalid move.
-As a user, I would like to know the result of the game- win, lose, or draw.
-As a user, I would like to be able to continue playing if I want to.
-As a user, I would like to know how many games I have played.
-As a user, I would like to sign out when I am done playing.

Hiccups/Difficult Aspects of the Project

-Trying to come up with the function to switch player turns from X to 0.
-Creating the Update/Patch API
-Creating the game logic to find a winner and displaying the message to the user.
My 'win message' and 'player turn messages' would interfere withe eachother.

Problems To Be Solved In Future Iterations

-More time spent on design. It is admittedly not the prettiest looking Tic Tac Toe game
I have ever seen.
-I would like to be able to show the user their lifetime win-loss record, if possible.

Wireframe
```html
<img src="public/IMG_6121.jpg.jpg">
```



## Structure

### Scripts

Developers should store JavaScript files in [`assets/scripts`](assets/scripts).
The "manifest" or entry-point is
[`assets/scripts/app.js`](assets/scripts/app.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

### Config

Developers should set `apiUrls.production` and `apiUrls.development` in
[`assets/scripts/config.js`](assets/scripts/config.js).  With
`apiUrls` set, developers may rely on `apiUrl` as the base for API
URLs.

### Styles

Developers should store styles in [`assets/styles`](assets/styles) and load them
from [`assets/styles/index.scss`](assets/styles/index.scss). Bootstrap version 3 is
included in this template.

### Forms and Using `getFormFields`

Developers should use [getFormFields](get-form-fields.md) to retrieve form data
to send to an API.

### Deployment

To deploy a browser-template based SPA, run `grunt deploy`.

## Adding Images

To add images to your project, you must store them in the `public` directory.
To use the image in HTML or CSS, write the path to the image like this:

```html
<img src="public/cat.jpg">
```
or
```css
#my-cool-div {
  background-image: url('public/cat.jpg')
}
```

Note that there's no `./` or `/` in front of `public/filename.jpg`.
