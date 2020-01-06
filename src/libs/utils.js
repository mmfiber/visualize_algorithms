export const random = (num) => {
  let arr = Array(num).fill(0).map((v, i) => i+1)
  for(let i = 0; i < arr.length; i++) {
    const r = Math.floor(Math.random() * (i + 1))
    const tmp = arr[r]
    arr[r] = arr[i]
    arr[i] = tmp
  }
  return arr
}

export const baseSortChartOptions = {
  chart: { type: 'column', animation: true },
  title:{ text: "" },
  xAxis: {
    labels: { enabled: false }
  },
  yAxis: {
    title: "",
    labels: { enabled: false }
  },
  credits: { enabled: false },
  legend:{ enabled:false }
}

export const wait = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}