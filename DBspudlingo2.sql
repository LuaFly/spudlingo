-- Tabela de usuários
CREATE TABLE usuarios (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL, -- Use hashing na aplicação para maior segurança
    role ENUM('estudante', 'professor') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de línguas
CREATE TABLE linguas (
    language_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) UNIQUE NOT NULL,
    codigo CHAR(5) UNIQUE NOT NULL
);

-- Tabela de cursos
CREATE TABLE cursos (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    language_id INT NOT NULL,
    teacher_id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    difficulty_level ENUM('Iniciante', 'Intermediário', 'Avançado') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (language_id) REFERENCES linguas(language_id) ON DELETE CASCADE,
    FOREIGN KEY (teacher_id) REFERENCES usuarios(user_id) ON DELETE SET NULL
);

-- Tabela de aulas
CREATE TABLE lessons (
    lesson_id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES cursos(course_id) ON DELETE CASCADE
);

-- Tabela de progresso do usuário
CREATE TABLE progresso_usuario (
    progress_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    lesson_id INT NOT NULL,
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES usuarios(user_id) ON DELETE CASCADE,
    FOREIGN KEY (lesson_id) REFERENCES lessons(lesson_id) ON DELETE CASCADE,
    UNIQUE (user_id, lesson_id)
);

-- Tabela de questões
CREATE TABLE questoes (
    quiz_id INT AUTO_INCREMENT PRIMARY KEY,
    lesson_id INT NOT NULL,
    question TEXT NOT NULL,
    correct_answer VARCHAR(255) NOT NULL,
    wrong_answer1 VARCHAR(255) NOT NULL,
    wrong_answer2 VARCHAR(255) NOT NULL,
    wrong_answer3 VARCHAR(255) NOT NULL,
    FOREIGN KEY (lesson_id) REFERENCES lessons(lesson_id) ON DELETE CASCADE
);

-- Tabela de pontuação do usuário
CREATE TABLE pontuacao_do_usuario (
    score_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    quiz_id INT NOT NULL,
    score INT NOT NULL,
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES usuarios(user_id) ON DELETE CASCADE,
    FOREIGN KEY (quiz_id) REFERENCES questoes(quiz_id) ON DELETE CASCADE
);

-- Tabela de inscrição de usuários em cursos
CREATE TABLE inscricoes_curso (
    enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES usuarios(user_id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES cursos(course_id) ON DELETE CASCADE,
    UNIQUE (user_id, course_id) -- Impede que um usuário se inscreva duas vezes no mesmo curso
);
