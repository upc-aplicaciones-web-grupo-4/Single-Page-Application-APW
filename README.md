<div align="center">

<img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/UPC_logo_transparente.png" alt="Logo UPC">


# Universidad Peruana de Ciencias Aplicadas

Ingeniería de Software

Ciclo 2024-01

<hr>

# <center>Desarrollo de Aplicaciones Open Source</center>

## TF REPORT

**Sección:** SW53

**Profesor**: Alex Ponce

**StartUp Name**: 

**Producto**: 

### Team Members:

| Member                            |    Code    |
| :-------------------------------- | :--------: |
| Quispesivana Torres Claudio Sandro | U202215099 |
| Astuyauri Calderon Jherson David | U202218451 |
| Hernan Emilio Morales Calderon | U202216263 |
| Chinchihualpa Saldarriaga Luis Sebastian | U202212112 |
| Lostaunau Pereira Estefano Sebastian | U202211742 |

<br>
</div>




# **CAPÍTULO V: PRODUCT IMPLEMENTATION, VALIDATION & DEPLOYMENT** 
## 5\.1.      Software Configuration Management.
### 5\.1.1.   Software Development Environment Configuration.


**Project Management:**

**Discord:** Utilizamos Discord como plataforma principal de comunicación y colaboración entre los miembros del equipo de desarrollo y gestión del proyecto. Discord proporcionó canales de comunicación en tiempo real para discusiones, reuniones y actualizaciones del proyecto.

**WhatsApp:** Se utilizó WhatsApp como una herramienta de comunicación para mantener el contacto con los miembros del equipo y colaborar en cierta medida.

**Landing Page:** Para dar vida a la primera impresión de nuestra landing page, decidimos usar HTML, CSS y JavaScrip que son ampliamente conocidas y utilizadas en la creación de páginas web. Estas tecnologías permitieron crear una página atractiva, funcional y adaptada a las necesidades del proyecto.


**Requirements Management:**

**Miro:** Utilizamos Miro como herramienta principal para la gestión de requisitos. En Miro, creamos mapas mentales y diagramas que ayudaron a visualizar y organizar los requisitos del proyecto, incluyendo características, funcionalidades y objetivos clave.



**Product UX/UI Design:** 

**Figma:** Empleamos Figma para el diseño de la interfaz de usuario (UI) y la experiencia de usuario (UX) de la aplicación HormonalCare. Figma permitió la creación de prototipos, wireframes y diseños visuales que guiarán el desarrollo del producto final. 

**UXPressia:** Utilizamos UXPressia como herramienta especializada en la creación de mapas de experiencia de usuario, perfiles de clientes y otros elementos relacionados con el diseño de UX. UXPressia nos permitió visualizar y comprender la experiencia del usuario en profundidad, ayudando a mejorar la usabilidad y el diseño de la aplicación.

**Canva:** Incorporamos Canva en la etapa de diseño para la creación de recursos gráficos adicionales, como imágenes, gráficos y presentaciones, que mejoró la estética y la presentación del producto.

**Google Forms:** Utilizamos Google Forms para recopilar retroalimentación y realizar encuestas de usuarios. Google Forms nos permitió recoger datos relevantes sobre la experiencia de los usuarios y las necesidades del cliente, lo que influyó en el diseño y desarrollo del producto.



**Software Development:**

**IDE (Entorno de Desarrollo Integrado):** Utilizamos Visual Studio Code como nuestro IDE principal debido a su capacidad para facilitar el desarrollo web moderno y eficiente. Visual Studio Code ofrece soporte robusto para los lenguajes y tecnologías clave que utilizamos, como HTML, CSS, JavaScript y frameworks como Angular o Vue.js. Además, su interfaz intuitiva y extensibilidad mediante plugins nos permitió trabajar de manera más productiva, asegurando una codificación de calidad y una depuración eficaz.

**Control de Versiones:** Git será fundamental para el control de versiones del código fuente. La integración nativa con sistemas de control de versiones como Git también es crucial para nuestra gestión de proyectos, lo cual, nos permitió un control preciso de nuestro código fuente y facilitando la colaboración entre el equipo de desarrollo.

**Gestión de Dependencias:** Usamos npm (Node Package Manager) para gestionar las dependencias del proyecto, incluyendo bibliotecas y paquetes necesarios para el desarrollo.


**Software Documentation:**

