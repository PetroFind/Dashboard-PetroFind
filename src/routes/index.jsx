import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Error from "../pages/error";
import ChatIA from "../pages/chatIA";
import Main from '../pages/main';


  export const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/404" replace/>}/>
          <Route path="/404" element={<Error />}/>
          <Route path="/" element={<Main />}/>
          <Route path="/chat-ia" element={<ChatIA />}/>
        </Routes>
      </BrowserRouter>
    )
  }


  export default Router