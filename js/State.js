function State(data){
	this.data = data || [];
	this.animationQueue = [];
}

State.prototype.init = function(){
	$(this.data.pages).each(function(index, page){
		var pageId = "page" + index;
		$("<div id='"+pageId+"' class='section'></div>").appendTo("#fullpage")
		$(page.init).each(function(index, cmd){
			if(cmd.type == "text"){
				$("<p/>").attr("id", cmd.id).text(cmd.text).css(cmd.style).appendTo($("#"+pageId));
			}else if(cmd.type == "image"){
				$("<img/>").attr("id", cmd.id).attr("src", cmd.src).css(cmd.style).appendTo($("#"+pageId));
			}
		});
	});

	$("#mask").hide(500);
}

State.prototype.addAnimationQueue = function(index){

	$(this.data.pages[index - 1].animation).each(function(index, animation){
		
		if(animation.isUse == false){
			if(animation.type == "translate"){
				setTimeout(function(){
					$("#" + animation.id).animate({
						"top": animation.toTop,
						"left": animation.toLeft
					}, animation.time);
				}, animation.delay);
			}else if(animation.type == "scale"){
				setTimeout(function(){
					$("#" + animation.id).animate({
						"width": animation.toWidth,
						"height": animation.toHeight
					}, animation.time);
				}, animation.delay);
			}
			animation.isUse = true;
		}
	});
}

State.prototype.clearAnimationQueue = function(){
	this.animationQueue = [];
}