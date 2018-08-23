var app = new Vue({
  el: '#app',
  data: {
    firstitems: [],
    items: []
  },
  created: function(){
    var size = document.getElementById('h_size').value
    var data = document.getElementById('h_data').value.split(',')
    var index = 0
    for(var i=0; i<size; i++){
      var row = []
      for(var j=0; j<size; j++){
        row.push(data[index])
        index += 1
      }
      this.firstitems.push(row)
      this.items.push(row)
    }
    document.getElementById('saveitems').value = this.items
  },
  mounted: function(){
    var size = document.getElementById('h_size').value
    for(var i=0; i<size; i++){
      for(var j=0; j<size; j++){
        if(this.items[i][j]==1){
          document.getElementById(i+'_'+j).style.backgroundColor = 'black'
        }
      }
    }
  },
  methods: {
    clickCell: function(row, col){
      if(this.items[row][col] == 0){
        this.items[row][col] = 1
        document.getElementById(row+'_'+col).style.backgroundColor = 'black'
      }else if(this.items[row][col] == 1){
        this.items[row][col] = 0
        document.getElementById(row+'_'+col).style.backgroundColor = 'white'
      }
      document.getElementById('saveitems').value = this.items
    }
  },
  computed: {
  }
})

