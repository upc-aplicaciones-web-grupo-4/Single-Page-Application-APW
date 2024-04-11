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







### <a name="_toc163674897"></a>4.7.1.   Class Diagrams.
![](images/ClassDiagrams.png)

Link: <https://lucid.app/lucidchart/abe981e7-1c29-4d33-af25-1a2ba48c3300/edit?viewport_loc=-7598%2C-884%2C3976%2C2123%2C0_0&invitationId=inv_34e168e9-90db-4b20-9ca7-1c81ca7a0310>
### <a name="_toc163674898"></a>4.7.2.   Class Dictionary.

|Class|Description|
| :- | :- |
|Doctor|La clase Doctor representa a los médicos especializados en endocrinología que utilizan la aplicación "HormonalCare". Los doctores pueden acceder a la plataforma para gestionar el tratamiento de pacientes, programar citas, revisar registros médicos y comunicarse con otros médicos y pacientes. |
|Usuario|La clase User representa a los usuarios de la aplicación "HormonalCare". Esta clase encapsula las características y comportamientos comunes compartidos tanto por los pacientes como por los médicos dentro del sistema.|
|<p>Paciente</p><p></p>|Esta clase representa a los pacientes dentro del sistema de la aplicación "HormonalCare". Esta clase hereda de la clase Usuario y agrega propiedades y métodos específicos para gestionar la información y las interacciones relacionadas con los pacientes.|
|Solicitud|En esta clase están las solicitudes realizadas por los pacientes dentro de la aplicación. Esta clase almacena información detallada sobre cada solicitud, incluyendo el, la fecha y hora solicitadas para la cita, el motivo de la cita médica, el estado actual de la solicitud, etc. |
|Calendario|Esta clase proporciona funcionalidades para gestionar citas médicas y eventos dentro de la aplicación. Esta clase permite la programación, visualización y gestión de eventos relacionados con la atención médica de los pacientes.|
|Enfermedad|Esta clase representa diferentes tipos de enfermedades, como gripe, diabetes o hipertensión. Cada enfermedad tiene un identificador único y un nombre. Las consultas médicas están relacionadas con las enfermedades, lo que significa que cuando visitas al médico por una enfermedad, se registra esa enfermedad.|
|Resultado|Esta clase maneja los resultados de tus exámenes médicos, como análisis de sangre o radiografías. Cada resultado tiene un número único, una fecha y el resultado del examen. Los resultados están relacionados con tus consultas médicas. Cuenta con la opción de poder ver el resultado y agregarlo.|
|Laboratorio|Aquí se registran los laboratorios médicos donde se realizan tus exámenes. Cada laboratorio tiene un número identificador y un nombre. Los resultados de exámenes provienen de estos laboratorios.	|
|Tratamiento|Representa los tratamientos que recibes para una enfermedad. Por ejemplo, si te diagnostican diabetes, el tratamiento podría incluir cambios en la dieta y medicamentos. Cada tratamiento tiene un número único y un tipo. Se puede registrar los tratamientos que el medico vea conveniente.|
|Medicamento|Aquí se incluyen los medicamentos que forman parte de tu tratamiento. Cada medicamento tiene un número identificador, un nombre genérico y una marca. Los medicamentos están asociados con los tratamientos que recibes y pueden registrarse dependiendo de las necesidades del doctor.|
|Recordatorio|La clase Recordatorio gestiona recordatorios dentro del sistema. Contiene un identificador único y un contenido descriptivo que especifica la tarea o evento a recordar. Ofrece funcionalidades para configurar y recibir notificaciones de recordatorios.|
|Mensaje|Esta clase representa los mensajes enviados dentro de la aplicación. Cada mensaje tiene un identificador único, un contenido de texto y una fecha y hora de envío. Permite enviar mensajes entre usuarios y mantener un registro de comunicaciones.|
|Chat|Aquí se organiza las conversaciones entre usuarios en la aplicación. Tiene un identificador único que representa cada chat y puede contener múltiples mensajes. Proporciona métodos para gestionar y enviar mensajes en tiempo real entre participantes.|
|Consulta\_Medica|La clase Consulta\_Medica registra consultas médicas realizadas en la aplicación. Cada consulta tiene un identificador único y una fecha asociada. Esta clase permite mostrar información relevante sobre la consulta y agregar detalles adicionales sobre el encuentro médico.|
|Receta|Aquí se maneja las recetas médicas generadas para los pacientes. Incluye información como el tipo de receta, el nombre, el precio y los beneficios asociados. Permite ver, registrar y eliminar recetas médicas dentro del sistema.|
|Recordatorio\_Medicacion|La clase Recordatorio\_Medicacion administra los recordatorios relacionados con la medicación de los pacientes. Contiene detalles como los días de recordatorio, la frecuencia diaria y las indicaciones. Ofrece funcionalidades para registrar recordatorios y enviar notificaciones relacionadas con la medicación.|
|Suscripcion|La clase Suscripcion gestiona las suscripciones de los usuarios a planes dentro de la aplicación. Almacena detalles como la fecha de inicio y finalización de la suscripción. Proporciona métodos para ver, elegir, cambiar y cancelar planes de suscripción.|
|Tipo\_Suscripcion|Tipo\_Suscripcion define los diferentes tipos de planes de suscripción disponibles en la aplicación. Cada tipo tiene un identificador único, un nombre, un precio y beneficios asociados. Esta clase facilita la gestión y visualización de los planes de suscripción.|
|Pago|La clase Pago registra los pagos realizados por los usuarios dentro del sistema. Contiene un identificador único, un precio y un código QR asociado al pago. Permite realizar y gestionar transacciones de pago en la aplicación.|
|Tarjeta|Aquí se representa la información de la tarjeta de crédito utilizada para pagos dentro del sistema. Incluye detalles como el nombre del titular, número de tarjeta, fecha de caducidad y número de seguridad. Esta clase facilita el manejo de datos de tarjetas para realizar transacciones.|
|Yape|La clase Yape maneja las transacciones realizadas a través del servicio de pagos Yape. Contiene un identificador único de transacción y un código de transacción asociado. Proporciona métodos para gestionar y visualizar datos relacionados con transacciones Yape.|
|Plin|Esta clase gestiona las transacciones realizadas a través del servicio de pagos Plin. Almacena un identificador único de transacción y un código asociado. Ofrece funcionalidades para manejar y consultar datos de transacciones Plin en la aplicación.|

## <a name="_toc163674899"></a>4.8.      Database Design.
### <a name="_toc163674900"></a>4.8.1.   Database Diagram.

![](images/DatabaseDiagram.png)

Link: https://upcedupe-my.sharepoint.com/:b:/g/personal/u202211742\_upc\_edu\_pe/ERqeXmr72tpJsapVhOFRtwUBSZTw8gd5x9iD1lB0\_XhtLw?e=4RwrVc