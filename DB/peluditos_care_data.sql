INSERT INTO owner_information(
	name,
    last_name,
    birthdate,
    phone_number,
    email,
    password,
    street,
    street_number,
    zip_code,
    about_me,
    url_profile_picture) 
VALUES 
(
    'Laura', 'González', '1985-04-12', '+525533445566', 'laura.gonzalez@email.com', 'hashedpassword123',
    'Av. Insurgentes Sur', '1234', '03100',
    'Amante de los perros grandes, me encanta pasear con mi labrador en las mañanas.',
    'https://example.com/images/laura.jpg'
),
(
    'Carlos', 'Ramírez', '1990-11-03', '+525511223344', 'carlos.ramirez@email.com', 'securepwd456',
    'Calle Palma', '78', '04010',
    'Tengo dos gatos rescatados, y soy muy cuidadoso con su alimentación y salud.',
    'https://example.com/images/carlos.jpg'
),
(
    'Ana', 'Torres', '1978-06-21', '+525566778899', 'ana.torres@email.com', 'mypassword789',
    'Av. Reforma', '250', '06600',
    'Disfruto mucho pasar tiempo con mis mascotas y siempre busco lo mejor para ellas.',
    'https://example.com/images/ana.jpg'
),
(
    'Miguel', 'Lopez', '1995-09-15', '+525544332211', 'miguel.lopez@email.com', 'pass1234miguel',
    'Calle Río Lerma', '15', '06500',
    'Mi perrita Lila es como una hija para mí, buscamos cuidadores que la consientan.',
    'https://example.com/images/miguel.jpg'
),
(
    'Sofía', 'Martínez', '1988-02-28', '+525500112233', 'sofia.martinez@email.com', 'sofiasecretpass',
    'Calle Amsterdam', '310', '06170',
    'Trabajo desde casa, por lo que paso mucho tiempo con mis mascotas. Me encanta conocer otros dueños responsables.',
    'https://example.com/images/sofia.jpg'
);

-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
INSERT INTO pets(name,
				behavior,
                age,
                description,
                url_pet_picture,
                fk_owner)
	VALUES (
    'Max',
    'Juguetón, sociable, un poco terco',
    3,
    'Labrador color chocolate que ama correr y jugar con la pelota.',
    'https://example.com/pets/max.jpg',
    1),
	(
    'Michi',
    'Tranquilo, curioso, independiente',
    5,
    'Gato rescatado de pelaje gris, le gusta dormir en lugares altos.',
    'https://example.com/pets/michi.jpg',
    2),
    (
    'Kira',
    'Obediente, protectora, cariñosa',
    7,
    'Pastor alemán muy leal y bien entrenada. Le encanta acompañar a su dueña al parque.',
    'https://example.com/pets/kira.jpg',
    3),
    (
    'Lila',
    'Juguetona, muy activa y amistosa con niños',
    2,
    'French poodle pequeña con gran energía, adora las caminatas diarias.',
    'https://example.com/pets/lila.jpg',
    4),
    (
    'Toby',
    'Dócil, mimoso, algo travieso',
    4,
    'Cocker spaniel que disfruta estar en casa y recibir cariño constantemente.',
    'https://example.com/pets/toby.jpg',
    5);
    
    SELECT * FROM pets;
-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

INSERT INTO caregiver_information(
	name,
    last_name,
    birthdate,
    phone_number,
    email,
    password,
    street,
    street_number,
    zip_code,
    about_me,
    expertise,
    years_of_experience,
    url_profile_picture)
