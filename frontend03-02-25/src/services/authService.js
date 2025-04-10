import api from "../api/apiendpoint";

const AuthService = {
  // Local Login
  login: async (email, password) => {
    try {
      const response = await api.post("/api/auth/login", {
        email,
        password,
      });

      // Store token if login is successful
      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
      }

      return response.data;
    } catch (error) {
      // Throw meaningful error message
      throw error.response?.data?.message || error.message || "Login failed";
    }
  },

  // OAuth Login URLs
  getGoogleLoginUrl: () => `${process.env.REACT_APP_API_URL}/api/auth/google`,
  getFacebookLoginUrl: () =>
    `${process.env.REACT_APP_API_URL}/api/auth/facebook`,

  // Logout
  logout: () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  },

  // Check Authentication Status
  isAuthenticated: () => {
    return !!localStorage.getItem("authToken");
  },
};

export default AuthService;
