export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  difficulty: string;
  questionsCount: number;
  avgTime: string;
  completions: number;
}

export const categories: Category[] = [
  {
    id: 'html',
    name: 'HTML',
    description: 'Master the foundation of web development with HTML structure and semantics.',
    icon: '📄',
    color: 'bg-orange-100 dark:bg-orange-900',
    difficulty: 'Beginner',
    questionsCount: 25,
    avgTime: '15 min',
    completions: 15420
  },
  {
    id: 'css',
    name: 'CSS',
    description: 'Learn styling, animations, and responsive design with modern CSS.',
    icon: '🎨',
    color: 'bg-blue-100 dark:bg-blue-900',
    difficulty: 'Beginner',
    questionsCount: 30,
    avgTime: '20 min',
    completions: 12350
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Dive deep into ES6+, async programming, and DOM manipulation.',
    icon: '⚡',
    color: 'bg-yellow-100 dark:bg-yellow-900',
    difficulty: 'Intermediate',
    questionsCount: 40,
    avgTime: '25 min',
    completions: 18750
  },
  {
    id: 'react',
    name: 'React',
    description: 'Build modern UIs with hooks, state management, and component patterns.',
    icon: '⚛️',
    color: 'bg-blue-100 dark:bg-blue-900',
    difficulty: 'Intermediate',
    questionsCount: 35,
    avgTime: '30 min',
    completions: 9840
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    description: 'Server-side development with Express, APIs, and database integration.',
    icon: '🟢',
    color: 'bg-green-100 dark:bg-green-900',
    difficulty: 'Intermediate',
    questionsCount: 30,
    avgTime: '25 min',
    completions: 7650
  },
  {
    id: 'python',
    name: 'Python',
    description: 'From basics to advanced concepts including OOP and data structures.',
    icon: '🐍',
    color: 'bg-blue-100 dark:bg-blue-900',
    difficulty: 'Beginner',
    questionsCount: 45,
    avgTime: '35 min',
    completions: 22100
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    description: 'Static typing for JavaScript with interfaces, generics, and more.',
    icon: '📘',
    color: 'bg-blue-100 dark:bg-blue-900',
    difficulty: 'Advanced',
    questionsCount: 25,
    avgTime: '30 min',
    completions: 5420
  },
  {
    id: 'vue',
    name: 'Vue.js',
    description: 'Progressive framework with reactive data and component composition.',
    icon: '💚',
    color: 'bg-green-100 dark:bg-green-900',
    difficulty: 'Intermediate',
    questionsCount: 28,
    avgTime: '25 min',
    completions: 4830
  },
  {
    id: 'angular',
    name: 'Angular',
    description: 'Full-featured framework with dependency injection and RxJS.',
    icon: '🅰️',
    color: 'bg-red-100 dark:bg-red-900',
    difficulty: 'Advanced',
    questionsCount: 32,
    avgTime: '35 min',
    completions: 3920
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    description: 'NoSQL database operations, aggregation, and data modeling.',
    icon: '🍃',
    color: 'bg-green-100 dark:bg-green-900',
    difficulty: 'Intermediate',
    questionsCount: 22,
    avgTime: '20 min',
    completions: 6750
  },
  {
    id: 'sql',
    name: 'SQL',
    description: 'Database queries, joins, indexes, and performance optimization.',
    icon: '🗃️',
    color: 'bg-gray-100 dark:bg-gray-900',
    difficulty: 'Intermediate',
    questionsCount: 35,
    avgTime: '25 min',
    completions: 11200
  },
  {
    id: 'git',
    name: 'Git',
    description: 'Version control, branching strategies, and collaboration workflows.',
    icon: '📚',
    color: 'bg-orange-100 dark:bg-orange-900',
    difficulty: 'Beginner',
    questionsCount: 20,
    avgTime: '15 min',
    completions: 13400
  }
];