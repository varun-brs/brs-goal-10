// const ctx = document.getElementById("myBarChart");

// new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });

let selectedService = document.getElementById("selectedService");
let dropDownItem = document.getElementById("dropDownItem");
let listItems = document.getElementById("listItems");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");

one.onclick = function () {
  selectedService.textContent = "All";
};

two.onclick = function () {
  selectedService.textContent = "Weekly";
};

three.onclick = function () {
  selectedService.textContent = "Monthly";
};

four.onclick = function () {
  selectedService.textContent = "Yearly";
};

dropDownItem.addEventListener("click", function () {
  if (listItems.style.display === "none") {
    listItems.style.display = "block";
  } else {
    listItems.style.display = "none";
  }
});

const ctx1 = document.getElementById("myBarChart");

new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "# Service Request",
        data: [5312, 4256, 5738, 6318, 3215, 7725],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const ctx2 = document.getElementById("myAreaChart");

new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "# Service Request",
        data: [10013, 30003, 18052, 26023, 17026, 23056, 15236],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
