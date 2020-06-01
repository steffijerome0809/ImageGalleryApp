
$(document).ready(function () {
  $(".dropdown-trigger").dropdown();

  $(".sidenav").sidenav();
});

// modal open...
$("img").on("click", (e) => {});

//$(document).ready(function () {});

// Dynamic Imaged in modal ...

function clickimage() {
  //append to the span tag
  var imageDivThatwasclicked = $(this);
  var imageurl = imageDivThatwasclicked.children("div img").attr("src");

  console.log(imageurl);

  var count = localStorage.getItem(imageurl);

  console.log(count);
  $("#like-button").append($(".modal-content .likespan").text(count));

  $("#modal1 img").attr("src", imageurl);
  $("#modal1 img").attr("id", imageurl);
}

// making grid dynamic
// iterate over response images
// $("#list").append(newItem.append(newImage));

// loads on ready
function clearPhotoGrid() {
  $("#list").html("");
}
//unsplash onREADY
$(document).ready(() => {
  // Dropdown , SideNavBar, Modal Pop-Up
  $(".dropdown-trigger").dropdown();
  $(".sidenav").sidenav();

  $(document).on("click", ".item", clickimage);
  $(".modal").modal();

  let search = "most popular";
  var apiKey = "HW9N_DcouND3LdAQFb-NUM_s-4BDQtFZ4R7_JANDOaM";
  randomPage = Math.round(Math.random() * 27);
  var url = `https://api.unsplash.com/search/photos/?page=${randomPage}&client_id=${apiKey}&query=${search}`;
  // only gives 10 responses so can only run 10 times then we have to run this entire code again for another 10
  function makePopularGrid() {
    for (let i = 0; i < 10; i++) {
      $.get(url).then((response) => {
        // make new image at [i], make new div. append image to div. append div to list

        randomHeight = Math.round(Math.random() * (20 - 8) + 8);
        newItem = $("<div>", {
          class: "item modal-trigger",
          height: `${randomHeight}em`,
          "data-target": "modal1",
        });
        newImage = $("<img>", { src: response.results[i].urls.regular });
        $("#list").append(newItem.append(newImage));
      });
    }
  }
  makePopularGrid();

  //find a way to get more than 10 responses
});
// Giphy onREADY
$(document).ready(() => {
  let giphSearch = "popular";
  var api_key = "s02hiQd6APdDVB10fdIxKJXAYvwQQ233";
  var queryURL = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=15`;
  function makeGiphyGrid() {
    for (let i = 0; i < 10; i++) {
      $.get(queryURL).then((response) => {
        //console.log(response);
        randomHeight = Math.round(Math.random() * (20 - 8) + 8);
        newItem = $("<div>", {
          class: "item modal-trigger",
          height: `${randomHeight}em`,
          "data-target": "modal1",
        });
        newGiph = $("<img>", { src: response.data[i].images.original.url });
        $("#list").append(newItem.append(newGiph));
      });
    }
  }
  makeGiphyGrid();
});

//search button...
$("#searchButton").on("click", (e) => {
  e.preventDefault();
  $("#searchButton").html("");
  let search = $("#search").val();
  var apiKey = "HW9N_DcouND3LdAQFb-NUM_s-4BDQtFZ4R7_JANDOaM";
  var url = `https://api.unsplash.com/search/photos/?page=5&client_id=${apiKey}&query=${search}`;
  // only gives 10 responses so can only run 10 times then we have to run this entire code again for another 10
  for (let i = 0; i < 10; i++) {
    $.get(url).then((response) => {
      // make new image at [i], make new div. append image to div. append div to list
      randomHeight = Math.round(Math.random() * (20 - 8) + 8);
      newItem = $("<div>", {
        class: "item modal-trigger",
        height: `${randomHeight}em`,
        "data-target": "modal1",
      });
      newImage = $("<img>", { src: response.results[i].urls.regular });
      $("#list").append(newItem.append(newImage));
    });
  }
});
//search giphs
$("#searchButton").on("click", (e) => {
  clearPhotoGrid();
  let giphSearch = $("#search").val();
  var api_key = "s02hiQd6APdDVB10fdIxKJXAYvwQQ233";
  var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${giphSearch}&limit=10`;
  function makeGiphyGrid() {
    for (let i = 0; i < 10; i++) {
      $.get(queryURL).then((response) => {
        randomHeight = Math.round(Math.random() * (20 - 8) + 8);
        newItem = $("<div>", {
          class: "item modal-trigger",
          height: `${randomHeight}em`,
          "data-target": "modal1",
        });
        newGiph = $("<img>", {
          src: response.data[i].images.original.url,
        });
        $("#list").append(newItem.append(newGiph));
      });
    }
  }

  makeGiphyGrid();
});


// genres
// animals
$("#animals").on("click", (e) => {
  e.preventDefault();
  let search = "animals";
  var apiKey = "HW9N_DcouND3LdAQFb-NUM_s-4BDQtFZ4R7_JANDOaM";
  var url = `https://api.unsplash.com/search/photos/?page=5&client_id=${apiKey}&query=${search}`;
  // only gives 10 responses so can only run 10 times then we have to run this entire code again for another 10
  for (let i = 0; i < 10; i++) {
    $.get(url).then((response) => {
      // make new image at [i], make new div. append image to div. append div to list
      randomHeight = Math.round(Math.random() * (20 - 8) + 8);
      newItem = $("<div>", {
        class: "item modal-trigger",
        height: `${randomHeight}em`,
        "data-target": "modal1",
      });
      newImage = $("<img>", { src: response.results[i].urls.regular });
      $("#list").append(newItem.append(newImage));
    });
  }
});
//search giphs
$("#animals").on("click", (e) => {
  clearPhotoGrid();
  let giphSearch = "animals";
  var api_key = "s02hiQd6APdDVB10fdIxKJXAYvwQQ233";
  var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${giphSearch}&limit=10`;
  function makeGiphyGrid() {
    for (let i = 0; i < 10; i++) {
      $.get(queryURL).then((response) => {
        randomHeight = Math.round(Math.random() * (20 - 8) + 8);
        newItem = $("<div>", {
          class: "item modal-trigger",
          height: `${randomHeight}em`,
          "data-target": "modal1",
        });
        newGiph = $("<img>", {
          src: response.data[i].images.original.url,
        });
        $("#list").append(newItem.append(newGiph));
      });
    }
  }

  makeGiphyGrid();
});
// cars
$("#cars").on("click", (e) => {
  e.preventDefault();
  let search = "cars";
  var apiKey = "HW9N_DcouND3LdAQFb-NUM_s-4BDQtFZ4R7_JANDOaM";
  var url = `https://api.unsplash.com/search/photos/?page=5&client_id=${apiKey}&query=${search}`;
  // only gives 10 responses so can only run 10 times then we have to run this entire code again for another 10
  for (let i = 0; i < 10; i++) {
    $.get(url).then((response) => {
      // make new image at [i], make new div. append image to div. append div to list
      randomHeight = Math.round(Math.random() * (20 - 8) + 8);
      newItem = $("<div>", {
        class: "item modal-trigger",
        height: `${randomHeight}em`,
        "data-target": "modal1",
      });
      newImage = $("<img>", { src: response.results[i].urls.regular });
      $("#list").append(newItem.append(newImage));
    });
  }
});
//search giphs
$("#cars").on("click", (e) => {
  clearPhotoGrid();
  let giphSearch = "cars";
  var api_key = "s02hiQd6APdDVB10fdIxKJXAYvwQQ233";
  var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${giphSearch}&limit=10`;
  function makeGiphyGrid() {
    for (let i = 0; i < 10; i++) {
      $.get(queryURL).then((response) => {
        randomHeight = Math.round(Math.random() * (20 - 8) + 8);
        newItem = $("<div>", {
          class: "item modal-trigger",
          height: `${randomHeight}em`,
          "data-target": "modal1",
        });
        newGiph = $("<img>", {
          src: response.data[i].images.original.url,
        });
        $("#list").append(newItem.append(newGiph));
      });
    }
  }

  makeGiphyGrid();
});
//art
$("#art").on("click", (e) => {
  e.preventDefault();
  let search = "art";
  var apiKey = "HW9N_DcouND3LdAQFb-NUM_s-4BDQtFZ4R7_JANDOaM";
  var url = `https://api.unsplash.com/search/photos/?page=5&client_id=${apiKey}&query=${search}`;
  // only gives 10 responses so can only run 10 times then we have to run this entire code again for another 10
  for (let i = 0; i < 10; i++) {
    $.get(url).then((response) => {
      // make new image at [i], make new div. append image to div. append div to list
      randomHeight = Math.round(Math.random() * (20 - 8) + 8);
      newItem = $("<div>", {
        class: "item modal-trigger",
        height: `${randomHeight}em`,
        "data-target": "modal1",
      });
      newImage = $("<img>", { src: response.results[i].urls.regular });
      $("#list").append(newItem.append(newImage));
    });
  }
});
//search giphs
$("#art").on("click", (e) => {
  clearPhotoGrid();
  let giphSearch = "art";
  var api_key = "s02hiQd6APdDVB10fdIxKJXAYvwQQ233";
  var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${giphSearch}&limit=10`;
  function makeGiphyGrid() {
    for (let i = 0; i < 10; i++) {
      $.get(queryURL).then((response) => {
        randomHeight = Math.round(Math.random() * (20 - 8) + 8);
        newItem = $("<div>", {
          class: "item modal-trigger",
          height: `${randomHeight}em`,
          "data-target": "modal1",
        });
        newGiph = $("<img>", {
          src: response.data[i].images.original.url,
        });
        $("#list").append(newItem.append(newGiph));
      });
    }
  }

  makeGiphyGrid();
});

// like button gives a display of likes for the particular image
$("#like-button").on("click", function (event) {
  event.preventDefault();

  console.log("like", $(this));
  var name = $(this).siblings("img").attr("src");

  // get the item from local storage
  var value = localStorage.getItem(name);
  if (value) {
    // turn the value into a number
    value = parseInt(value);
  } else {
    value = 0;
  }

  value++;
  // check to make sure that the item from local storage exists

  // increment the number by one
  localStorage.setItem(name, value);
  $(".modal-content .likespan").text(value);
  // localStorage.setItem(name, value)
});


// now to make the same thing but for giphy!

// //PseudoCode
// FEATURES:
// 1 Main page with several photos.
// 1-A: -Create div to put the images
// 1-B: -Make sure it is fluid and responsive for mobile/desktop
// 1-C: - Endless scroll
// 1-D: Make it so several photos can be viewed at oncuechange
// 1-D1: Resize images
// 1-D2: Put images on to a grid

// 2Navigation Bar
// 2-A: Search bar
// 2-B: Genre dropdown
// 2-C: Home button
// 2-D: Make a logo and put it there

// 3. GET IMAGES
// 3-A: Make ajax request to api
// 3-B: template literal for queries
// 3-C: See what type of data the requests give us (i.e artist/likes/genre etc)
// 3-C1:

// 4. pages for genres

// 6. Image on click opens modal
// 6-A: Modal for images
// 6-A1: Image view counter
// 6-B: img url
// //                                                                   Extra
// 7. Sort
// 8. Upload!
// 5. Share
