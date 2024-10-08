const apiCall = (url) => {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        throw error;
      });
  };

  export default apiCall