import { useState } from "react";

export default function Test() {
    const [status,setStatus] = useState(true);
    return(
        <div>
            {status?<button onClick={() => setStatus=false}>Hide</button>:
            <button onClick={() => setStatus=true}>Show</button>}
        </div>
    )
}