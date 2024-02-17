var w = screen.width;

if (w > 640) {
  var numOfPrincipleImages = document.querySelectorAll(".Principle").length;
  var principle;
  for (var j = 0; j < numOfPrincipleImages; j++) {
    if (j === 0) {
      principle = "Deliver";
    } else if (j === 1) {
      principle = "Cooperate";
    } else if (j === 2) {
      principle = "Trust";
    } else if (j === 3) {
      principle = "Bold";
    } else if (j === 4) {
      principle = "Accountability";
    } else if (j === 5) {
      principle = "Integrity";
    } else if (j === 6) {
      principle = "Systematic";
    } else if (j === 7) {
      principle = "Civility";
    }
    if (j % 2 === 0) {
      document
        .querySelector(".Principle." + principle + " img")
        .classList.add("float-left");
    } else {
      document
        .querySelector(".Principle." + principle + " img")
        .classList.add("float-right");
    }
  }
} else if (w <= 640) {
  document.querySelector(".block").outerHTML = "";
  document.querySelector(".navbar").innerHTML =
    "\n\t\t<img id='dropdown' src='/dropdown_closed.png' />\n\t\t<ul class='navbar-nav'>\n\t\t\t<a class='HomeAnc Tab' href='/'>Home</a>\n\t\t\t<a class='ServicesAnc Tab' href='/services'>Services</a>\n\t\t\t<a class='SolutionsAnc Tab' href='/solutions'>Solutions</a>\n\t\t\t<a class='ClientsAnc Tab' href='/clients'>Clients</a>\n\t\t\t<a class='SocialAnc Tab' href='/social'>Social</a>\n\t\t\t<a class='ContactAnc Tab' href='/contact'>Contact</a>\n\t\t</ul>";

  document.querySelector(".navbar-nav").classList.add("invisible");
  document.querySelector("#dropdown").addEventListener("click", function () {
    var dropdown = document.querySelector("#dropdown").getAttribute("src");
    if (dropdown === "/dropdown_closed.png") {
      document
        .querySelector("#dropdown")
        .setAttribute("src", "/dropdown_open.png");
      document.querySelector(".navbar-nav").classList.toggle("invisible");
    } else {
      document
        .querySelector("#dropdown")
        .setAttribute("src", "/dropdown_closed.png");
      document.querySelector(".navbar-nav").classList.toggle("invisible");
    }
  });

  $(".List ul").before(`<img id="left-arrow" src="/left-arrow.png" />`);
  $(".List ul").after(`<img id="right-arrow" src="/right-arrow.png" />`);

  var index = 0;
  if (document.querySelectorAll(".Ethics li").length != 0) {
    document.querySelectorAll(".Ethics li")[1].classList.add("invisible");
    document.querySelectorAll(".Ethics li")[2].classList.add("invisible");
    document.querySelectorAll(".Ethics li")[3].classList.add("invisible");
    document.querySelectorAll(".Ethics li")[4].classList.add("invisible");
    document.querySelectorAll(".Ethics li")[5].classList.add("invisible");
    document.querySelectorAll(".Ethics li")[6].classList.add("invisible");
    document.querySelectorAll(".Ethics li")[7].classList.add("invisible");
    document
      .querySelector("#left-arrow")
      .addEventListener("click", function () {
        var previousIndex = index;
        index--;
        if (index < 0) {
          index = 7;
        }
        document
          .querySelectorAll(".Ethics li")
          [previousIndex].classList.toggle("invisible");
        document
          .querySelectorAll(".Ethics li")
          [index].classList.toggle("invisible");
      });
    document
      .querySelector("#right-arrow")
      .addEventListener("click", function () {
        var previousIndex = index;
        index++;
        if (index > 7) {
          index = 0;
        }
        document
          .querySelectorAll(".Ethics li")
          [previousIndex].classList.toggle("invisible");
        document
          .querySelectorAll(".Ethics li")
          [index].classList.toggle("invisible");
      });
  }

  var Index2 = 0;
  if (document.querySelector(".Slns")) {
    document.querySelector(".Slns").innerHTML = `<ul class="slns-list"><li>
    <h4>Analytical and Data-Related Tasks</h4>
    <p>
      These tasks may include the ability to track records and visually
      represent them. We can run an analysis on the software you use and
      provide data that will help ensure the security and popularity of your
      software.
    </p>
  </li>
  <li>
    <h4>Cloud Computing</h4>
    <p>
      At STRAT, we provide networking and storage for our clients. This
      solution helps our clients lower operating costs run their
      infrastructure more efficiently, and scale as their business adapts to
      change.
    </p>
  </li>
  <li>
    <h4>Multimedia Services</h4>
    <p>
      We have the expertise to aid in a company's multimedia growth. This
      operation can be editing and crafting video content or audio, as well
      as modifying images.
    </p>
  </li>
  <li>
    <h4>AI and ML Services</h4>
    <p>
      If you require software that performs decision-making or improves your
      machine's algorithm over time by constructive learning, we have the
      tools to make it a reality! No task is under our belt.
    </p>
  </li>
  <li>
    <h4>Data Infrastructure</h4>
    <p>
      We can protect, manipulate, and store your data using the finest
      programming methods and housing. You can use this opportunity to file
      your records and keep them organized and under control.
    </p>
  </li></ul>`;
    $(".Software-Development .slns-list").before(
      `<img id="left-arrow" src="/left-arrow.png" />`
    );
    $(".Software-Development .slns-list").after(
      `<img id="right-arrow" src="/right-arrow.png" />`
    );
    $("#left-arrow").css("margin", "0px");
    $("#right-arrow").css("margin", "0px");

    document.querySelectorAll(".Slns li")[1].classList.add("invisible");
    document.querySelectorAll(".Slns li")[2].classList.add("invisible");
    document.querySelectorAll(".Slns li")[3].classList.add("invisible");
    document.querySelectorAll(".Slns li")[4].classList.add("invisible");
    document
      .querySelector("#left-arrow")
      .addEventListener("click", function () {
        var previousIndex = index;
        index--;
        if (index < 0) {
          index = 4;
        }
        document
          .querySelectorAll(".Slns li")
          [previousIndex].classList.toggle("invisible");
        document
          .querySelectorAll(".Slns li")
          [index].classList.toggle("invisible");
      });
    document
      .querySelector("#right-arrow")
      .addEventListener("click", function () {
        var previousIndex = index;
        index++;
        if (index > 4) {
          index = 0;
        }
        document
          .querySelectorAll(".Slns li")
          [previousIndex].classList.toggle("invisible");
        document
          .querySelectorAll(".Slns li")
          [index].classList.toggle("invisible");
      });
  }
}