VALUES
	(
    'Julieta',
    'Morales',
    '1992-03-18',
    '+525599887766',
    'julieta.morales@email.com',
    'julietaPass1',
    'Calle Cedros',
    '221',
    '03300',
    'Soy cuidadora certificada con amor por los animales. Me especializo en perros grandes. Experta en manejo de comportamiento canino y primeros auxilios para mascotas.',
    TRUE,
    4,
    'https://example.com/caregivers/julieta.jpg'
),
(
    'Andrés',
    'Pérez',
    '1987-08-05',
    '+525566112244',
    'andres.perez@email.com',
    'andreSecure88',
    'Av. División del Norte',
    '1520',
    '04330',
    'He trabajado como paseador y cuidador los últimos años. Paciente, responsable y puntual. Experto en paseos, cuidado nocturno y administración de medicamentos.',
    TRUE,
    6,
    'https://example.com/caregivers/andres.jpg'
),
(
    'Mariana',
    'Reyes',
    '1995-12-10',
    '+525544332255',
    'mariana.reyes@email.com',
    'passMari95',
    'Calle Niza',
    '87',
    '06600',
    'Amante de los gatos, tengo formación en nutrición felina y cuidado postoperatorio. Experta en cuidado felino, medicación e higiene de mascotas.',
    TRUE,
    3,
    'https://example.com/caregivers/mariana.jpg'
),
(
    'Diego',
    'Hernández',
    '1980-06-30',
    '+525500223311',
    'diego.hernandez@email.com',
    'secureDiego80',
    'Calle Oaxaca',
    '99',
    '06700',
    'Veterinario retirado, ahora me dedico a cuidar mascotas en casa. Atención 24/7 disponible. Experto en atención médica básica, cuidado postoperatorio y entrenamiento.',
    TRUE,
    10,
    'https://example.com/caregivers/diego.jpg'
),
(
    'Paola',
    'Silva',
    '1998-09-22',
    '+525577889900',
    'paola.silva@email.com',
    'paolapet123',
    'Calle San Luis',
    '314',
    '06140',
    'Cuidadora joven y entusiasta, ideal para mascotas con mucha energía. Ambiente seguro y con jardín. Experta en cuidado diurno, entrenamiento básico y juegos activos.',
    TRUE,
    2,
    'https://example.com/caregivers/paola.jpg'
);

-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

INSERT INTO user_roles(
	role_name,description)
    VALUES 
(
    'owner',
    'Usuario que registra a sus mascotas y busca cuidadores para ellas.'
),
(
    'caregiver',
    'Usuario que ofrece servicios de cuidado, paseo o atención a mascotas.'
),
(
    'admin',
    'Usuario con privilegios administrativos para gestionar usuarios, roles y contenido del sistema.'
),
(
    'guest',
    'Usuario sin cuenta registrada que puede navegar información básica de la plataforma.'
),
(
    'moderator',
    'Usuario responsable de revisar contenido, comentarios o reportes dentro de la plataforma para mantener un ambiente seguro y confiable.'
);

-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

INSERT INTO owner_caregiver_has_roles(
	id_owner,
    id_caregiver,
    id_role)
VALUES
(
    1, 2, 1  -- Laura es dueña, y se relaciona con Andrés como su cuidador
),
(
    2, 3, 1  -- Carlos es dueño, Mariana es su cuidadora
),
(
    3, 4, 1  -- Ana contrata a Diego como cuidador
),
(
    5, 5, 1  -- Sofía se vincula con Paola como cuidadora
),
(
    4, 4, 2  -- Miguel también es cuidador, además de dueño (doble rol)
);

-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

INSERT INTO service_cost
	(amount,
    description,
    fk_caregiver)
VALUES 
(
    250.00,
    'Cuidado diurno por 8 horas incluyendo paseo y alimentación.',
    1  
),
(
    180.00,
    'Paseo de 1 hora por parque con hasta 2 perros.',
    2  
),
(
    300.00,
    'Cuidado de gatos en casa del dueño, incluye limpieza de arenero.',
    3  
),
(
    500.00,
    'Atención médica básica y monitoreo postoperatorio por 24 horas.',
    4  
),
(
    220.00,
    'Sesión de entrenamiento básico + juegos activos (1.5 horas).',
    5  
);

