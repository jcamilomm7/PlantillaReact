import Inicio from "../pages/Inicio";
import Registro from "../pages/Registro";



const routesAdmin = [
    {
      patch: "/",
      component: Inicio ,
    },
    {
        patch: "/registro",
        component: Registro ,
      } 
  ];

  const routesUser = [
    {
      patch: "/",
      component: Inicio ,
    },
    {
        patch: "/registro",
        component: Registro ,
      } 
  ];


  const routes = [...routesAdmin,...routesUser];
  
  export default routes;
  