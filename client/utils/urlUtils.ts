export const getAPIUrl = (path: string) => {
  const devUrl = `http://localhost:8080/api/${path}`;
  const prodUrl = `https://api-desk.vercel.app/api/${path}`;

  return process.env.NODE_ENV === "development" ? devUrl : prodUrl;
};

export const getAppUrl = (path: string) => {
  const devUrl = `http://localhost:3000/${path}`;
  const prodUrl = `https://desk.vercel.app/${path}`;

  return process.env.NODE_ENV === "development" ? devUrl : prodUrl;
};
