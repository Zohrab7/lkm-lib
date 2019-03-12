import * as React from 'react';
import "./index.scss";
import "./index.scss";
import createComponent from './hocs/createComponent';
import {DefHome} from "./Home";

interface IProps {
    name: string
}

export const Main = createComponent({className: 'app'},
    [
        {name: 'Container',tag:'section'},
    ]);
export class App extends React.Component<IProps> {
    render() {
        return (
            <Main.Container>
                <div>Hello from {this.props.name} component</div>
                <DefHome name={"Home"}/>
            </Main.Container>
        );
    }
}