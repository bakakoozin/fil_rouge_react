export const searchBnFComics = async () => {
    try {
        const response = await fetch(
          "https://api.bnf.fr/sites/default/files/2020-11/api-bnf-SRU_Catalogue-2.0-swagger.yaml"
        );
    
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
  