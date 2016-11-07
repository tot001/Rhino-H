	var getBlobURL=(window.URL&& URL.createObjectURL.bind(URL))||window.createObjectURL||(window.webkitURL&&webkitURL.revokeObjectURL.bind(webkitURL));
	var revokeBlobURL=(window.URL&&URL.revokeObjectURL.bind(URL))||(window.webkitURL&&webkitURL.revokeObjectURL.bind(webkitURL))||window.revokeBlobURL;

window.onload=function () {
		var upload=document.getElementById('upload');
		var Atlas=document.getElementsByClassName('Atlas')[0];

		upload.onchange=function (e) {
 		var fsion=this.value.substring(this.value.lastIndexOf("."),this.value.length);
    		fsion=fsion.toLowerCase();

    	if ((fsion!='.jpg')&&(fsion!='.gif')&&(fsion!='.jpeg')&&(fsion!='.png')&&(fsion!='.bmp')) {
    		alert("ooo");
 			return false;
    		}
   			

				var files=this.files;
				for (var i = 0; i <= files.length; i++) {
					var type=files[i].type;
					if (type.substring(0,6) !=="image/") continue;
					var img=document.createElement('img');
					img.src=getBlobURL(files[i]);
					img.onload=function () {
						this.width=100;
						Atlas.appendChild(this);
						revokeBlobURL(this.src);
					}
				}

				return false;
			};
};