**GitHub:** Empleamos GitHub como plataforma principal para la documentación del código y la colaboración en el desarrollo. Utilizamos el README.md para documentar el proceso de desarrollo.



#### 5.1.2.   Source Code Management.

Para garantizar la eficiencia y evitar conflictos en el desarrollo de soluciones, los proyectos de NinjaCode se gestionaron en una organización de GitHub. Dentro de esta organización, se encuentran los repositorios correspondientes a cada proyecto. Aquí están los enlaces a los repositorios:

**Landing page:**
[https://github.com/upc-aplicaciones-web-grupo-4/LandingPageAppWeb](https://github.com/upc-aplicaciones-web-grupo-4/LandingPageAppWeb)

**Tests de Aceptación:**

En cuanto al manejo del Gitflow, fue de la siguiente forma:

En el desarrollo de ‘HormonalCare’, cada cambio que se realizó en los archivos se marcó con un mensaje con el formato “Conventional Commits”. Esta práctica facilitó la identificación de los cambios realizados en cada commit, permitió un seguimiento más eficiente del proyecto. Además, este modelo incluye la rama main, que contuvo las versiones finales y estables del proyecto. Para mantener una organización clara del proyecto, se creó una rama específica para cada capítulo del proyecto. Esto permitió un seguimiento más detallado y una mejor organización del código."


#### 5.1.3.   Source Code Style Guide & Conventions.
Nuestro equipo adoptó las siguientes convenciones y guías de estilo para garantizar un código fuente coherente, legible y mantenible en los diferentes lenguajes y tecnologías utilizados en nuestra solución:


**HTML:**
•	Se utilizó la sangría adecuada y un formato limpio para mejorar la legibilidad.
•	Se incluyó comentarios descriptivos cuando fue necesario, especialmente en secciones relacionadas con la estructura de la aplicación web y la renderización de componentes.
•	Se utilizó etiquetas semánticas adecuadas para mejorar la accesibilidad.

**CSS:**
•	Se prefirió el uso de abreviaturas y valores numéricos sin unidades cuando sea posible.
•	Se utilizaron comentarios para separar y organizar secciones del código CSS.
•	Se aplicaron principios de diseño responsivo y accesibilidad en los estilos.

**JavaScript:**
•	Las declaraciones de variables se realizaron al principio de su ámbito.
•	Se prefirió el uso de const y let sobre var.
•	Se incluyó comentarios descriptivos para explicar la funcionalidad de componentes, servicios y secciones complejas.
•	Se aplicaron principios de programación reactiva y patrones de diseño adecuados para la construcción de la aplicación web.


Para la gestión de versiones, adoptamos el flujo de trabajo Gitflow, que define un modelo estricto de ramificación enfocado en la publicación del proyecto. Este enfoque permitió a nuestro equipo trabajar independientemente en funcionalidades, correcciones de errores y otras tareas sin afectar el trabajo de los demás. Creamos ramas separadas para cada capítulo. Estas ramas se fusionaron con la rama principal (main) para su despliegue. Gitflow aumentó la velocidad de entrega, disminuyó los errores al mezclar ramas, eliminó dependencias al entregar código y nos proporcionó un control riguroso sobre versiones y cambios.

#### 5.1.4.   Software Deployment Configuration.

Utilizamos el servicio GitHub Pages para desplegar la landing page de HormonalCare. Este servicio nos permitió hospedar nuestra landing page directamente desde nuestro repositorio de GitHub. Los pasos que seguimos:

1.	Después de haber integrado los cambios y nuevas versiones de la landing page en el repositorio, y de asegurarnos de que las ramas estén actualizadas, ingresaremos a la plataforma de GitHub y nos dirigiremos a nuestro repositorio del proyecto.
2.	Dentro del repositorio, accedimos a la pestaña de "Settings" y buscamos la sección denominada "Pages" en el menú lateral.
3.	En la sección "Pages", seleccionamos la rama main desde la cual se desplegará la landing page.
4.	Después de haber seleccionado la rama, confirmamos los cambios realizados, y GitHub realizo el proceso de despliegue de la landing page.
5.	Una vez que el proceso de despliegue finalizó, GitHub nos proporcionó el enlace para ver nuestra landing page publicada (htt).

### 5.2.	Landing Page, Services & Applications Implementation.

#### 5.2.1.   Sprint 1

##### 5.2.1.1. Sprint Planning 1.













