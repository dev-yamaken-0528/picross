var start_ms = new Date().getTime();

var app = new Vue({
  el: '#app',
  data: {
    mode: 0,
    isShave: true,
    isCheck: false,
    items: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    selectedItems: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
  },
  methods: {
    modeChange: function(selectMode) {
      this.mode = selectMode
    },
    selectCell: function(event) {
      var selectedRowIndex = event.target.id.split('_')[0]
      var selectedCellIndex = event.target.id.split('_')[1]
      if(this.mode == 0){
        if(event.target.style.backgroundColor == 'grey'){
          return
        }
        if(event.target.style.backgroundColor == 'black'){
          this.selectedItems[selectedRowIndex][selectedCellIndex] = 0;
          event.target.style.backgroundColor = 'white'
        }else{
          this.selectedItems[selectedRowIndex][selectedCellIndex] = 1;
          event.target.style.backgroundColor = 'black'
        }
      }
      if(this.mode == 1){
        if(event.target.style.backgroundColor == 'grey'){
          event.target.innerText = ''
          event.target.style.backgroundColor = 'white'
        }else{
          this.selectedItems[selectedRowIndex][selectedCellIndex] = 0;
          event.target.innerText = 'X'
          event.target.style.backgroundColor = 'grey'
        }
      }
      if(this.items.toString() == this.selectedItems.toString()){
        event.target.style.backgroundColor = 'black'
        var elapsed_ms = new Date().getTime() - start_ms;
        alert('clear! time['+elapsed_ms/1000+']秒')
      }
    },
    headNum: function(index) {
      var list = []
      var cols = ''
      for(var i=0; i<this.items.length; i++){
        cols = cols + this.items[i][index]
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
      for(var i=0; i<this.items.length; i++){
        rows = rows + this.items[index][i]
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
    modeLabel: function() {
      if(this.mode == 0){
        this.isShave = true
        this.isCheck = false
        return '■'
      }else{
        this.isShave = false
        this.isCheck = true
        return 'X'
      }
    }
  }
})

