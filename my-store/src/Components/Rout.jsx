import { Routes, Route } from "react-router-dom"
import Home from "./Home"

export default function Rout() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </div>
    )
}