
import { createBrowserRouter } from "react-router-dom";
import { env } from "../env";
import { App } from "../App";
import { HelloComponent } from "../hello";


export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index:true, 
          element:<HelloComponent />
        }
        
      ]
    }
  ],
  {
    basename: env.baseRoute
  }

  
);
