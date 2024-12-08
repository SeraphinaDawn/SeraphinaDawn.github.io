export const config = {
  github: {
    login: "SeraphinaDawn", // github login name, not user name
    repo: "SeraphinaDawn.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "AhNan's Blog",
  },
  footer: {
    copyright: "© AhNan Blog",
    copyrightUrl: "https://github.com/SeraphinaDawn",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
