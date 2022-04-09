const si = require ('systeminformation') ;

function bytesToSize(bytes) {
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) return '0 Byte';
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

function generateMinuteWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      (Math.sin(i / 1) * (i / 1) +
        i / 1 +
        1) *
      (1 * 2);

    series.push([x, y]);
    baseval += 30;
    i++;
  }
  console.log(series)
  return series;
}


window.Apex = {
    chart: {
      foreColor: "#fff",
      toolbar: {
        show: false
      }
    },
    // colors: ["#FCCF31", "#17ead9", "#f02fc2"],
    stroke: {
      width: 3
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      borderColor: "#40475D"
    },
    xaxis: {
      axisTicks: {
        color: "#333"
      },
      axisBorder: {
        color: "#333"
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: ["#F55555", "#6078ea", "#6094ea"]
      }
    },
    tooltip: {
      theme: "dark",
      // x: {
      //   formatter: function (val) {
      //     return moment(new Date(val)).format("HH:mm:ss");
      //   }
      // }
    },
    yaxis: {
      decimalsInFloat: 2,
      opposite: true,
      labels: {
        offsetX: -10
      }
    }
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

var colorArray = ['#008FFB',	'#00E396',	'#FEB019',	'#FF4560',	'#775DD0', '#3F51B5',	'#03A9F4',	'#4CAF50',	'#F9CE1D',	'#FF9800', '#33B2DF',	'#546E7A',	'#D4526E',	'#13D8AA',	'#A5978B', '#4ECDC4',	'#C7F464',	'#81D4FA',	'#546E7A',	'#FD6A6A'];

var cpu_speed_options = {
    animations: {
        enabled: true,
        easing: 'easeout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 0
        },
        dynamicAnimation: {
            enabled: true,
            speed: 0
        }
    },
    series: [{
    name: 'CPU Speed',
    data: [1,2, 3]
    }],
    chart: {
    height: 350,
    type: 'bar',
    events: {
      click: function(chart, w, e) {
        console.log(chart, w, e)
      }
    }
  },
  colors: colorArray,
  plotOptions: {
    bar: {
      columnWidth: '45%',
      distributed: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    labels: {
      style: {
        colors: colorArray,
        fontSize: '12px'
      }
    }
  },
  dataLabels: {
    position: 'bottom',
    enabled: false,
    style: {
        colors: ['#fff']
    },
    offsetX: 30
},
};

var chart_cpu_speed = new ApexCharts(document.querySelector("#chart_cpu_speed"),cpu_speed_options);
chart_cpu_speed.render();

var ram_usage_options = {
    series: [0],
    chart: {
    height: 350,
    type: 'radialBar',
    offsetY: -10
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
          inverseOrder: false,
         
          track: {
            show: true,
            background: "#40475D",
            strokeWidth: "10%",
            opacity: 1,
            margin: 3 // margin is in pixels
          }
        }
      },
    fill: {
        colors: colorArray[3],
        type: "solid",
        gradient: {
        shade: "dark",
        type: "horizontal",
        // shadeIntensity: 0.5,
        // inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
        }
    },
    stroke: {
        dashArray: 4
    },
    labels: ['RAM Usage'],
    dataLabels: {
        position: 'bottom',
        enabled: false,
        style: {
            colors: ['#fff']
            
        },
        offsetX: 30
    },
};

var chart_ram_usage = new ApexCharts(document.querySelector("#chart_ram_usage"), ram_usage_options);
chart_ram_usage.render();

var cpu_usage_options = {
  series: [0],
  chart: {
  height: 350,
  type: 'radialBar',
  offsetY: -10
  },
  plotOptions: {
      radialBar: {
          startAngle: -135,
          endAngle: 135,
        inverseOrder: false,
       
        track: {
          show: true,
          background: "#40475D",
          strokeWidth: "10%",
          opacity: 1,
          margin: 3 // margin is in pixels
        }
      }
    },
  fill: {
      colors: colorArray[3],
      type: "solid",
      gradient: {
      shade: "dark",
      type: "horizontal",
      // shadeIntensity: 0.5,
      // inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
      }
  },
  stroke: {
      dashArray: 4
  },
  labels: ['CPU Load'],
  dataLabels: {
      position: 'bottom',
      enabled: false,
      style: {
          colors: ['#fff']
          
      },
      offsetX: 30
  },
};

var chart_cpu_usage = new ApexCharts(document.querySelector("#chart_cpu_usage"), cpu_usage_options);
chart_cpu_usage.render();

