package com.aryankn29.taskmanager.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table("tasks")
public class Task {

    @Id
    private Integer id;

    @NotBlank(message = "Task title cannot be empty or null")
    private String title;

    private Boolean completed;
}