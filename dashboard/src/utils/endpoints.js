export const endpoints = {
  auth: {
    login: "/auth/login",
    signup: "/auth/register",
    refresh: "/auth/refresh",
    username: "/auth/username",
    verifyOtp: "/auth/verify",
  },
  files: {
    upload: "/upload/files",
    getFiles: "/upload",
  },
  profile: "/users/me",
  users: { getAll: "/users" },
  reports: { getAll: "/reports" },
  sectors: {
    getAll: "/sectors",
    getOne: "/sectors/getById",
  },
  events: {
    getAll: "/events",
  },
  promoters: {
    getAll: "/promoters",
  },
  blogs: {
    getAll: "/blogs",
  },
  shares: {
    getAll: "/shares",
    getOne: "/shares/getById",
  },
};
