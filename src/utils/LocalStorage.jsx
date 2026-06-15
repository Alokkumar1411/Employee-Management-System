const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page using React.",
        taskDate: "2025-08-20",
        taskCategory: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve mobile navigation menu issue.",
        taskDate: "2025-08-18",
        taskCategory: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Write Documentation",
        taskDescription: "Document authentication workflow.",
        taskDate: "2025-08-25",
        taskCategory: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },

  {
    id: 2,
    firstName: "Sneha",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Database Backup",
        taskDescription: "Create weekly database backup.",
        taskDate: "2025-08-19",
        taskCategory: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "API Integration",
        taskDescription: "Integrate payment gateway API.",
        taskDate: "2025-08-21",
        taskCategory: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Server Monitoring",
        taskDescription: "Check production server logs.",
        taskDate: "2025-08-17",
        taskCategory: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },

  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "Create Dashboard UI",
        taskDescription: "Build employee dashboard components.",
        taskDate: "2025-08-22",
        taskCategory: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Fix Authentication Bug",
        taskDescription: "Resolve JWT token expiration issue.",
        taskDate: "2025-08-16",
        taskCategory: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Unit Testing",
        taskDescription: "Write tests for dashboard APIs.",
        taskDate: "2025-08-24",
        taskCategory: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },

  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "SEO Optimization",
        taskDescription: "Improve website SEO score.",
        taskDate: "2025-08-20",
        taskCategory: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Bug Review",
        taskDescription: "Review and verify reported bugs.",
        taskDate: "2025-08-15",
        taskCategory: "QA",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Prepare Report",
        taskDescription: "Generate weekly progress report.",
        taskDate: "2025-08-23",
        taskCategory: "Management",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },

  {
    id: 5,
    firstName: "Aman",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Client Meeting",
        taskDescription: "Attend requirement gathering meeting.",
        taskDate: "2025-08-19",
        taskCategory: "Communication",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Refactor Code",
        taskDescription: "Improve code readability and structure.",
        taskDate: "2025-08-18",
        taskCategory: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Deploy Application",
        taskDescription: "Deploy latest version to production.",
        taskDate: "2025-08-26",
        taskCategory: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = ()=>{
  // console.log('hello')
  localStorage.setItem('employees',JSON.stringify(employees)) // agr local storage me kuch save krna hai to ham ye use krtw hai
  localStorage.setItem('admin',JSON.stringify(admin)) // agr local storage me kuch save krna hai to ham ye use krtw hai
}
export const getLocalStorage = ()=>{
  const employees=JSON.parse(localStorage.getItem('employees'))// agr data lena ho local storage se
  const admin=JSON.parse(localStorage.getItem('admin'))// agr data lena ho local storage se
  // console.log(JSON.parse(data))
  return {employees,admin}
  
}