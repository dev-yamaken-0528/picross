var app = new Vue({
  el: '#app',
  data: {
    loaddata: [],
    playdata: [],
    mode: 0,
    isShaveMode: true,
    isCheckMode: false,
    selectedRowIndex: 0,
    selectedColIndex: 0,
    msg: '',
    stagetitle: '',
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
  mounted: function(){
    var h = 0
    var m = 0
    var s = 0
	  document.getElementById('time').innerHTML = "["+h+"]h ["+m+"]m ["+s+"]s"
    this.timer = setInterval(function(){
      s++
      if(s == 60){
        s = 0
        m++
      }
      if(m == 60){
        m = 0
        h++
      }
	    document.getElementById('time').innerHTML = "["+h+"]h ["+m+"]m ["+s+"]s"
    },1000)
  },
  methods: {
    modeChange: function(selectedMode) {
      this.mode = selectedMode
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
      this.msg = ""

      if(this.isCheckMode){
        this.playdata[rowindex][colindex] = 0
        document.getElementById(rowindex+'_'+colindex).style.backgroundColor = 'white'
        if(document.getElementById(rowindex+'_'+colindex).innerHTML == ''){
          document.getElementById(rowindex+'_'+colindex).innerHTML = '&#x2613;'
        }else{
          document.getElementById(rowindex+'_'+colindex).innerHTML = ''
        }
      }
      if(this.isShaveMode){
        if(this.playdata[rowindex][colindex] == 1){
          this.playdata[rowindex][colindex] = 0
          document.getElementById(rowindex+'_'+colindex).style.backgroundColor = 'white'
        }else{

          if(this.loaddata[rowindex][colindex] == 0){
            document.getElementById(rowindex+'_'+colindex).innerHTML = '&#x2613;'
            this.msg = "MISS!"
            return false
          }

          this.playdata[rowindex][colindex] = 1
          document.getElementById(rowindex+'_'+colindex).style.backgroundColor = 'rgba(0,0,0,0.6)'
          document.getElementById(rowindex+'_'+colindex).innerHTML = ''
          if(this.playdata.toString() == this.loaddata.toString()){
            clearInterval(this.timer)

            for(var i=0; i<this.playdata.length; i++){
              document.getElementById('row_'+i).style.backgroundColor = 'white'
              document.getElementById('col_'+i).style.backgroundColor = 'white'
              for(var j=0; j<this.playdata.length; j++){
                document.getElementById(i+'_'+j).style.backgroundColor = 'white'
              }
            }

            for(var i=0; i<this.playdata.length; i++){
              for(var j=0; j<this.playdata.length; j++){
                if(this.playdata[i][j]==1){
                  document.getElementById(i+'_'+j).style.backgroundColor = 'black'
                }
              }
            }

            this.stagetitle = document.getElementById("loadtitle").value
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
    },
    keySelect: function(){
      this.clickCell(this.selectedRowIndex, this.selectedColIndex)
    },
    keyCross: function(key, event){
      if(key=='top'){ this.selectedRowIndex -= 1 }
      if(key=='bottom'){ this.selectedRowIndex += 1 }
      if(key=='left'){ this.selectedColIndex -= 1 }
      if(key=='right'){ this.selectedColIndex += 1 }
      if(this.selectedRowIndex <= -1){ this.selectedRowIndex = this.playdata.length -1 }
      if(this.selectedRowIndex >= this.playdata.length){ this.selectedRowIndex = 0 }
      if(this.selectedColIndex <= -1){ this.selectedColIndex = this.playdata.length -1 }
      if(this.selectedColIndex >= this.playdata.length){ this.selectedColIndex = 0 }
      this.refreshColor()
      event.preventDefault()
    },
    refreshColor: function(){
      for(var i=0; i<this.playdata.length; i++){
        document.getElementById('row_'+i).style.backgroundColor = 'white'
        document.getElementById('col_'+i).style.backgroundColor = 'white'
        for(var j=0; j<this.playdata.length; j++){
          document.getElementById(i+'_'+j).style.backgroundColor = 'white'
        }
      }

      document.getElementById('row_'+this.selectedRowIndex).style.backgroundColor = 'rgba(0,0,0,0.2)'
      document.getElementById('col_'+this.selectedColIndex).style.backgroundColor = 'rgba(0,0,0,0.2)'
      for(var i=0; i<this.playdata.length; i++){
        document.getElementById(this.selectedRowIndex+'_'+i).style.backgroundColor = 'rgba(0,0,0,0.2)'
        document.getElementById(i+'_'+this.selectedColIndex).style.backgroundColor = 'rgba(0,0,0,0.2)'
      }
      for(var i=0; i<this.playdata.length; i++){
        for(var j=0; j<this.playdata.length; j++){
          if(this.playdata[i][j] == 1){
            document.getElementById(i+'_'+j).style.backgroundColor = 'rgba(0,0,0,0.6)'
          }
        }
      }
    },
  },
})

