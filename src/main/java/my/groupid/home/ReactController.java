package my.groupid.home;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
class ReactController {

	@ModelAttribute("module")
	String module() {
		return "react";
	}

	@GetMapping("/react")
	String about() {
		return "home/react";
	}
}
