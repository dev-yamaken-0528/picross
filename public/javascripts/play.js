var app = new Vue({
  el: '#app',
  data: {
    loaddata: [],
    playdata: [],
    mode: 0,
    isShaveMode: true,
    isCheckMode: false,
    start_ms: new Date().getTime()
  },
  created: function(){
    var size = document.getElementById('size').value
    var loaddata = document.getElementById('loaddata').value.split(',')
    var index = 0
    for(var i=0; i<size; i++){
      var loaddatarow = []
      var playdatarow = []
      for(var j=0; j<size; j++){
        playdatarow.push(0)
        loaddatarow.push(Number(loaddata[index]))
        index += 1
      }
      this.loaddata.push(loaddatarow)
      this.playdata.push(playdatarow)
    }
  },
  methods: {
    modeChange: function(selectMode) {
      this.mode = selectMode
      if(this.mode == 0){
        this.isShaveMode = true
        this.isCheckMode = false
      }
      if(this.mode == 1){
        this.isShaveMode = false
        this.isCheckMode = true
      }
    },
    clickCell: function(rowindex, colindex) {
      if(this.isCheckMode){
        this.playdata[rowindex][colindex] = 0
        document.getElementById(rowindex+'_'+colindex).style.backgroundColor = 'white'
        document.getElementById(rowindex+'_'+colindex).innerHTML = '&#x2613;'
      }
      if(this.isShaveMode){
        if(this.playdata[rowindex][colindex] == 1){
          this.playdata[rowindex][colindex] = 0
          document.getElementById(rowindex+'_'+colindex).style.backgroundColor = 'white'
        }else{
          this.playdata[rowindex][colindex] = 1
          document.getElementById(rowindex+'_'+colindex).style.backgroundColor = 'black'
          document.getElementById(rowindex+'_'+colindex).innerHTML = ''
          if(this.playdata.toString() == this.loaddata.toString()){
            var elapsed_ms = new Date().getTime() - this.start_ms;
            alert('clear! time['+elapsed_ms/1000+']秒')
          }
        }
      }
    },
    headNum: function(index) {
      var list = []
      var cols = ''
      for(var i=0; i<this.loaddata.length; i++){
        cols = cols + this.loaddata[i][index]
      }
      cols.split('0').forEach(function(col){
        if(col.length != 0){
          list.push(col.length)
        }
      })
      if(list.length==0){
        list.push(0)
      }
      return list
    },
    sideNum: function(index) {
      var list=[]
      var rows = ''
      for(var i=0; i<this.loaddata.length; i++){
        rows = rows + this.loaddata[index][i]
      }
      rows.split('0').forEach(function(row){
        if(row.length != 0){
          list.push(row.length)
        }
      })
      if(list.length==0){
        list.push(0)
      }
      return list
    }
  },
  computed: {
  }
})

