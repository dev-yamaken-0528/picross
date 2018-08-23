var app = new Vue({
  el: '#app',
  data: {
    tabledata: [],
    selected: '',
    options: [
      { text: '5x5', value: 5 },
      { text: '10x10', value: 10 },
      { text: '15x15', value: 15 },
      { text: '20x20', value: 20 },
      { text: '25x25', value: 25 },
      { text: '30x30', value: 30 }
    ]
  },
  methods: {
    changeSize: function(size){
      this.tabledata = []
      for(var i=0; i<size; i++){
        var row = []
        for(var j=0; j<size; j++){
          row.push(0)
        }
        this.tabledata.push(row)
      }
      document.getElementById('savedata').value = this.tabledata
    },
    clickCell: function(rowIndex, colIndex){
      if(this.tabledata[rowIndex][colIndex] == 0){
        this.tabledata[rowIndex][colIndex] = 1
        document.getElementById(rowIndex+'_'+colIndex).style.backgroundColor = 'black'
      }else{
        this.tabledata[rowIndex][colIndex] = 0
        document.getElementById(rowIndex+'_'+colIndex).style.backgroundColor = 'white'
      }
      document.getElementById('savedata').value = this.tabledata
    }
  },
  computed: {
  }
})

