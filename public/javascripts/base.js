

var contactForm = {
	"init":function() {
		$("#contact").hide();
		$("#contact").addClass("dhtml-contact");
		this.showing = false;
	},
	"show":function() {
		$("#contact").show();
		$("#contact-item a").addClass("selected");
		/*Hide form if they click anywhere besides on the form*/
		$("body").click(contactForm.hide);
		$("#name-tb").focus();
		$("#contact").click(function(e) {
			e.stopPropagation();
			return false;
		})
		contactForm.showing = true;
	},
	"hide":function() {
		$("#contact").hide();
		$("#contact-item a").removeClass("selected");
		$("body").unbind(contactForm.hide)
		$("#contact").unbind();
		contactForm.showing = false;
	},
	"send":function() {
		//name & message are required
		if ($("#name-tb").val().length < 1) {
			$("#name-tb").focus();
		}
		else if ($("#message-ta").val().length < 1) {
			$("#message-ta").focus();
		}
		else {
			/*$("#contact").send();*/contactForm.hide();
		}
		},
	"showing":false
}