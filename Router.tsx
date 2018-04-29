import * as React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import App from './App';
interface RouterProps {

}

interface RouterState {

}
export const HomeComponent = () => (
    <div>
        This is Home Component
    </div>
)

export const ContactComponent = () => (
    <div>
        This is Contact Component
    </div>
)

export const linkComponent = (props: any) => {
    console.log(props)
    return (
        <div>
            <p>hi {props.match.params.id}</p>
        </div>
    )
}

export const Header = () => (
    <div>
        <Link to="/">Counter</Link>
        <Link to="/contact">Contact</Link>
    </div>
)

export const NotFound = () =>(
    <div>
        <p>Not found</p>
    </div>
)
class Router extends React.Component<RouterProps, RouterState>{
    public render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={App} />
                        <Route exact path="/contact" component={ContactComponent} />
                        <Route exact path="/contact/:id" component={linkComponent} />
                        <Route component={NotFound}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
export default Router