$(document).ready(function(){
  let snippet_name;
  let snippet_code;
  let obj = {}

  $('.setData').on('click', function() {
    snippet_name = $('.textField').val();
    snippet_code = $('.codeArea').val();
    obj[snippet_name] = snippet_code
    console.log(obj)

    localStorage.setItem(snippet_name, snippet_code);
    $('.all_info').val('');
  });



  // $('.dropdown').on('click', function(){
  //   alert('i was dropped')
  //   let retrievedData = localStorage.getItem(snippet_name)
  // })

  var $dropdown = $("select[name='dropdown']");

  $.each(obj, function(val, text){
    $('#mySelect').append($('<option></option>')).val(val).html(text)
      })

  //reset function
  function ClearFields() {
     document.getElementsByClassName("buttons").value = "";
}


}) //document.ready







 // $('.getData').on('click', function(){
  //   let retrievedData = localStorage.getItem('myFormTextData');
  // });