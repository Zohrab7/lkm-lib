import * as React from 'react';
import "./home.scss";
import createComponent from './hocs/createComponent';

interface IProps {
    name: string
}
interface IState {
    path : string
}

const Home = createComponent({className: 'home'},
    [
        {name: 'Container',tag:'section'},
        {name: 'Header',tag:'header'},
        {name: 'Main',tag:'main'},
        {name: 'Footer',tag:'footer'},
    ]);
export class DefHome extends React.Component<IProps,IState> {
    public state={
        path:""
    };
    render() {
        return (
                <Home.Container>
                    <Home.Header>Hello from {this.props.name} component</Home.Header>
                    <Home.Main>{this.props.name} main area</Home.Main>
                    <Home.Footer>{this.props.name} footer area</Home.Footer>
                </Home.Container>
        );
    }
}