-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

INSERT INTO type_services(
		type_service,
        description,
        service_date,
        fk_owner,
        fk_caregiver,
        fk_service_cost)
	VALUES
(
    'Cuidado diurno',
    'Cuidado durante la jornada laboral, incluye paseo y alimentación.',
    '2025-07-01',
    1,  -- Laura
    1,  -- Julieta
    1   -- Servicio de Julieta: $250
),
(
    'Paseo',
    'Paseo de 1 hora en parque cercano para Max.',
    '2025-07-02',
    2,  -- Carlos
    2,  -- Andrés
    2   -- Servicio de Andrés: $180
),
(
    'Cuidado felino',
    'Visita a domicilio para alimentar y limpiar arenero de Michi.',
    '2025-07-03',
    2,  -- Carlos
    3,  -- Mariana
    3   -- Servicio de Mariana: $300
),
(
    'Cuidado postoperatorio',
    'Atención de 24 horas para Kira tras cirugía menor.',
    '2025-07-05',
    3,  -- Ana
    4,  -- Diego
    4   -- Servicio de Diego: $500
),
(
    'Entrenamiento básico',
    'Sesión para Toby enfocada en comandos básicos y socialización.',
    '2025-07-06',
    5,  -- Sofía
    5,  -- Paola
    5   -- Servicio de Paola: $220
);

-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

INSERT INTO owner_reviews(
		score, 
        date,
        description,
        fk_caregiver,
        fk_owner)
VALUES
(
    5,
    '2025-07-10',
    'Julieta fue excelente con Max, muy atenta y responsable durante todo el cuidado.',
    1,
    1
),
(
    4,
    '2025-07-11',
    'Andrés cumplió bien con los paseos, aunque llegó un poco tarde una vez.',
    2,
    2
),
(
    5,
    '2025-07-12',
    'Mariana cuidó a Michi con mucho cariño, super recomendada para gatos.',
    3,
    2
),
(
    5,
    '2025-07-14',
    'Diego tiene mucha experiencia, se notó en el cuidado postoperatorio de Kira.',
    4,
    3
),
(
    4,
    '2025-07-15',
    'Paola es muy entusiasta y Toby disfrutó mucho la sesión de entrenamiento.',
    5,
    5
);

-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

INSERT INTO caregiver_reviews(
		score, 
        name,
        last_name,
        email,
        date,
        description,
        fk_owner,
        fk_caregiver)
VALUES
(
    5,
    'Laura',
    'González',
    'laura.gonzalez@email.com',
    '2025-07-16',
    'Carlos fue un dueño muy atento y claro con las indicaciones del cuidado.',
    1,
    2
),
(
    4,
    'Carlos',
    'Ramírez',
    'carlos.ramirez@email.com',
    '2025-07-17',
    'Mariana es excelente con los gatos y muy paciente.',
    2,
    3
),
(
    5,
    'Ana',
    'Torres',
    'ana.torres@email.com',
    '2025-07-18',
    'Diego tiene mucha experiencia y siempre responde rápido a cualquier duda.',
    3,
    4
),
(
    4,
    'Sofía',
    'Martínez',
    'sofia.martinez@email.com',
    '2025-07-19',
    'Paola es muy dedicada y juguetona con las mascotas.',
    5,
    5
),
(
    5,
    'Miguel',
    'Lopez',
    'miguel.lopez@email.com',
    '2025-07-20',
    'Julieta siempre da lo mejor para cuidar a las mascotas.',
    4,
    1
);

-- Comprobación de inserción de datos
SELECT * FROM owner_information;
SELECT * FROM caregiver_information;
SELECT * FROM pets;
SELECT * FROM user_roles;
SELECT * FROM owner_caregiver_has_roles;
SELECT * FROM service_cost;
SELECT * FROM type_services;
SELECT * FROM owner_reviews;
SELECT * FROM caregiver_reviews;



