const urlPattern = /^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/;
const urls = {
  url1: "http://facebook.com",
  url2: "https://sub.example.co.uk/page",
  url3: "ftp://invalid.com",
};

for (const url in urls) {
  const result = urlPattern.test(urls[url]);
  if (result == true) {
    console.log("Input Matches");
  } else {
    console.log("Input not Matches");
  }
}
