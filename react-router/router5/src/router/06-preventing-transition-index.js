import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Prompt
} from "react-router-dom";


export default function PreventingTransitionsExample() {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">Form</Link>
                </li>
                <li>
                    <Link to="/one">One</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/" exact children={<BlockingForm />} />
                <Route path="/one" children={<h3>One</h3>} />
            </Switch>
        </Router>
    );
}

function BlockingForm() {
    let [isBlocking, setIsBlocking] = useState(false);

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                event.target.reset();
                setIsBlocking(false);
            }}
        >
            <Prompt
                when={isBlocking}
                message={location =>
                    `Are you sure you want to go to ${location.pathname}`
                }
            />

            <p>
                Blocking?{" "}
                {isBlocking ? "Yes, click a link or the back button" : "Nope"}
            </p>

            <p>
                <input
                    size="50"
                    placeholder="输入内容阻止过渡"
                    onChange={event => {
                        setIsBlocking(event.target.value.length > 0);
                    }}
                />
            </p>

            <p>
                <button>Submit to stop blocking</button>
            </p>
        </form>
    );
}
