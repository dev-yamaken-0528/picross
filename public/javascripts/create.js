var app = new Vue({
  el: '#app',
  data: {
    items: [],
    selected: '',
    options: [
      { text: '5x5', value: 5 },
      { text: '10x10', value: 10 },
      { text: '15x15', value: 15 },
      { text: '20x20', value: 20 }
    ]
  },
  methods: {
    changesize: function(size){
      this.items = []
      for(var i=0; i<size; i++){
        var row = []
        for(var j=0; j<size; j++){
          row.push(0)
        }
        this.items.push(row)
      }
      document.getElementById('saveitems').value = this.items
    },
    selectedcell: function(row, col){
      if(document.getElementById(row+'_'+col).style.backgroundColor == 'black'){
        document.getElementById(row+'_'+col).style.backgroundColor = 'white'
        this.items[row][col] = 0
      }else{
        document.getElementById(row+'_'+col).style.backgroundColor = 'black'
        this.items[row][col] = 1
      }
      document.getElementById('saveitems').value = this.items
    }
  },
  computed: {
  }
})

