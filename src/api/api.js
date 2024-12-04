export const getCountries = async () => {
  try {
    const response = await fetch(
      "https://crio-location-selector.onrender.com/countries"
    );
    const data = await response.json();
    console.log("Countries: ", data);
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

export const getStates = async (country) => {
    try {
      const response = await fetch(
        `https://crio-location-selector.onrender.com/country=${country}/states`
      );
      const data = await response.json();
      console.log("States: ", data);
      return data;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  export const getCities = async (country, state) => {
    try {
      const response = await fetch(
        `https://crio-location-selector.onrender.com/country=${country}/state=${state}/cities`
      );
      const data = await response.json();
      console.log("Cities: ", data);
      return data;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
