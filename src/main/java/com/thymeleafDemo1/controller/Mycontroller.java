package com.thymeleafDemo1.controller;

import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Mycontroller {

	@GetMapping("/index")
	public String prog(Model model) {
		
		
		model.addAttribute("name","Kapil Yadav");
		model.addAttribute("currentDate", new Date().toLocaleString());
		return "index";
	}
}
