$(document).ready(function(){

 //Snippet button set data and create dropdown dynamically

  $('.setData').on('click', ()=> {
    let snippet_name = $('.textField').val();
    let snippet_code = $('.codeArea').val();

    localStorage.setItem(snippet_name, snippet_code);
    $('.all_info').val('');

    $('.mySelect').append($('<option>', {
      text: snippet_name,
    }));
  });

// Dynamic Dropdown select functionality 

  $('.mySelect').change( () => {
    let selectedText = $(this).find(':selected').text(); 
    let selectedVal = localStorage.getItem(selectedText)
    $('.textField').val(selectedText) 
    $('.codeArea').val(selectedVal)
  })

//Reset Button 

  $('.resetData').on('click', ()=> {
    $('.codeArea').val('')
    $('.textField').val('')
  });

}) 









