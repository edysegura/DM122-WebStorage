const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log(`👁️ [app.js] button clicked`);
  // fetchFromNetwork("https://nonexist/api/v2/pokemon/150");
  fetchFromNetwork("https://httpbin.org/status/500");
});

async function fetchFromNetwork(url) {
  console.log(`👁️ [app.js] fetching data...`);
  const response = await fetch(url);
  if (!response.ok) {
    console.log(
      `Error on requesting ${url} with status code ${response.status}`
    );
    return;
  }
  console.log(
    `👁️ [app.js] response content-type`,
    response.headers.get("content-type")
  );
  return response.json();
}
