package com.aryankn29.taskmanager.repository;

import org.springframework.data.r2dbc.repository.R2dbcRepository;
import org.springframework.stereotype.Repository;
import com.aryankn29.taskmanager.model.Task;

@Repository
public interface TaskRepository extends R2dbcRepository<Task, Integer>
{

    // Spring Data R2DBC provides implementations for all the basic
    // CRUD (Create, Read, Update, Delete) methods at runtime.
    // this included methods like findAll(), findById(), save(), deleteById()

}