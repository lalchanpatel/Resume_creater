

$(document).ready(function() {
	var wrapper1   		=  $(".qualification_filed_wrap"); //Fields wrapper
	var add_button1     = $(".qualification_field_button"); //Add button ID
	$(add_button1).click(function(e){ //on add input button click
		e.preventDefault();
//		$(wrapper1).append('<div><div class="row "><div class="col-25"><label for="sprogram" style="margin-left: 25%;">Study program</label></div><div class="col-75"><input type="text"  name="sprogram[]" placeholder="secondary/senior secondary/ ug/pg"></div></div><div class="row"><div class="col-25"><label for="cname" style="margin-left: 25%;">College name</label></div><div class="col-75"><input type="text"  name="cname[]" placeholder=""></div></div><div class="row"><div class="col-25"><label for="stream" style="margin-left: 25%;">Stream</label></div><div style="float: left; width: 12.5%; margin-top: 6px;"><input type="text"  name="stream[]" placeholder=""></div><div class="col-25"><label for="percent" style="margin-left: 5%;">Percentage/CGPA</label></div><div style="float: left; width: 12.5%; margin-top: 6px;"><input type="text"  name="percent[]" placeholder=""></div></div></div> <a href="#" class="remove_field">Remove</a></div>'); //add input box
        $(wrapper1).append('<div><div class="row" style="margin-left: 10%;"><div class="col-25"><label for="sprogram">Study program</label></div><div class="col-75"><input type="text"  name="sprogram[]" placeholder="secondary/senior secondary/ ug/pg"></div></div><div class="row" style="margin-left: 10%;"><div class="col-25"><label for="cname" >College name</label></div><div class="col-75"><input type="text"  name="cname[]" placeholder=""></div></div><div class="row" style="margin-left: 10%;"><div class="col-25"><label for="stream" >Stream</label></div><div style="float: left; width: 22.5%; margin-top: 6px;"><input type="text"  name="stream[]" placeholder=""></div><div class="col-25"><label for="percent" style="margin-left: 5%;">Percentage/CGPA</label></div><div style="float: left; width: 22.5%; margin-top: 6px;"><input type="text"  name="percent[]" placeholder=""></div></div><a href="#" class="remove_field">Remove<i class="fa fa-trash"></i></a></div>');
	});
	$(wrapper1).on("click",".remove_field", function(e){ //user click on remove text
		e.preventDefault(); $(this).parent('div').remove();
	})

//	-----------------------

	var wrapper2   		=  $(".project_filed_wrap"); //Fields wrapper
	var add_button2     = $(".project_filed_button"); //Add button ID

	$(add_button2).click(function(e){ //on add input button click
		e.preventDefault();
//		$(wrapper2).append('<div>Project name : <input type="text" name="projectname[]">Project discription : <input type="text" name="pdisc[]"> <a href="#" class="remove_field">Remove</a></div>'); //add input box
        $(wrapper2).append('<div><div class="row" style="margin-left: 10%;"><div class="col-25"><label for="projectname">Project name</label></div><div class="col-75"><input type="text"  name="projectname[]" placeholder=""></div></div><div class="row" style="margin-left: 10%;"><div class="col-25"><label for="pdisc">Project discription</label></div><div class="col-75"><input type="text"  name="pdisc[]" placeholder=""></div></div><a href="#" class="remove_field">Remove<i class="fa fa-trash"></i></a></div>');
	});
	$(wrapper2).on("click",".remove_field", function(e){ //user click on remove text
		e.preventDefault(); $(this).parent('div').remove();
	})

//	------------------------


	var wrapper3   		=  $(".area_of_intrest_filed_wrap"); //Fields wrapper
	var add_button3     = $(".area_of_intrest_filed_button"); //Add button ID

	$(add_button3).click(function(e){ //on add input button click
		e.preventDefault();
		$(wrapper3).append('<div><div class="row" style="margin-left: 10%;"><div class="col-25"><label for="intrest">Intrest</label></div><div class="col-75"><input type="text"  name="intrest[]" placeholder=""></div></div><a href="#" class="remove_field">Remove<i class="fa fa-trash"></i></a></div>')
	});
	$(wrapper3).on("click",".remove_field", function(e){ //user click on remove text
		e.preventDefault(); $(this).parent('div').remove();
	})

//	------------------------


    var wrapper4   		=  $(".technical_skill_filed_wrap"); //Fields wrapper
	var add_button4     = $(".technical_skill_filed_button"); //Add button ID

	$(add_button4).click(function(e){ //on add input button click
		e.preventDefault();
//		$(wrapper4).append('<div>Field : <input type="text" name="filed[]">Skill : <input type="text" name="skill[]"> <a href="#" class="remove_field">Remove</a></div>'); //add input box
        $(wrapper4).append('<div><div class="row" style="margin-left: 10%;"><div class="col-25"><label for="filed">Field</label></div><div class="col-75"><input type="text"  name="filed[]" placeholder=""></div></div><div class="row" style="margin-left: 10%;"><div class="col-25"><label for="skill">Skill</label></div><div class="col-75"><input type="text"  name="skill[]" placeholder=""></div></div><a href="#" class="remove_field">Remove<i class="fa fa-trash"></i></a></div>');
	});
	$(wrapper4).on("click",".remove_field", function(e){ //user click on remove text
		e.preventDefault(); $(this).parent('div').remove();
	})

//	---------------------------


	var wrapper5   		=  $(".academic_achievements_filed_wrap"); //Fields wrapper
	var add_button5     = $(".academic_achievements_filed_button"); //Add button ID

	$(add_button5).click(function(e){ //on add input button click
		e.preventDefault();
	    $(wrapper5).append('<div><div class="row" style="margin-left: 10%;"><div class="col-25"><label for="acdachv">Achivement</label></div><div class="col-75"><input type="text"  name="acdachv[]" placeholder=""></div></div><a href="#" class="remove_field">Remove<i class="fa fa-trash"></i></a></div>'); //add input box

	});
	$(wrapper5).on("click",".remove_field", function(e){ //user click on remove text
		e.preventDefault(); $(this).parent('div').remove();
	})


//---------------------------

    var wrapper6   		=  $(".extracurricular_activities_filed_wrap"); //Fields wrapper
	var add_button6     = $(".extracurricular_activities_filed_button"); //Add button ID

	$(add_button6).click(function(e){ //on add input button click
		e.preventDefault();
		$(wrapper6).append('<div><div class="row" style="margin-left: 10%;"><div class="col-25"><label for="extact">Activity</label></div><div class="col-75"><input type="text"  name="extact[]" placeholder=""></div></div><a href="#" class="remove_field">Remove<i class="fa fa-trash"></i></a></div>'); //add input box

	});
	$(wrapper6).on("click",".remove_field", function(e){ //user click on remove text
		e.preventDefault(); $(this).parent('div').remove();
	})

});