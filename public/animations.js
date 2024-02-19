window.addEventListener("load", function () {
  console.log(this.screen.availWidth);
  if (screen.availWidth <= 640) {
    $(".block").remove();
    $(".navbar-nav").before(`<img id='dropdown' src='/dropdown.png'/>`);

    $(".navbar-nav").attr("id", "invisible");
    document.querySelector("#dropdown").addEventListener("click", function () {
      var navbar = $(".navbar-nav").attr("id");
      if (navbar === "not-invisible") {
        $(".navbar-nav").attr("id", "invisible");
      } else {
        $(".navbar-nav").attr("id", "not-invisible");
      }
    });

    if (document.querySelectorAll(".Ethics li").length != 0) {
      $(".List ul").before(`<img id="left-arrow" src="/left-arrow.png" />`);
      $(".List ul").after(`<img id="right-arrow" src="/right-arrow.png" />`);
      var index = 0;
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
      var index2 = 0;
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

    document.querySelector(".page").style =
      "display: flex; flex-direction: column; height: 100%; width: 100%;";
  } else if (screen.availWidth > 640) {
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
    document.querySelector(".page").style =
      "display: flex; max-width: 1150px; flex-direction: column; margin: auto;";
  }
});

window.matchMedia("(max-width: 640px)").addEventListener("change", (e) => {
  if (e.matches) {
    if ($(".block").length != 0) {
      $(".block").remove();
      $(".navbar-nav").before(`<img id='dropdown' src='/dropdown.png'/>`);

      $(".navbar-nav").attr("id", "invisible");
      document
        .querySelector("#dropdown")
        .addEventListener("click", function () {
          var navbar = $(".navbar-nav").attr("id");
          if (navbar === "not-invisible") {
            $(".navbar-nav").attr("id", "invisible");
          } else {
            $(".navbar-nav").attr("id", "not-invisible");
          }
        });
    }

    if ($(".Ethics li").length != 0) {
      $(".List ul").before(`<img id="left-arrow" src="/left-arrow.png" />`);
      $(".List ul").after(`<img id="right-arrow" src="/right-arrow.png" />`);
      var index = 0;
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
      var index2 = 0;
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
  } else {
    if ($(".block").length === 0) {
      $(".title-header").after(`<div class="block"></div>`);
      $("#dropdown").remove();
      $("#left-arrow").remove();
      $("#right-arrow").remove();

      if ($(".Ethics li").length != 0) {
        $(".Ethics li").eq(0).attr("id", "not-invisible");
        $(".Ethics li").eq(1).attr("id", "not-invisible");
        $(".Ethics li").eq(2).attr("id", "not-invisible");
        $(".Ethics li").eq(3).attr("id", "not-invisible");
        $(".Ethics li").eq(4).attr("id", "not-invisible");
        $(".Ethics li").eq(5).attr("id", "not-invisible");
        $(".Ethics li").eq(6).attr("id", "not-invisible");
        $(".Ethics li").eq(7).attr("id", "not-invisible");
      }

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
