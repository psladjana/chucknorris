(function() {
  var httpRequest
  window.onload=function() {
    makeRequest('https://api.chucknorris.io/jokes/random')
  }

  document.getElementById("ajaxButton").onclick = window.onload

  function makeRequest(url) {
    httpRequest = new XMLHttpRequest()

    if (!httpRequest) {
        alert('Cannot create an XMLHTTP instance')
        return false
    }
    httpRequest.onreadystatechange = alertContents
    httpRequest.open('GET', url)
    httpRequest.send()
 
    /* Read Json File */

    function alertContents() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          var joke = httpRequest.responseText
          var obj = JSON.parse(joke)
          console.log(obj)
          /* Write Joke */
          document.getElementById("joke").innerHTML = "<img src='" + obj.icon_url + "' /><div class='quote'>" + obj.value + "</div>";

        } else {
            document.getElementById("joke").innerHTML = "<div class='quote'>SERVER RETURNED AN ERROR</div>";
        }
      }
    }
  }
})();

