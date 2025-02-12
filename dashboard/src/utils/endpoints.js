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
  comments: {
    getAll: "/comments",
    getOne: "/comments",
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
  enquiries: {
    getAll: "/enquiries",
  },
  queries: {
    getAll: "/queries",
  },
  shares: {
    getAll: "/shares",
    getOne: "/shares/getById",
    getFormattedShareDetails: "/shares/get-formatted-share-details",
  },
};
