// QUERYING DATA BASED ON A GIVEN SEARCH GENRE

$(document).ready(function () {
  $(".dropdown-trigger").dropdown();
});

function searchPhotos() {
  let search = document.getElementById("#search").val();
  // to search a list of photos based on query
  var apiKey = "HW9N_DcouND3LdAQFb-NUM_s-4BDQtFZ4R7_JANDOaM";
  var url = `https://api.unsplash.com/search/photos/?page=5&client_id=${apiKey}&query=${search}`;
  $.ajax({
    url: url,
    method: "GET",
  }).then(function (response) {
    var image1 = response.results[0].urls.regular;
    console.log(response);
    console.log(image1);

    $("#list")
      .children(".item-image1")
      .html(
        $("<img>", {
          src: image1,
          alt: "image1Icon",
          width: "350px",
          height: "200px",
        })
      );

    var image2 = response.results[1].urls.regular;
    $("#list")
      .children(".item-image2")
      .html(
        $("<img>", {
          src: image2,
          alt: "image2Icon",
          width: "350px",
          height: "250px",
        })
      );

    $("#result").append(result);
    // document.getElementById("result").append(result);
  });
}
