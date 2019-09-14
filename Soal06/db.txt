

CREATE TABLE Name(
    id INT (20) NOT NULL,
    name VARCHAR (50) NOT NULL,
    id_work VARCHAR(100) NOT NULL,
    id_salary VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO Name ('id', 'name', 'id_work', 'id_salary') VALUES
(1, 'Rebacca', 1, 1),
(2, 'Vita', 2, 2);

CREATE TABLE Work (
    id INT (20) NOT NULL,
    name VARCHAR (50) NOT NULL,
    id_salary INT(50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO Work ('id', 'name', 'id_salary') VALUES
(1, 'Frontend Dev', 1),
(2, 'Backend Dev', 2);

CREATE TABLE Category (
    id INT (20) NOT NULL,
    salary INT (50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO Category ('id', 'salary') VALUES
(1, 10.000.000),
(2, 12.000.000);


SELECT Name.name, Work.name, Category.salary
FROM Name INNER JOIN  Work 
ON Name.id = Work.id
INNER JOIN Category
ON Name.id = Category.id