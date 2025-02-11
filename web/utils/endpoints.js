export const endpoints = {
  auth: {
    login: "/auth/login",
    otp: "/auth/otp",
    signup: "/auth/signup",
    refresh: "/auth/refresh",
    username: "/auth/username",
  },

  profile: "/users/me",
  users: { getAll: "/users" },
  files: {
    upload: "/upload/files",
    getFiles: "/upload",
  },
  shares: {
    getAll: "/shares",
  },
  investments: {
    getAll: "/investments",
  },
  transactions: {
    getAll: "/transactions",
  },
  sectors: {
    getAll: "/sectors",
  },
  blogs: {
    getAll: "/blogs",
  },
  queries: {
    getAll: "/queries",
  },
  enquiries: {
    getAll: "/enquiries",
  },
  comments: {
    getAll: "/comments",
  },
};
