package com.todo.miniproject.restfulwebservices.helloworld;

public class HelloWorldBean {
    String message;
    public HelloWorldBean(String message) {
        this.message=message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