var chart_net_stat_options = {
  chart: {
      height: 350,
      type: "area",
      stacked: true,
      animations: {
      enabled: true,
      easing: "linear",
      dynamicAnimation: {
          speed: 2000
      }
      },
      dropShadow: {
      enabled: true,
      opacity: 0.3,
      blur: 5,
      left: -7,
      top: 22
      },
      events: {
      animationEnd: function (chartCtx) {
          const newData1 = chartCtx.w.config.series[0].data.slice();
          newData1.shift();
          const newData2 = chartCtx.w.config.series[1].data.slice();
          newData2.shift();
          window.setTimeout(function () {
          chartCtx.updateOptions(
              {
              series: [
                  {
                  data: newData1
                  },
                  {
                  data: newData2
                  }
              ],
              // subtitle: {
              //     text: parseInt(getRandom() * Math.random()).toString()
              // }
              },
              false,
              false
          );
          }, 100);
      }
      },
      toolbar: {
      show: false
      },
      zoom: {
      enabled: false
      }
  },
  dataLabels: {
      enabled: false
  },
  stroke: {
      curve: "smooth",
      // width: 5
  },
  grid: {
      padding: {
      left: 0,
      right: 0
      }
  },
  markers: {
      size: 0,
      hover: {
      size: 0
      }
  },
  series: [
      {
      name: "Transfered",
      data: generateMinuteWiseTimeSeries(
          new Date().getTime(),
          1,
          {
          min: 0,
          max: 10
          }
      )
      },
      {
      name: "Received",
      data: generateMinuteWiseTimeSeries(
          new Date().getTime(),
          1,
          {
          min: 0,
          max: 10
          }
      )
      }
  ],
  xaxis: {
      type: "datetime",
      range: 2700000,
      labels: {
          show: false}
  },
  title: {
      text: "Net Usage",
      align: "left",
      style: {
      fontSize: "12px"
      }
  },
  subtitle: {
      text: "20",
      floating: true,
      align: "right",
      offsetY: 0,
      style: {
      fontSize: "22px"
      }
  },
  legend: {
      show: true,
      floating: true,
      horizontalAlign: "left",
      onItemClick: {
      toggleDataSeries: false
      },
      position: "top",
      offsetY: -33,
      offsetX: 60
  }
  };
  
var chartLine = new ApexCharts(document.querySelector("#chart_net_usage"),chart_net_stat_options);
chartLine.render();
  

function getSysInfo(){
    si.osInfo(function(_data){
        let osName = `${_data['distro']} - ${_data['release']}`
        let el = document.getElementById('os_name')
        el.innerText = osName
    })

    si.cpu(function(_data){
        let cpuName = `${_data['brand']}`
        let el = document.getElementById('cpu_name')
        el.innerText = cpuName
    })

    si.graphics(function(_data){
      let gpuName = _data['controllers'][0]['model']
      let el = document.getElementById('gpu_name')
      el.innerText = gpuName
    })

    si.diskLayout(function(_data){
      _data.forEach(item => {
        let driveSize = bytesToSize(item['size'])
        let driveType = item['type']
        let driveName = item['name']

        let el = document.getElementById('drives')
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(`${driveType} - ${driveName} - ${driveSize}`));
        el.appendChild(li);
      });
    })

    si.cpuCurrentSpeed(function(_data){
      console.log()
    })
}

async function makeCpuSpeedChart(){
    while(true){
        let chart_data = []
        si.cpuCurrentSpeed(function(_data){
          let avg_speed = _data['avg']
          let el = document.getElementById('avg_cpu_speed')
          el.innerText = `AVG Speed: ${avg_speed} GHZ`

          for(i in _data.cores){
              let tmp = `CPU: ${i} - ${_data.cores[i]}`        
              tmp = {
                  x: `CPU: ${i}`,
                  y: _data.cores[i]
              }
              chart_data.push(tmp)
          }
          chart_cpu_speed.updateSeries([{
              name: 'CPU Speed',
              data: chart_data
          }])
        })
        await delay(2000);
    }
}

async function makeRamUsageChart(){
    while(true){
        si.mem(function(_data){
            let total_ram = parseInt(_data['total'].toString().substring(0,2))
            document.getElementById("total_ram").innerText = `Total RAM: ${total_ram} GB`
            let free_ram = parseInt(_data['free'].toString().substring(0,2))
            // let used_ram = parseInt(_data['used'].toString().substring(0,2))
            // console.log(`Total RAM: ${total_ram}GB`)
            // console.log(`Free RAM: ${free_ram}GB`)
            
            let used_ram = total_ram-free_ram
            // console.log(`Used RAM: ${used_ram}GB`)
            let p = parseFloat(used_ram/total_ram*100).toFixed(2)
            
            chart_ram_usage.updateSeries([p])
        })
        await delay(100000);
    }
}

async function makeCpuUsageChart(){
  while(true){
    si.currentLoad(function(_data){
      let cpu_load = _data['currentLoad'].toString().substring(0,4)
      // console.log(_data['currentLoad'].toString().substring(0,4))

      chart_cpu_usage.updateSeries([cpu_load])
    })
    await delay(1000);
  }
}

async function makeNetUsageChart(){
  while(true){
      si.networkStats(function(_data){
          let upload = _data[0]['tx_sec']
          let download = _data[0]['rx_sec']
          let t_upload = upload / Math.pow(1024,2)
          let t_download = download / Math.pow(1024,2)
          t_upload = parseFloat(t_upload.toString().substring(0,4))
          // upload_data.push(t_upload)
          t_download = parseFloat(t_download.toString().substring(0,4))
          // download_data.push(t_download)

          // let x = [chartLine.w.globals.maxX, t_upload]
          // console.log(x)
          chartLine.updateSeries([
              {
              data: [
                  ...chartLine.w.config.series[0].data,
                  [chartLine.w.globals.maxX + 300000, t_upload]
              ]
              },
              {
              data: [
                  ...chartLine.w.config.series[1].data,
                  [chartLine.w.globals.maxX + 300000, t_download]
              ]
              }
          ]);
      })
  await delay(2000)
  }
}


getSysInfo()

makeCpuSpeedChart()

makeRamUsageChart()

makeCpuUsageChart()

makeNetUsageChart()


si.cpuTemperature(function(_data){
    console.log(`MAX TMP: ${_data.max}`)
})

