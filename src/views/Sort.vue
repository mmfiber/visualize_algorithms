<template lang="pug">
  BaseLayout
    template(#sidebar)
      Sidebar(:items="sortTypes" @clicked="change")
    template(#main)
      ChartWindow(:title="title" @start="start" @reset="initChart")
        highcharts(:options="options" ref="highcharts")
        v-text-field(v-model="numOfArr" type="number" label="Number of random numbers")
</template>

<script>
import BaseLayout from '../components/BaseLayout';
import Sidebar from '../components/Sidebar'
import ChartWindow from '../components/ChartWindow'
import { random, baseSortChartOptions } from '../libs/utils'

export default {
  components: {
    BaseLayout,
    Sidebar,
    ChartWindow,
  },
  data() {
    return {
      sortTypes: {
        "bubble": {"title": "Bubble Sort"},
        "quick": {"title": "Quick Sort"},
      },
      selected: "bubble",
      options: baseSortChartOptions,
      chart: null,
      numOfArr: 50,
      sortedArrays: null,
    }
  },
  mounted() {
    this.chart = this.$refs.highcharts.chart
    this.initChart()
  },
  computed: {
    title() {
      return this.sortTypes[this.selected].title
    },
  },
  watch: {
    numOfArr() {
      this.initChart()
    },
  },
  methods: {
    change(e) {
      this.selected = e
      this.initChart()
    },
    initChart() {
      const num = parseInt(this.numOfArr)
      if(this.chart.series[0]) this.chart.series[0].setData(random(num))
      else this.chart.addSeries({data: random(num)})
    },
    start() {
      const array = this.chart.series[0].yData
      this.sortedArrays = [array]

      if (this.selected === "bubble") this.bubbleSort(array)
      else if(this.selected === "quick") this.quickSort(array, [])

      this.draw()
    },
    draw() {
      this.options.chart.animation = false

      let count = 0
      const id = setInterval(() => {
        if (count == this.sortedArrays.length - 1 ) {
          clearInterval(id)
          this.options.chart.animation = true
        }
        this.chart.series[0].setData(this.sortedArrays[count])
        count++
      }, 100)
    },
    bubbleSort(array) {
      const length = array.length
      for(let i = 0; i < length; i++) {
        for(let j = length; i < j; j--) {
          if(array[j] < array[j-1]) {
            const tmp = array[j]
            array[j] = array[j-1]
            array[j-1] = tmp
          }
        }
        this.record(array.concat())
      }
    },
    quickSort(array, rest) {
      if (array.length <= 1) return array

      const pivot = array.pop(0)

      let left = []
      let right = []

      array.forEach((n) => {
        if (n < pivot) {
          left.push(n)
        } else {
          right.push(n)
        }
      })

      const sorted_left = this.quickSort(left, right.concat([pivot], rest))
      const sorted_right = this.quickSort(right, sorted_left.concat([pivot], rest))

      this.record(sorted_left.concat([pivot], sorted_right, rest))

      return sorted_left.concat([pivot], sorted_right)
    },
    record (array){
      this.sortedArrays = this.sortedArrays.concat([array])
    }
  }
};
</script>
