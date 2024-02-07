package com.todo.miniproject.restfulwebservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoJpaResource {

    @Autowired
    private TodoHardCodedService todoService;

    @Autowired
    private TodoJpaRepository todoJpaRepo;

    @GetMapping("/jpa/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){

        return todoJpaRepo.findByUsername(username);
    }

    //delete method
    @DeleteMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username,@PathVariable long id){
        todoJpaRepo.deleteById(id);

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/jpa/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username,@PathVariable long id){
        return todoJpaRepo.findById(id).get();
    }

    @PutMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo)
    {
        Todo todoUpdated=todoJpaRepo.save(todo);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @PostMapping("/jpa/users/{username}/todos")
    public ResponseEntity<Todo> createTodo(@PathVariable String username, @RequestBody Todo todo)
    {
        todo.setUsername(username);
        Todo createdTodo=todoJpaRepo.save(todo);

        URI uri= ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
        return  ResponseEntity.created(uri).build();
    }
}
