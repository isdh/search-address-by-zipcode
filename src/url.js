import fetchJsonp from "fetch-jsonp";
/**
 *
 * @param {string} zipcode
 */
export const createURL = (zipcode) => {
  const zipSearchURL = "https://zipcloud.ibsnet.co.jp/api/search";
  return `${zipSearchURL}?zipcode=${zipcode}&limit=100`;
};

export const fetchAddressFromURL = async (url) => {
  try {
    const response = await fetchJsonp(url);
    if (!response.ok) {
      throw new Error(response.json());
    }
    console.log(response);
    const json = await response.json();
    if (json.status === 200) {
      console.log(json);
      return json.results;
    } else if (json.status === 400 || json.status === 500 ) {
      console.error(json);
      return json.result;
    }
  } catch (e) {
    console.error(e);
  }
}