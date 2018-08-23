var app = new Vue({
  el: '#app',
  data: {
    loaddata: [],
    savedata: []
  },
  created: function(){
    var size = document.getElementById('loadsize').value
    var data = document.getElementById('loaddata').value.split(',')
    var index = 0
    for(var i=0; i<size; i++){
      var row = []
      for(var j=0; j<size; j++){
        row.push(data[index])
        index += 1
      }
      this.loaddata.push(row)
      this.savedata.push(row)
    }
    document.getElementById('savedata').value = this.savedata
  },
  mounted: function(){
    var size = document.getElementById('loadsize').value
    for(var i=0; i<size; i++){
      for(var j=0; j<size; j++){
        if(this.savedata[i][j]==1){
          document.getElementById(i+'_'+j).style.backgroundColor = 'black'
        }
      }
    }
  },
  methods: {
    clickCell: function(row, col){
      if(this.savedata[row][col] == 0){
        this.savedata[row][col] = 1
        document.getElementById(row+'_'+col).style.backgroundColor = 'black'
      }else if(this.savedata[row][col] == 1){
        this.savedata[row][col] = 0
        document.getElementById(row+'_'+col).style.backgroundColor = 'white'
      }
      document.getElementById('savedata').value = this.savedata
    }
  },
  computed: {
  }
})

