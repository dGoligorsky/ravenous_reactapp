const apiKey =
  "GYv_wmZnD34WpYMWsbWU-75IlEV95anMwynraEZdKdtlYDyT5yOhGo_WfpFs8gcUWRlBkBGw2-aGYKK-_ecmV43gsetDIQsH_DEU7YLskZxLWZnGD_4z7I4d3uSZXnYx";
const endpoint = "https://api.yelp.com/v3/businesses/search";
const corsAnywhereEndpoint = "https://cors-anywhere.herokuapp.com/";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `${corsAnywhereEndpoint}${endpoint}?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        }
      });
  },
};

export default Yelp;
