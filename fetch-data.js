export default async function fetchData() {
  try {
    const response = await fetch('data.json')
    const json = await response.json();
    return json;
  } catch(error) {
    console.log(error);
  }
}

fetchData();