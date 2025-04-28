import { useState } from "react";
import axios from "axios";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get("http://localhost:8000/api/customers/" + username + '/' + password);
      setLoading(false);
      return response.data; // Return the response data
    } catch (err: any) {
      setLoading(false);
      setError(err.response?.data?.message || "An error occurred");
      throw err;
    }
  };

  return { login, loading, error };
};

export default useLogin;