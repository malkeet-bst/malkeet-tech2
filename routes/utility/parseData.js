const cheerio = require("cheerio");

const fetchUrl = async () => {
  let data = {};
  const url =
    "https://www.codementor.io/@dariogarciamoya/understanding--this--in-javascript-du1084lyn?icn=post-8i1jca6jp&ici=post-du1084lyn";
  let res = await axios
    .get(url)
    .then(async function(response) {
      // handle success
      return { data: getData(response.data) };
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
    });
  return res.data;
};
const getData = html => {
  let data = { content: "" };
  const $ = cheerio.load(html);
  $("p").each((index, elem) => {
    data.content += $(elem).text() + "\n\n";
  });

  return data;
};
