//help you work in URL

//https://api.example.com/users?page=2&limit=8

function runUrlDemo(): void {
  //how to create url object from URL
  const apiUrl = new URL("https://api.example.com/users?page=2&limit=8");

  console.log(
    apiUrl.href,
    apiUrl.protocol,
    apiUrl.hostname,
    apiUrl.pathname,
    apiUrl.search,
  );

  //?
  const page = apiUrl.searchParams.get("page");
  const limit = apiUrl.searchParams.get("limit");
  console.log(page, limit);

  apiUrl.searchParams.set("page", "10"); // changes to 10
  apiUrl.searchParams.set("limt", "20"); //chnange to 20

  //very imp URLsearch params

  const queryParamss = new URLSearchParams({
    search: "node js",
    page: "1",
    limit: "4",
  });
  console.log(queryParamss.toString());
}

runUrlDemo();
