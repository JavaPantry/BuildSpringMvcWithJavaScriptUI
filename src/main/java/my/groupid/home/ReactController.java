package my.groupid.home;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

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

	@GetMapping("/react/data")
	@ResponseBody
	List<A> getDummyData(){
		List<A> result = new ArrayList<A>();
		result.add(new A(0l,"Alex", "new stuff hunter"));
		result.add(new A(2l,"Bohdan", "legacy breaker"));
		result.add(new A(3l,"Igor", "problem solver or maker"));
		result.add(new A(3l,"Hong", "CATERPILLAR"));
		return result;
	}
}

class A{
	Long	id;
	String	name;
	String	description;

	public A(Long id, String name, String description) {
		this.id = id;
		this.name = name;
		this.description = description;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}