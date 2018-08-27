var app = new Vue({
  el: '#app',
  data: {
    savedata: [],
    selectedCell: [0,0],
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
    keyTop: function(){
      this.setColorClear()
      this.selectedCell[1] -= 1
      if(this.selectedCell[1] <= -1){
        this.selectedCell[1] = this.savedata.length
      }
      this.setColorCross()
      this.setColorSelectedCell()
    },
    keyBottom: function(){
      this.setColorClear()
      this.selectedCell[1] += 1
      if(this.selectedCell[1] >= this.savedata.length){
        this.selectedCell[1] = 0
      }
      this.setColorCross()
      this.setColorSelectedCell()
    },
    keyLeft: function(){
      this.setColorClear()
      this.selectedCell[0] -= 1
      if(this.selectedCell[0] <= -1){
        this.selectedCell[0] = this.savedata.length
      }
      this.setColorCross()
      this.setColorSelectedCell()
    },
    keyRight: function(){
      this.setColorClear()
      this.selectedCell[0] += 1
      if(this.selectedCell[0] >= this.savedata.length){
        this.selectedCell[0] = 0
      }
      this.setColorCross()
      this.setColorSelectedCell()
    },
    setColorClear: function(){
      for(var i=0; i<this.savedata.length; i++){
        for(var j=0; j<this.savedata.length; j++){
          document.getElementById(i+'_'+j).style.backgroundColor = 'white'
        }
      }
    },
    setColorCross: function(){
      for(var i=0; i<this.savedata.length; i++){
        document.getElementById(i+'_'+this.selectedCell[0]).style.backgroundColor = 'rgba(0,0,0,0.25)'
        document.getElementById(this.selectedCell[1]+'_'+i).style.backgroundColor = 'rgba(0,0,0,0.25)'
      }
    },
    setColorSelectedCell: function(){
      for(var i=0; i<this.savedata.length; i++){
        for(var j=0; j<this.savedata.length; j++){
          if(this.savedata[i][j] == 1){
            document.getElementById(i+'_'+j).style.backgroundColor = 'black'
          }
        }
      }
    },
    keyBtn: function(){
      this.clickCell(this.selectedCell[1], this.selectedCell[0])
    },
    changeSize: function(size){
      this.savedata = []
      for(var i=0; i<size; i++){
        var row = []
        for(var j=0; j<size; j++){
          row.push(0)
        }
        this.savedata.push(row)
      }
      document.getElementById('savedata').value = this.savedata
    },
    clickCell: function(rowIndex, colIndex){
      if(this.savedata[rowIndex][colIndex] == 0){
        this.savedata[rowIndex][colIndex] = 1
        document.getElementById(rowIndex+'_'+colIndex).style.backgroundColor = 'black'
      }else{
        this.savedata[rowIndex][colIndex] = 0
        document.getElementById(rowIndex+'_'+colIndex).style.backgroundColor = 'white'
      }
      document.getElementById('savedata').value = this.savedata
    }
  },
  computed: {
  }
})

