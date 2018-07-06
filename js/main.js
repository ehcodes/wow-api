var apiUrl = "https://us.api.battle.net/wow/boss/?locale=en_US&apikey=ADD-YOUR-API-KEY-HERE"

$.ajax({
  url: apiUrl,
  success: function(res){
    res.bosses.forEach(function(el){
      $('ul').append('<li>' + el.name + ": " + el.description + '</li>')
      console.log(res.bosses)
    })
  },
  error: function(r){
    console.log('error')
  }
})
