
$(document).ready(() =>{


});

function getPic() {
	$.get("/getpic", (data)=>{
		if(data == "done") {
			$("#pic").html("<img src='cam.jpg' />");
		}
	});
}
