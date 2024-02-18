window.addEventListener("load", function () {
  var portrait = false;
  if (screen.availHeight > screen.availWidth) {
    portrait = true;
  }

  if (portrait) {
    $(".block").remove();
    document.querySelector(".navbar").innerHTML = `
                <ul class='navbar-nav'>
                  <a class='HomeAnc Tab' href='/'>Home</a>
                  <a class='ServicesAnc Tab' href='/services'>Services</a>
                  <a class='SolutionsAnc Tab' href='/solutions'>Solutions</a>
                  <a class='ClientsAnc Tab' href='/clients'>Clients</a>
                  <a class='SocialAnc Tab' href='/social'>Social</a>
                  <a class='ContactAnc Tab' href='/contact'>Contact</a>
                </ul>`;
    $(".navbar-nav").before(`<img id='dropdown' src='/dropdown_closed.png'/>`);

    $(".navbar-nav").attr("id", "invisible");
    document.querySelector("#dropdown").addEventListener("click", function () {
      var dropdown = document.querySelector("#dropdown").getAttribute("src");
      if (dropdown === "/dropdown_closed.png") {
        document
          .querySelector("#dropdown")
          .setAttribute("src", "/dropdown_open.png");
        $(".navbar-nav").attr("id", "not-invisible");
      } else {
        document
          .querySelector("#dropdown")
          .setAttribute("src", "/dropdown_closed.png");
        $(".navbar-nav").attr("id", "invisible");
      }
    });

    $(".List ul").before(`<img id="left-arrow" src="/left-arrow.png" />`);
    $(".List ul").after(`<img id="right-arrow" src="/right-arrow.png" />`);

    var index = 0;
    if (document.querySelectorAll(".Ethics li").length != 0) {
      $(".Ethics li").eq(index).attr("id", "not-invisible");
      $(".Ethics li").eq(1).attr("id", "invisible");
      $(".Ethics li").eq(2).attr("id", "invisible");
      $(".Ethics li").eq(3).attr("id", "invisible");
      $(".Ethics li").eq(4).attr("id", "invisible");
      $(".Ethics li").eq(5).attr("id", "invisible");
      $(".Ethics li").eq(6).attr("id", "invisible");
      $(".Ethics li").eq(7).attr("id", "invisible");
      document
        .querySelector("#left-arrow")
        .addEventListener("click", function () {
          var previousIndex = index;
          index--;
          if (index < 0) {
            index = 7;
          }
          $(".Ethics li").eq(previousIndex).attr("id", "invisible");
          $(".Ethics li").eq(index).attr("id", "not-invisible");
        });
      document
        .querySelector("#right-arrow")
        .addEventListener("click", function () {
          var previousIndex = index;
          index++;
          if (index > 7) {
            index = 0;
          }
          $(".Ethics li").eq(previousIndex).attr("id", "invisible");
          $(".Ethics li").eq(index).attr("id", "not-invisible");
        });
    }

    var index2 = 0;
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

      $(".Slns li").eq(index2).attr("id", "not-invisible");
      $(".Slns li").eq(1).attr("id", "invisible");
      $(".Slns li").eq(2).attr("id", "invisible");
      $(".Slns li").eq(3).attr("id", "invisible");
      $(".Slns li").eq(4).attr("id", "invisible");
      document
        .querySelector("#left-arrow")
        .addEventListener("click", function () {
          var previousIndex = index2;
          index2--;
          if (index2 < 0) {
            index2 = 4;
          }
          $(".Slns li").eq(previousIndex).attr("id", "invisible");
          $(".Slns li").eq(index2).attr("id", "not-invisible");
        });
      document
        .querySelector("#right-arrow")
        .addEventListener("click", function () {
          var previousIndex = index2;
          index2++;
          if (index2 > 4) {
            index2 = 0;
          }
          $(".Slns li").eq(previousIndex).attr("id", "invisible");
          $(".Slns li").eq(index2).attr("id", "not-invisible");
        });
    }
  } else if (!portrait) {
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
  }
});

