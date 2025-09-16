package com.aryankn29.taskmanager.service;

import com.aryankn29.taskmanager.model.Task;
import com.aryankn29.taskmanager.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    public Flux<Task> findAll() {
        return taskRepository.findAll();
    }

    public Mono<Task> findById(Integer id) {
        return taskRepository.findById(id);
    }

    public Mono<Task> create(Task task) {
        // to make sure the task is set to incomplete
        task.setCompleted(false);
        return taskRepository.save(task);
    }

    public Mono<Task> update(Integer id, Task updatedTask) {
        return taskRepository.findById(id)
                .flatMap(existingTask -> {
                    existingTask.setTitle(updatedTask.getTitle());
                    existingTask.setCompleted(updatedTask.getCompleted());
                    return taskRepository.save(existingTask);
                });
    }

    public Mono<Void> deleteById(Integer id) {
        return taskRepository.deleteById(id);
    }
}