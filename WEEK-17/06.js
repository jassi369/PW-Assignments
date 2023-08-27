const users = {
    johnDoe: "https://www.linkedin.com/in/john-doe123",
    annaSmith: "https://www.linkedin.com/in/anna_smith",
    markJones: "https://www.linkedin.com/in/mark_jones",
    invalidUser1: "https://www.linkedin.com/in/123",
    invalidUser2: "https://www.linkedin.com/in/longusernamethatiswaytoolong12345",
    invalidUser3: "https://www.linkedin.com/in/invalid@user"
  };
  const urlPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}\w/;
  function validator(url){
    const result = urlPattern.test(url);
    return result
  }
  for(let user in users){
    let url = users[user];
    if(validator(url)){
        console.log(`${url} is a valid LinkedIn profile URL.`);
    }
    else{
        console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
  }
  