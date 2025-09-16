package com.aryankn29.taskmanager.controller;

import com.aryankn29.taskmanager.model.Task;
import com.aryankn29.taskmanager.service.TaskService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/v1/tasks")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173") // Allow requests from our React front-end
public class TaskController {

    private final TaskService taskService;

    @GetMapping
    public Flux<Task> getAllTasks() {
        return taskService.findAll();
    }

    @GetMapping("/{id}")
    public Mono<Task> getTaskById(@PathVariable Integer id) {
        return taskService.findById(id);
    }

    @PostMapping
    public Mono<Task> createTask(@Valid @RequestBody Task task) {
        return taskService.create(task);
    }

    @PutMapping("/{id}")
    public Mono<Task> updateTask(@PathVariable Integer id, @Valid @RequestBody Task task) {
        return taskService.update(id, task);
    }

    @DeleteMapping("/{id}")
    public Mono<Void> deleteTask(@PathVariable Integer id) {
        return taskService.deleteById(id);
    }
}