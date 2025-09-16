DROP TABLE IF EXISTS tasks;

-- the tasks table
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE NOT NULL
);