import React, { createContext, useContext } from 'react'

const countContext = createContext()

export default function Demo(props) {
    return <countContext.Provider value={100}>
        <Foo />
    </countContext.Provider>
}

function Foo() {
    const count = useContext(countContext)
    return <div>{count}</div>
}

// function Foo () {
//     return <countContext.Consumer>
//         {
//             value => {
//                 return <div>{value}</div>
//             }
//         }
//     </countContext.Consumer>
// }
