Zaratustra: E-commerce de Libros (Django)
Zaratustra es una plataforma de comercio electrónico desarrollada para la gestión de catálogos literarios, usuarios y procesos de venta. El proyecto se enfoca en una arquitectura de backend robusta, priorizando la integridad de los datos en el inventario y una navegación fluida mediante procesos asíncronos.

🛠️ Stack Tecnológico
Backend: Python 3.10+ / Django 4.2+

Base de Datos: Dual Support (SQLite para desarrollo ágil / PostgreSQL para producción)

Frontend: HTML5, CSS3 y JavaScript Vanilla

Seguridad: Django Auth System (Uso de Decoradores y validación de estado de sesión)

Comunicación Asíncrona: Fetch API (JavaScript)

🚀 Implementaciones Técnicas Destacadas
1. Gestión de Inventario y Flujo de Carrito
Implementé una lógica de negocio para garantizar la coherencia del stock disponible. El sistema sincroniza el inventario en tiempo real según la interacción del usuario con el carrito: el stock disminuye al agregar un ejemplar y se recupera automáticamente al quitarlo, manteniendo la base de datos siempre actualizada con la disponibilidad real.

2. Automatización mediante Django Signals
Utilicé el signal post_save del modelo User para automatizar la creación de perfiles de usuario. Esto permite que, al momento del registro, el sistema genere de forma desacoplada la información adicional necesaria para la gestión de clientes sin ensuciar la lógica principal de creación de usuario.

3. Buscador Asíncrono (Fetch API)
Para optimizar la experiencia de usuario, desarrollé un buscador dinámico que filtra por título o autor. Utiliza JavaScript para realizar peticiones asíncronas a endpoints de Django, permitiendo actualizar los resultados en el DOM sin necesidad de recargar la página completa.

4. Control de Acceso y Seguridad
La protección de rutas y la gestión de permisos se manejan mediante decoradores nativos de Django y validaciones de estado de sesión (is_authenticated). Esto asegura que las funciones críticas del e-commerce, como la gestión del carrito o el acceso a perfiles, estén restringidas únicamente a usuarios autorizados.


📦 Instalación y Configuración Local
Este proyecto requiere una instancia activa de PostgreSQL.

1. Clonar el repositorio:
    git clone https://github.com/tu-usuario/zaratustra.git
    cd zaratustra

2. Configurar el entorno virtual e instalar dependencias:
    python -m venv venv
    Windows: venv\Scripts\activate | Linux/Mac: source venv/bin/activate
    pip install -r requirements.txt

3. Configuración de Base de Datos:
    En el archivo settings.py encontrarás una variable booleana POSTGRES:

    POSTGRES = False: El proyecto utilizará SQLite (ideal para pruebas rápidas).

    POSTGRES = True: El proyecto se conectará a una instancia de PostgreSQL (requiere configurar las credenciales DB_NAME, USER, etc., en el mismo archivo o vía .env).

4. Migraciones e Inicio:
    python manage.py migrate
    python manage.py runserver

Desarrollado por Luciano Sciarretta Junior Backend Developer | Mar del Plata, Argentina