window.matchMedia("(orientation: portrait)").addEventListener("change", (e) => {
  var portrait = e.matches;
  if (portrait) {
    if ($(".block").length != 0) {
      $(".block").remove();
      document.querySelector(".navbar").innerHTML = `
                  <ul class='navbar-nav'>
                    <a class='HomeAnc Tab' href='/'>Home</a>
                    <a class='ServicesAnc Tab' href='/services'>Services</a>
                    <a class='SolutionsAnc Tab' href='/solutions'>Solutions</a>
                    <a class='ClientsAnc Tab' href='/clients'>Clients</a>
                    <a class='SocialAnc Tab' href='/social'>Social</a>
                    <a class='ContactAnc Tab' href='/contact'>Contact</a>
                  </ul>`;
      $(".navbar-nav").before(
        `<img id='dropdown' src='/dropdown_closed.png'/>`
      );

      $(".navbar-nav").attr("id", "invisible");
      document
        .querySelector("#dropdown")
        .addEventListener("click", function () {
          var dropdown = document
            .querySelector("#dropdown")
            .getAttribute("src");
          if (dropdown === "/dropdown_closed.png") {
            document
              .querySelector("#dropdown")
              .setAttribute("src", "/dropdown_open.png");
            $(".navbar-nav").attr("id", "not-invisible");
          } else {
            document
              .querySelector("#dropdown")
              .setAttribute("src", "/dropdown_closed.png");
            $(".navbar-nav").attr("id", "invisible");
          }
        });

      $(".List ul").before(`<img id="left-arrow" src="/left-arrow.png" />`);
      $(".List ul").after(`<img id="right-arrow" src="/right-arrow.png" />`);
    }

    var index = 0;
    if ($(".Ethics li").length != 0) {
      if ($(`.Ethics li`).eq(index).attr("id") !== undefined) {
        for (let i = 0; i < 8; i++) {
          if ($(`.Ethics li`).eq(i).attr("id") === "not-invisible") {
            index = i;
          }
        }
      } else {
        $(".Ethics li").eq(index).attr("id", "not-invisible");
        $(".Ethics li").eq(1).attr("id", "invisible");
        $(".Ethics li").eq(2).attr("id", "invisible");
        $(".Ethics li").eq(3).attr("id", "invisible");
        $(".Ethics li").eq(4).attr("id", "invisible");
        $(".Ethics li").eq(5).attr("id", "invisible");
        $(".Ethics li").eq(6).attr("id", "invisible");
        $(".Ethics li").eq(7).attr("id", "invisible");
      }
      document
        .querySelector("#left-arrow")
        .addEventListener("click", function () {
          var previousIndex = index;
          index--;
          if (index < 0) {
            index = 7;
          }
          $(".Ethics li").eq(previousIndex).attr("id", "invisible");
          $(".Ethics li").eq(index).attr("id", "not-invisible");
        });
      document
        .querySelector("#right-arrow")
        .addEventListener("click", function () {
          var previousIndex = index;
          index++;
          if (index > 7) {
            index = 0;
          }
          $(".Ethics li").eq(previousIndex).attr("id", "invisible");
          $(".Ethics li").eq(index).attr("id", "not-invisible");
        });
    }

    var index2 = 0;
    if ($(".Slns").length != 0) {
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


      $(".Slns li").eq(index2).attr("id", "not-invisible");
      $(".Slns li").eq(1).attr("id", "invisible");
      $(".Slns li").eq(2).attr("id", "invisible");
      $(".Slns li").eq(3).attr("id", "invisible");
      $(".Slns li").eq(4).attr("id", "invisible");
      document
        .querySelector("#left-arrow")
        .addEventListener("click", function () {
          var previousIndex = index2;
          index2--;
          if (index2 < 0) {
            index2 = 4;
          }
          $(".Slns li").eq(previousIndex).attr("id", "invisible");
          $(".Slns li").eq(index2).attr("id", "not-invisible");
        });
      document
        .querySelector("#right-arrow")
        .addEventListener("click", function () {
          var previousIndex = index2;
          index2++;
          if (index2 > 4) {
            index2 = 0;
          }
          $(".Slns li").eq(previousIndex).attr("id", "invisible");
          $(".Slns li").eq(index2).attr("id", "not-invisible");
        });
    }
  } else if (!portrait) {
    if ($(".block").length === 0) {
      $(".title-header").after(`<div class="block"></div>`);
      document.querySelector(".navbar").innerHTML = `<ul class="navbar-nav">
      <a class="HomeAnc Tab" href="/">Home</a>
      <a class="ServicesAnc Tab" href="/services">Services</a>
      <a class="SolutionsAnc Tab" href="/solutions">Solutions</a>
      <a class="ClientsAnc Tab" href="/clients">Clients</a>
      <a class="SocialAnc Tab" href="/social">Social</a>
      <a class="ContactAnc Tab" href="/contact">Contact</a>
    </ul>`;
      $("#left-arrow").remove();
      $("#right-arrow").remove();
      if ($(".Slns").length != 0) {
        document.querySelector(".Slns").innerHTML = `<div>
      <h4>Analytical and Data-Related Tasks</h4>
      <p>
        These tasks may include the ability to track records and visually
        represent them. We can run an analysis on the software you use and
        provide data that will help ensure the security and popularity of your
        software.
      </p>
    </div>
    <div>
      <h4>Cloud Computing</h4>
      <p>
        At STRAT, we provide networking and storage for our clients. This
        solution helps our clients lower operating costs run their
        infrastructure more efficiently, and scale as their business adapts to
        change.
      </p>
    </div>
    <div>
      <h4>Multimedia Services</h4>
      <p>
        We have the expertise to aid in a company's multimedia growth. This
        operation can be editing and crafting video content or audio, as well
        as modifying images.
      </p>
    </div>
    <div>
      <h4>AI and ML Services</h4>
      <p>
        If you require software that performs decision-making or improves your
        machine's algorithm over time by constructive learning, we have the
        tools to make it a reality! No task is under our belt.
      </p>
    </div>
    <div>
      <h4>Data Infrastructure</h4>
      <p>
        We can protect, manipulate, and store your data using the finest
        programming methods and housing. You can use this opportunity to file
        your records and keep them organized and under control.
      </p>
    </div>
  </div>`;
      }
    }

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
  }
});
