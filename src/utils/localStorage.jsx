const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e1@me.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Landing Page",
        description: "Create UI for homepage",
        date: "2026-04-03",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve responsive issue",
        date: "2026-04-01",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API Integration",
        description: "Integrate weather API",
        date: "2026-04-02",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "e2@me.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Build Login Page",
        description: "Create login UI + validation",
        date: "2026-04-03",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Setup Auth",
        description: "Implement JWT auth",
        date: "2026-04-02",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix CSS Issues",
        description: "Resolve layout bugs",
        date: "2026-04-01",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy App",
        description: "Deploy on Vercel",
        date: "2026-04-02",
        category: "DevOps"
      }
    ]
  },
  {
    id: 3,
    firstName: "Kabir",
    email: "e3@me.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Dashboard",
        description: "Build admin dashboard UI",
        date: "2026-04-03",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write API Docs",
        description: "Document all endpoints",
        date: "2026-04-01",
        category: "Documentation"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Optimize Queries",
        description: "Improve DB performance",
        date: "2026-04-02",
        category: "Database"
      }
    ]
  },
  {
    id: 4,
    firstName: "Rohan",
    email: "e4@me.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Animations",
        description: "Use GSAP for animations",
        date: "2026-04-03",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Scroll Bug",
        description: "Smooth scrolling issue",
        date: "2026-04-01",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Test UI",
        description: "Cross-browser testing",
        date: "2026-04-02",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Refactor Code",
        description: "Clean React components",
        date: "2026-04-03",
        category: "Code Quality"
      }
    ]
  },
  {
    id: 5,
    firstName: "Arjun",
    email: "e5@me.com",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Setup Database",
        description: "Configure MongoDB",
        date: "2026-04-03",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Create Models",
        description: "Define schemas",
        date: "2026-04-02",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Bug Fixing",
        description: "Fix login errors",
        date: "2026-04-01",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API Testing",
        description: "Test endpoints",
        date: "2026-04-02",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Security Setup",
        description: "Add hashing & validation",
        date: "2026-04-03",
        category: "Security"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Divy",
    email: "admin@me.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return {employees, admin};
}