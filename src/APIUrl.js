let APIUrl = "http://localhost:3001";

// handle if we are running heroku
if (window.location.host.indexOf(".herokuapp.com") !== -1) {
    APIUrl = "https://christiharlow-blog-backend.herokuapp.com/";
}

export default APIUrl;
