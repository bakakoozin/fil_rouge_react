export const searchBooks = async (query = "bande dessinée") => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}?q=${query}&printType=books&maxResults=20&key=${import.meta.env.VITE_API_KEY}`);
      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      throw error;
    }
  };