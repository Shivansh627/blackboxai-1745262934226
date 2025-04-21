const users = [
  {
    id: 1,
    username: 'user1',
    password: 'password1',
    email: 'user1@example.com',
    fullName: 'User One',
  },
  {
    id: 2,
    username: 'user2',
    password: 'password2',
    email: 'user2@example.com',
    fullName: 'User Two',
  },
];

const aiAgents = [
  {
    id: 1,
    name: 'Agent Alpha',
    description: 'AI agent for data analysis',
  },
  {
    id: 2,
    name: 'Agent Beta',
    description: 'AI agent for customer support',
  },
];

const dashboardData = {
  stats: {
    users: users.length,
    activeAgents: aiAgents.length,
  },
  recentActivities: [
    'User1 logged in',
    'Agent Alpha completed task',
    'User2 registered',
  ],
};

export function login(username, password) {
  return new Promise((resolve, reject) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    setTimeout(() => {
      if (user) {
        resolve({ success: true, user });
      } else {
        resolve({ success: false, message: 'Invalid credentials' });
      }
    }, 500);
  });
}

export function register(newUser) {
  return new Promise((resolve, reject) => {
    const exists = users.some((u) => u.username === newUser.username);
    setTimeout(() => {
      if (exists) {
        resolve({ success: false, message: 'Username already exists' });
      } else {
        newUser.id = users.length + 1;
        users.push(newUser);
        resolve({ success: true, user: newUser });
      }
    }, 500);
  });
}

export function fetchAIAgents() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(aiAgents);
    }, 500);
  });
}

export function fetchDashboardData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dashboardData);
    }, 500);
  });
}
