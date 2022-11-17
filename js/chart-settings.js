const trafficCanvas = document.getElementById('traffic-chart');

const trafficData = {
  hourly: {
    labels: ["12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm",
      "7pm", "8pm", "9pm", "10pm"],
    datasets: [{
      data: [100, 50, 100, 200, 150, 175, 200, 300, 250, 150,
        200],
      backgroundColor: 'rgba(116, 119, 191, .3)',
      borderWidth: 1,
    }]
  },
  daily: {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
      "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
        2500],
      backgroundColor: 'rgba(116, 119, 191, .3)',
      borderWidth: 1,
    }]
  },
  weekly: {
    labels: ["10th", "11th", "12th", "13th", "14th", "15th", "16th",
      "17th"],
    datasets: [{
      data: [15100, 5000, 12200, 20000, 15450, 17500, 20020, 30000],
      backgroundColor: 'rgba(116, 119, 191, .3)',
      borderWidth: 1,
    }]
  },
  monthly: {
    labels: ["Jan", "Feb", "Marc", "April", "May", "Jun", "July",
      "Aug"],
    datasets: [{
      data: [151000, 55000, 321000, 543000, 5450, 1000000, 200000, 305000],
      backgroundColor: 'rgba(116, 119, 191, .3)',
      borderWidth: 1,
    }]
  }
}


let trafficOptions = {
  backgroundColor: 'rgba(112, 104, 201, .5)',
  fill: true,
  aspectRatio: 2.5,
  animation: {
    duration: 1000
  },
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};


let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData.daily,
  options: trafficOptions
});

const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};
const dailyOptions = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

const mobileCanvas = document.getElementById("mobil-users");

const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8'
    ]
  }]
};

const mobileOptions = {
  aspectRatio: 1.9,
  plugins: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 20,
        fontStyle: 'bold'
      }
    }
  }
};


let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});

const trafficNav = document.querySelector('.traffic-header');

trafficNav.addEventListener('click', (e) => {
  const button = e.target

  if (button.tagName === 'LI') {
    const navElements = button.parentElement.children;
    for (const li of navElements) {
      if (li.className === 'traffic-nav-link active') {
        li.className = 'traffic-nav-link';
      }
    }
    button.className += ' active';
    const oldCanva = document.querySelector('#traffic-chart');
    oldCanva.remove()
    const canvasContainer = document.querySelector('.widget-container-full');
    const chartToShow = button.textContent.toLowerCase();
    const createCanva = document.createElement('canvas');
    createCanva.setAttribute('id', 'traffic-chart');
    canvasContainer.append(createCanva);
    const newCanva = document.querySelector('#traffic-chart');

    trafficChart = new Chart(newCanva, {
      type: 'line',
      data: trafficData[chartToShow],
      options: trafficOptions
    });
  }

})