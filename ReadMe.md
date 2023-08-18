# Iniciar proyecto

node index.js

# usario y permisos bd

En caso de que se necesite 

```
USE [master]
GO
CREATE LOGIN [usuario] WITH PASSWORD=N'usuario', DEFAULT_DATABASE=[usuarios], CHECK_EXPIRATION=OFF,
CHECK_POLICY=OFF
GO

USE [usuarios]
GO
CREATE USER [usuario] FOR LOGIN [usuario]
GO
USE [usuarios]
GO
ALTER ROLE [db_owner] ADD MEMBER [usuarios]
GO
```