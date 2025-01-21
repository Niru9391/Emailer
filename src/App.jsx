import Nav from "./components/shared/Nav"
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Body from "./components/Body"
import Inbox from "./components/Inbox"
import Mail from "./components/Mail"
import Sentmail from "./components/Sentmail"
import Login from "./components/Login"
import { useSelector } from "react-redux"


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Inbox />

        },
        {
          path: "/mail/:id",
          element: <Mail />
        }
      ]

    }

  ]
)
function App() {

const {user} = useSelector((store)=>store.appSlice)

  return (

      <div className="bg={#F6F8FC} h-screen w-screen overflow-hidden">
        {
          !user ? <Login/> : (
            <>
              <Nav />
              <RouterProvider router={router} />
              <div className="absolute w-[30%] bottom-0 right-20 z-10">
                <Sentmail />
              </div>

            </>
          )
        }


      </div>

  )
}

export default App
