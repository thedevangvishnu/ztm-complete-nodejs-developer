const http = require("http");

const myServer = http.createServer();
myServer.on("request", (req, res) => {
  //   res.writeHead(200, {
  //     "content-type": "application/json",
  //   });

  if (req.url === "/") {
    res.statusCode === 200;
    res.setHeader("content-type", "text/html");

    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Welcome to my Nodejs Server!</h1>");
    res.write("</body>");
    res.write("</html>");

    res.end();
  } else if (req.url === "/user") {
    res.statusCode === 200;
    res.setHeader("content-type", "application/json");

    res.end(
      JSON.stringify({
        id: 1,
        userName: "Devang Vishnu",
        numberOfPosts: 25,
      })
    );
  } else if (req.url === "/messages") {
    res.statusCode === 200;
    res.setHeader("content-type", "text/html");

    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Message from Andy: How are you doing?</li>");
    res.write("<li>Message from John: Are you learning Nodejs http?</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");

    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

myServer.listen(3000);
