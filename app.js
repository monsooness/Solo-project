$(document).ready(function(){
  let snippet_name;
  let snippet_code;
  let obj = {}

  $('.setData').on('click', function() {
    snippet_name = $('.textField').val();
    snippet_code = $('.codeArea').val();
    obj[snippet_name] = snippet_code
    console.log(snippet_name)


    localStorage.setItem(snippet_name, snippet_code);
    $('.all_info').val('');

    $('.mySelect').append($('<option>', {
      value: snippet_name,
      text: snippet_name
    }));
  });

  $('.mySelect').change(function(){
    var selectedVal = $(this).find(':selected').val(); 
    var selectedText = $(this).find(':selected').val();
    $('.codeArea').val(selectedVal)
    $('.textField').val(selectedText)
  })

  $('.textField').change(function(){
    var selectedVal = $(this).find(':selected').val();
    $('.codeArea').val(selectedVal)
  })


  $('.resetData').on('click', function(){
    $('.codeArea').val('')
    $('.textField').val('')
  });

}) //document.ready







