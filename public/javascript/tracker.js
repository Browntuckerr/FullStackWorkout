
function startFunction (event) {
    event.preventDefault();



    var e = document.getElementById('workouts')
    var result = e.options[e.selectedIndex].value;

    if (result === "pullup") {
        console.log("pullup was selected")
        pullUpChart();
    } else if (result === "pushup") {
        console.log("pushup was selected")
        pushUpChart();

    } else if (result === "running") {
        console.log("running was selected")
        runningChart();
    }
}

pullUpChart = () => {
  console.log("fetch is called");
  fetch("/tracker/pullups", {
    method: "get",
  }).then((response) => {
    document.location.replace("/tracker/pullups");
    console.log(response);
  });
};

pushUpChart = () => {
    console.log("fetch is called");
    fetch("/tracker/pushups", {
      method: "get",
    }).then((response) => {
      document.location.replace("/tracker/pushups");
      console.log(response);
    });
}

runningChart = () => {
    console.log("fetch is called");
    fetch("/tracker/running", {
      method: "get",
    }).then((response) => {
      document.location.replace("/tracker/running");
      console.log(response);
    });
}


document.querySelector('#tracker-form').addEventListener('submit', startFunction)