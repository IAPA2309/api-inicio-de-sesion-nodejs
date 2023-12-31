USE [master]
GO
/****** Object:  Database [usuarios]    Script Date: 25/9/2023 17:37:52 ******/
CREATE DATABASE [usuarios]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'usuarios', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\usuarios.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'usuarios_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\usuarios_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [usuarios] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [usuarios].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [usuarios] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [usuarios] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [usuarios] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [usuarios] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [usuarios] SET ARITHABORT OFF 
GO
ALTER DATABASE [usuarios] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [usuarios] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [usuarios] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [usuarios] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [usuarios] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [usuarios] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [usuarios] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [usuarios] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [usuarios] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [usuarios] SET  DISABLE_BROKER 
GO
ALTER DATABASE [usuarios] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [usuarios] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [usuarios] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [usuarios] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [usuarios] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [usuarios] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [usuarios] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [usuarios] SET RECOVERY FULL 
GO
ALTER DATABASE [usuarios] SET  MULTI_USER 
GO
ALTER DATABASE [usuarios] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [usuarios] SET DB_CHAINING OFF 
GO
ALTER DATABASE [usuarios] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [usuarios] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [usuarios] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [usuarios] SET QUERY_STORE = OFF
GO
USE [usuarios]
GO
/****** Object:  User [usuario]    Script Date: 25/9/2023 17:37:52 ******/
CREATE USER [usuario] FOR LOGIN [usuario] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 25/9/2023 17:37:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](150) NOT NULL,
	[password] [varchar](150) NOT NULL,
	[nombre] [varchar](150) NULL,
	[apellido] [varchar](150) NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([id], [name], [password], [nombre], [apellido]) VALUES (1, N'usario1', N'contra', NULL, NULL)
INSERT [dbo].[Users] ([id], [name], [password], [nombre], [apellido]) VALUES (2, N'usuario', N'contra2', N'ia', N'pa23')
INSERT [dbo].[Users] ([id], [name], [password], [nombre], [apellido]) VALUES (3, N'usarioRegister', N'contrapassword', NULL, NULL)
INSERT [dbo].[Users] ([id], [name], [password], [nombre], [apellido]) VALUES (12, N'usuario1', N'usuario1', NULL, NULL)
INSERT [dbo].[Users] ([id], [name], [password], [nombre], [apellido]) VALUES (13, N'usuario3', N'contrasena3', N'xd', N'xd')
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
USE [master]
GO
ALTER DATABASE [usuarios] SET  READ_WRITE 
GO
