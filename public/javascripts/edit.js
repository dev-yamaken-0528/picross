var app = new Vue({
  el: '#app',
  data: {
    isis: true
  },
  methods: {
  },
  computed: {
    items: function() {
      var data = document.getElementById('h_data').value.split(',')
      var list = []
      var index = 0
      for(var i=0; i<data.length; i++){
        var row = []
        for(var j=0; j<data.length; j++){
          row.push(data[index])
          index += 1
          console.log(document.getElementById(i+'_'+j))
        }
        list.push(row)
      }
      return list
    },
    iscell: function(row,col){
      var size = this.items.lengh
      //document.getElementById(i+'_'+j).style.backgroundColor = 'black'
    }
  }
})

