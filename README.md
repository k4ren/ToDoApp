
# ToDo App 

Aplicacion para el manejo sencillo de tareas

## Funcionalidades
- Añadir tareas a la lista.
- Ver todas las tareas de la lista en la vista principal.
- Eliminar tarea.
- Marcar tarea como completada.
## Requirements

```bash
  node = v14.20.0
  npm = 6.14.17 
```

## Screenshots

- Listado de tareas
[![Captura-desde-2023-12-11-04-53-33.png](https://i.postimg.cc/wMpYTj4J/Captura-desde-2023-12-11-04-53-33.png)](https://postimg.cc/mz85mBs2)

- Registro de tareas
[![Captura-desde-2023-12-10-22-07-04.png](https://i.postimg.cc/ZR7VNQqj/Captura-desde-2023-12-10-22-07-04.png)](https://postimg.cc/MMB72dVj)


## Run Locally

Clone the project

```bash
  git clone git@github.com:k4ren/todoApp.git
```

Go to the project directory

```bash
  cd todoApp
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_REACT_APP_API_URL=`



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
