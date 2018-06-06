$(document).ready(function(){

 //Snippet button and create dropdown dynamically

  $('.setData').on('click', function() {
    let snippet_name = $('.textField').val();
    let snippet_code = $('.codeArea').val();


    localStorage.setItem(snippet_name, snippet_code);
    $('.all_info').val('');

    $('.mySelect').append($('<option>', {
      text: snippet_name,
      // value: snippet_code
    }));
  });

// Dynamic Dropdown select functionality 

  $('.mySelect').change(function(){
    let selectedText = $(this).find(':selected').text(); 
    let selectedVal = localStorage.getItem(selectedText)
    $('.textField').val(selectedText) 
    $('.codeArea').val(selectedVal)
  })

//Reset Button 

  $('.resetData').on('click', function(){
    $('.codeArea').val('')
    $('.textField').val('')
    $('.mySelect').empty()
  });

}) 









