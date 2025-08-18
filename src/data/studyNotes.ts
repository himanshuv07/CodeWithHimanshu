interface StudyTopic {
  title: string;
  content: string;
  example?: string;
  points?: string[];
}

interface StudySection {
  id: string;
  title: string;
  description: string;
  topics: StudyTopic[];
}

interface StudyNotes {
  sections: StudySection[];
}

export const studyNotes: Record<string, StudyNotes> = {
  html: {
    sections: [
      {
        id: 'basics',
        title: 'HTML Basics',
        description: 'Learn the fundamental concepts of HTML structure and syntax.',
        topics: [
          {
            title: 'What is HTML?',
            content: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using markup tags.',
            example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is my first paragraph.</p>
</body>
</html>`,
          },
          {
            title: 'HTML Elements and Tags',
            content: 'HTML elements are the building blocks of HTML pages. They are represented by tags, which are keywords enclosed in angle brackets.',
            points: [
              'Opening tags: <tagname>',
              'Closing tags: </tagname>',
              'Self-closing tags: <br />, <img />',
              'Attributes provide additional information about elements'
            ],
            example: `<p class="highlight">This is a paragraph with a class attribute.</p>
<a href="https://example.com" target="_blank">This is a link</a>
<img src="image.jpg" alt="Description" width="300" height="200" />`
          }
        ]
      },
      {
        id: 'structure',
        title: 'Document Structure',
        description: 'Understanding the basic structure of an HTML document.',
        topics: [
          {
            title: 'HTML Document Structure',
            content: 'Every HTML document has a specific structure that browsers expect to find.',
            points: [
              'DOCTYPE declaration tells the browser which version of HTML to expect',
              'html element is the root element',
              'head contains metadata about the document',
              'body contains the visible content'
            ],
            example: `<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
    <meta charset="UTF-8">
</head>
<body>
    <h1>Main Heading</h1>
    <p>Content goes here</p>
</body>
</html>`
          }
        ]
      }
    ]
  },
  css: {
    sections: [
      {
        id: 'basics',
        title: 'CSS Fundamentals',
        description: 'Learn the core concepts of CSS styling and selectors.',
        topics: [
          {
            title: 'What is CSS?',
            content: 'CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the presentation of HTML elements.',
            example: `/* CSS Syntax */
selector {
    property: value;
}

/* Example */
h1 {
    color: blue;
    font-size: 24px;
    text-align: center;
}`,
          },
          {
            title: 'CSS Selectors',
            content: 'Selectors are patterns used to select the elements you want to style.',
            points: [
              'Element selector: p { }',
              'Class selector: .classname { }',
              'ID selector: #idname { }',
              'Universal selector: * { }',
              'Descendant selector: div p { }'
            ],
            example: `/* Element selector */
p {
    color: black;
}

/* Class selector */
.highlight {
    background-color: yellow;
}

/* ID selector */
#header {
    font-size: 32px;
}`
          }
        ]
      },
      {
        id: 'layout',
        title: 'CSS Layout',
        description: 'Understanding positioning, flexbox, and grid layout systems.',
        topics: [
          {
            title: 'Box Model',
            content: 'The CSS box model describes how the different parts of an element (content, padding, border, margin) are calculated.',
            points: [
              'Content: The actual content of the element',
              'Padding: Space between content and border',
              'Border: The border around the element',
              'Margin: Space outside the border'
            ],
            example: `div {
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}`
          }
        ]
      }
    ]
  },
  javascript: {
    sections: [
      {
        id: 'basics',
        title: 'JavaScript Fundamentals',
        description: 'Learn the core concepts of JavaScript programming.',
        topics: [
          {
            title: 'Variables and Data Types',
            content: 'JavaScript has several data types including numbers, strings, booleans, objects, and more.',
            example: `// Variable declarations
let name = "John";          // String
const age = 25;             // Number
var isStudent = true;       // Boolean
let grades = [90, 85, 92];  // Array
let person = {              // Object
    name: "Alice",
    age: 30
};`,
            points: [
              'let: Block-scoped variable',
              'const: Block-scoped constant',
              'var: Function-scoped variable',
              'Always use const for values that won\'t change',
              'Use let for variables that will be reassigned'
            ]
          },
          {
            title: 'Functions',
            content: 'Functions are reusable blocks of code that perform specific tasks.',
            example: `// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Usage
console.log(greet("Alice"));    // "Hello, Alice!"
console.log(add(5, 3));         // 8
console.log(multiply(4, 7));    // 28`
          }
        ]
      }
    ]
  },
  react: {
    sections: [
      {
        id: 'basics',
        title: 'React Fundamentals',
        description: 'Learn the core concepts of React library for building user interfaces.',
        topics: [
          {
            title: 'Components and JSX',
            content: 'React components are the building blocks of React applications. JSX is a syntax extension that allows you to write HTML-like code in JavaScript.',
            example: `// Functional component
function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// Arrow function component
const Greeting = ({ message }) => {
    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

// Usage
function App() {
    return (
        <div>
            <Welcome name="Alice" />
            <Greeting message="Welcome to React!" />
        </div>
    );
}`,
            points: [
              'Components must return JSX',
              'JSX expressions are wrapped in curly braces {}',
              'Components should start with a capital letter',
              'Props are passed as function parameters'
            ]
          },
          {
            title: 'State and Props',
            content: 'State is data that can change over time, while props are data passed from parent to child components.',
            example: `import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

// Parent component passing props
function App() {
    return <Counter initialValue={0} />;
}`
          }
        ]
      }
    ]
  },
  nodejs: {
    sections: [
      {
        id: 'basics',
        title: 'Node.js Fundamentals',
        description: 'Learn server-side JavaScript development with Node.js.',
        topics: [
          {
            title: 'What is Node.js?',
            content: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It allows you to run JavaScript on the server side.',
            example: `// Hello World in Node.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
            points: [
              'Built on Chrome\'s V8 JavaScript engine',
              'Event-driven, non-blocking I/O model',
              'Perfect for building scalable network applications',
              'Large ecosystem of packages via npm'
            ]
          }
        ]
      }
    ]
  },
  python: {
    sections: [
      {
        id: 'basics',
        title: 'Python Fundamentals',
        description: 'Learn the basics of Python programming language.',
        topics: [
          {
            title: 'Python Syntax and Variables',
            content: 'Python is known for its clean, readable syntax. Variables are created when you assign a value to them.',
            example: `# Variables and data types
name = "Alice"              # String
age = 25                    # Integer
height = 5.6               # Float
is_student = True          # Boolean

# Lists
fruits = ["apple", "banana", "orange"]

# Dictionaries
person = {
    "name": "Bob",
    "age": 30,
    "city": "New York"
}

# Print statements
print(f"Hello, {name}!")
print(f"Age: {age}, Height: {height}")`,
            points: [
              'No need to declare variable types',
              'Indentation is significant',
              'Case-sensitive language',
              'Dynamic typing'
            ]
          }
        ]
      }
    ]
  },
  typescript: {
    sections: [
      {
        id: 'basics',
        title: 'TypeScript Fundamentals',
        description: 'Learn static typing for JavaScript with TypeScript.',
        topics: [
          {
            title: 'Types and Interfaces',
            content: 'TypeScript adds static type definitions to JavaScript, helping catch errors at compile time.',
            example: `// Basic types
let name: string = "Alice";
let age: number = 25;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob"];

// Interfaces
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // Optional property
}

// Using the interface
const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};

// Functions with types
function greet(user: User): string {
  return \`Hello, \${user.name}!\`;
}`,
            points: [
              'Static type checking',
              'Better IDE support and autocomplete',
              'Interfaces for object shapes',
              'Optional and readonly properties'
            ]
          }
        ]
      }
    ]
  },
  vue: {
    sections: [
      {
        id: 'basics',
        title: 'Vue.js Fundamentals',
        description: 'Learn the progressive JavaScript framework Vue.js.',
        topics: [
          {
            title: 'Vue Components and Reactivity',
            content: 'Vue.js is a progressive framework for building user interfaces with reactive data binding.',
            example: `<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'My Vue App',
      count: 0,
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' }
      ]
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>`,
            points: [
              'Template-based syntax',
              'Reactive data binding',
              'Component-based architecture',
              'Directives for DOM manipulation'
            ]
          }
        ]
      }
    ]
  },
  angular: {
    sections: [
      {
        id: 'basics',
        title: 'Angular Fundamentals',
        description: 'Learn the full-featured framework Angular.',
        topics: [
          {
            title: 'Components and Services',
            content: 'Angular is a platform for building mobile and desktop web applications using TypeScript.',
            example: `// Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: \`
    <h1>{{ title }}</h1>
    <p>Count: {{ count }}</p>
    <button (click)="increment()">Increment</button>
  \`
})
export class HelloComponent {
  title = 'My Angular App';
  count = 0;

  increment() {
    this.count++;
  }
}

// Service
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData() {
    return ['Item 1', 'Item 2', 'Item 3'];
  }
}`,
            points: [
              'TypeScript by default',
              'Dependency injection',
              'Powerful CLI tools',
              'RxJS for reactive programming'
            ]
          }
        ]
      }
    ]
  },
  mongodb: {
    sections: [
      {
        id: 'basics',
        title: 'MongoDB Fundamentals',
        description: 'Learn NoSQL database operations with MongoDB.',
        topics: [
          {
            title: 'Documents and Collections',
            content: 'MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like documents.',
            example: `// Insert documents
db.users.insertOne({
  name: "Alice",
  email: "alice@example.com",
  age: 25,
  interests: ["coding", "reading"]
});

// Find documents
db.users.find({ age: { $gte: 18 } });

// Update documents
db.users.updateOne(
  { name: "Alice" },
  { $set: { age: 26 } }
);

// Delete documents
db.users.deleteOne({ name: "Alice" });

// Aggregation pipeline
db.users.aggregate([
  { $match: { age: { $gte: 18 } } },
  { $group: { _id: null, avgAge: { $avg: "$age" } } }
]);`,
            points: [
              'Document-based storage',
              'Flexible schema',
              'Powerful query language',
              'Horizontal scaling support'
            ]
          }
        ]
      }
    ]
  },
  sql: {
    sections: [
      {
        id: 'basics',
        title: 'SQL Fundamentals',
        description: 'Learn database queries and operations with SQL.',
        topics: [
          {
            title: 'Basic SQL Operations',
            content: 'SQL (Structured Query Language) is used to communicate with relational databases.',
            example: `-- Create table
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  age INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert data
INSERT INTO users (name, email, age) 
VALUES ('Alice', 'alice@example.com', 25);

-- Select data
SELECT * FROM users WHERE age >= 18;

-- Update data
UPDATE users SET age = 26 WHERE name = 'Alice';

-- Delete data
DELETE FROM users WHERE id = 1;

-- Join tables
SELECT u.name, p.title 
FROM users u 
JOIN posts p ON u.id = p.user_id;`,
            points: [
              'CRUD operations (Create, Read, Update, Delete)',
              'Joins for combining tables',
              'Indexes for performance',
              'Transactions for data integrity'
            ]
          }
        ]
      }
    ]
  },
  git: {
    sections: [
      {
        id: 'basics',
        title: 'Git Fundamentals',
        description: 'Learn version control with Git.',
        topics: [
          {
            title: 'Basic Git Commands',
            content: 'Git is a distributed version control system for tracking changes in source code.',
            example: `# Initialize a repository
git init

# Add files to staging
git add .
git add filename.txt

# Commit changes
git commit -m "Initial commit"

# Check status
git status

# View commit history
git log

# Create and switch branches
git branch feature-branch
git checkout feature-branch
# Or in one command
git checkout -b feature-branch

# Merge branches
git checkout main
git merge feature-branch

# Remote operations
git remote add origin https://github.com/user/repo.git
git push origin main
git pull origin main`,
            points: [
              'Track changes in files',
              'Branching and merging',
              'Distributed development',
              'Collaboration with remote repositories'
            ]
          }
        ]
      }
    ]
  }
};