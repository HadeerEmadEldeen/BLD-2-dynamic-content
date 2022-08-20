let body = document.getElementsByTagName("body");
body.addEventListener("load", get_courses());

function render (title, image, author, price) {
  Elementofcource = document.getElementById("cards-element");
  let CourseHTML =
 `
            <div id="cards-element" class="new-cards marginrl ">
            <a class="course" href="/course/learning-python-for-data-analysis-and-visualization/"><img
            src="` +
    image +
    `" alt="pyhon" />
          <h3>` +
    title +
    `</h3>
          <h4 class="color-p">` +
    author +
    `</h4>
          <div>
            <span class="checked">` +
    price +
    `</span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star-half-full checked"></span>
            <span class="color-p">(17.972)</span>
          </div>
          <h5>E£1.599.99</h5>
        </a>
            </div>
            `;
            Elementofcource.innerHTML += CourseHTML;
};
function get_courses() {
    fetch("http://localhost:3000/courses")
    .then((res) => res.json())
    .then((json) => {
      Object.entries(json).forEach(([key, value]) => {
        let title = value["title"];
        let image = value["image"];
        let author = value["author"];
        let price = value["price"];
        render(title, image, author, price);
      });
    });
};

function searchButton  ()  {
  let search_ele = document.getElementById("inputSearch").value;
  Elementofcource = document.getElementById("cards-element");
  Elementofcource.innerHTML = "";

  fetch("http://localhost:3000/courses")
    .then((res) => res.json())
    .then((json) => {
      Object.entries(json).forEach(([key, value]) => {
        let title = value["title"];
        let image = value["image"];
        let author = value["author"];
        let price = value["price"];
        if (title.toLowerCase().includes(search_ele.toLowerCase())) {
          render(title, image, author, price);
        }
      });
    });
};
