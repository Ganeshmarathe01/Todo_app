package com.todo.miniproject.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.xpath.XPath;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController{
    @GetMapping(path="/hello-world-bean")
    public HelloWorldBean helloWorldBean(){
        return new HelloWorldBean("Hello World..!");
    }

}
