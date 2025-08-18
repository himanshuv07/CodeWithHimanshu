export interface Question {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface Quiz {
  category: string;
  difficulty: string;
  questions: Question[];
}

export const quizzes: Quiz[] = [
  {
    category: 'HTML',
    difficulty: 'Beginner',
    questions: [
      {
        question: 'What does HTML stand for?',
        options: [
          'Hyper Text Markup Language',
          'High Tech Modern Language',
          'Home Tool Markup Language',
          'Hyperlink and Text Markup Language'
        ],
        answerIndex: 0,
        explanation: 'HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages and describes the structure of a web page using markup.'
      },
      {
        question: 'Which HTML element is used for the largest heading?',
        options: ['<h6>', '<h1>', '<heading>', '<h>'],
        answerIndex: 1,
        explanation: 'The <h1> element is used for the largest heading in HTML. Headings range from <h1> (largest) to <h6> (smallest).'
      },
      {
        question: 'What is the correct HTML element for inserting a line break?',
        options: ['<break>', '<br>', '<lb>', '<newline>'],
        answerIndex: 1,
        explanation: 'The <br> element is used to insert a single line break in HTML. It is a self-closing tag that does not require a closing tag.'
      },
      {
        question: 'Which attribute is used to specify the URL of the page the link goes to?',
        options: ['src', 'link', 'href', 'url'],
        answerIndex: 2,
        explanation: 'The href attribute is used in anchor tags (<a>) to specify the URL of the page the link goes to. For example: <a href="https://example.com">Link</a>'
      },
      {
        question: 'What is the correct HTML for creating a hyperlink?',
        options: [
          '<a url="http://example.com">Example</a>',
          '<a href="http://example.com">Example</a>',
          '<a>http://example.com</a>',
          '<hyperlink>http://example.com</hyperlink>'
        ],
        answerIndex: 1,
        explanation: 'The correct syntax for creating a hyperlink is <a href="URL">Link Text</a>. The href attribute contains the destination URL.'
      }
    ]
  },
  {
    category: 'CSS',
    difficulty: 'Beginner',
    questions: [
      {
        question: 'What does CSS stand for?',
        options: [
          'Creative Style Sheets',
          'Cascading Style Sheets',
          'Computer Style Sheets',
          'Colorful Style Sheets'
        ],
        answerIndex: 1,
        explanation: 'CSS stands for Cascading Style Sheets. It is used to style and layout web pages, controlling the presentation of HTML elements.'
      },
      {
        question: 'Which CSS property is used to change the text color of an element?',
        options: ['text-color', 'font-color', 'color', 'text-style'],
        answerIndex: 2,
        explanation: 'The color property is used to set the color of text. For example: color: red; or color: #ff0000;'
      },
      {
        question: 'How do you add a background color for all <h1> elements?',
        options: [
          'h1 {background-color: #FFFFFF;}',
          'h1 {bg-color: #FFFFFF;}',
          'all.h1 {background-color: #FFFFFF;}',
          'h1.all {background-color: #FFFFFF;}'
        ],
        answerIndex: 0,
        explanation: 'The correct syntax is h1 {background-color: #FFFFFF;}. The background-color property sets the background color of an element.'
      },
      {
        question: 'Which CSS property controls the text size?',
        options: ['font-style', 'text-size', 'font-size', 'text-style'],
        answerIndex: 2,
        explanation: 'The font-size property controls the size of text. It can be set using various units like pixels (px), em, rem, or percentages.'
      },
      {
        question: 'How do you make each word in a text start with a capital letter?',
        options: [
          'text-transform: capitalize',
          'text-style: capitalize',
          'transform: capitalize',
          'font-transform: capitalize'
        ],
        answerIndex: 0,
        explanation: 'The text-transform: capitalize property makes the first letter of each word uppercase while leaving other letters unchanged.'
      }
    ]
  },
  {
    category: 'JavaScript',
    difficulty: 'Intermediate',
    questions: [
      {
        question: 'What is the correct way to create a function in JavaScript?',
        options: [
          'function = myFunction() {}',
          'create myFunction() {}',
          'function myFunction() {}',
          'def myFunction() {}'
        ],
        answerIndex: 2,
        explanation: 'Functions in JavaScript are declared using the function keyword followed by the function name and parentheses: function myFunction() {}'
      },
      {
        question: 'How do you write "Hello World" in an alert box?',
        options: [
          'alertBox("Hello World");',
          'msg("Hello World");',
          'alert("Hello World");',
          'msgBox("Hello World");'
        ],
        answerIndex: 2,
        explanation: 'The alert() method displays an alert box with a specified message and an OK button: alert("Hello World");'
      },
      {
        question: 'What is the correct way to declare a JavaScript variable?',
        options: [
          'variable carName;',
          'var carName;',
          'v carName;',
          'declare carName;'
        ],
        answerIndex: 1,
        explanation: 'Variables can be declared using var, let, or const keywords. var carName; is the traditional way to declare a variable.'
      },
      {
        question: 'Which operator is used to assign a value to a variable?',
        options: ['*', '=', 'x', '-'],
        answerIndex: 1,
        explanation: 'The assignment operator (=) is used to assign a value to a variable. For example: var x = 5;'
      },
      {
        question: 'What will the following code return: Boolean(10 > 9)',
        options: ['true', 'false', '1', 'NaN'],
        answerIndex: 0,
        explanation: 'Boolean(10 > 9) returns true because 10 is greater than 9, and the Boolean() function converts the result to a boolean value.'
      }
    ]
  },
  {
    category: 'React',
    difficulty: 'Intermediate',
    questions: [
      {
        question: 'What is the purpose of useEffect in React?',
        options: [
          'To handle user input',
          'To manage side effects',
          'To update the DOM directly',
          'To create new components'
        ],
        answerIndex: 1,
        explanation: 'useEffect is used to handle side effects such as fetching data, subscriptions, or manually changing the DOM. It runs after render and can be controlled with dependencies.'
      },
      {
        question: 'What is JSX?',
        options: [
          'A JavaScript library',
          'A syntax extension for JavaScript',
          'A database query language',
          'A CSS framework'
        ],
        answerIndex: 1,
        explanation: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes React components more readable and easier to write.'
      },
      {
        question: 'How do you pass data from parent to child component?',
        options: ['State', 'Props', 'Context', 'Refs'],
        answerIndex: 1,
        explanation: 'Props (properties) are used to pass data from parent to child components. They are read-only and help make components reusable.'
      },
      {
        question: 'What hook is used to manage state in functional components?',
        options: ['useContext', 'useState', 'useEffect', 'useCallback'],
        answerIndex: 1,
        explanation: 'useState is the hook used to add state to functional components. It returns an array with the current state value and a function to update it.'
      },
      {
        question: 'What is the virtual DOM?',
        options: [
          'A browser API',
          'A JavaScript library',
          'An in-memory representation of the real DOM',
          'A CSS framework'
        ],
        answerIndex: 2,
        explanation: 'The virtual DOM is a programming concept where a virtual representation of the UI is kept in memory and synced with the real DOM. This helps optimize performance by minimizing direct DOM manipulation.'
      }
    ]
  }
];