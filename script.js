$.getJSON("https://api-alquranid.herokuapp.com/surah", function(value){
    $.each(value.data, function(i, value){
        $('#list-surah').append('<div class="col-lg-2 col-md-3 col-6 mb-4"><div class="card"><div class="card-body"><a class="list" onClick="sessionStorage.somekey = '+ value.nomor +'; console.log(sessionStorage.somekey);" data-fajax="false" href="isi-ayat.html" data-transition="slidefade">'+ value.nomor +'. '+ value.nama +'</a></div></div></div>');
    });
});


let data = sessionStorage.getItem('somekey');

$.getJSON("https://api-alquranid.herokuapp.com/surah/"+data, function(value){
    $.each(value.data, function(i, value){
        $('#isi-ayat').append('<div class="ayat text-center mb-5"><h5 class="text-center  fs-4 fw-bolder">'+value.ar+'</h5><p class="mt-3 text-center">'+value.tr+'</p><i mt-3 text-center>'+value.id+'</i></div>');
    });
});