import React from 'react';

// Беттегі уақытты бақылау үшін жоғары ретті құрамдастыру HOC - Higher Order Component уақыт бақылап отыру үшін
function withTimeTracking(WrappedComponent) {
    return class extends React.Component {  // базалық класс конструктор (React.Component) шақырады және компонент нысанының бастапқы күйін орнатады.
        constructor(props) {
            super(props);
            this.state = {
                timeOnPage: 0,    //бастапкы манды 0 деп беремыз
            };
            this.timer = null;
        }

        componentDidMount() {
            this.timer = setInterval(this.updateTimeOnPage, 1000);  //1000 ол миллисек сайн шакырып экраннан канша отканынды коре аласын
        }

        componentWillUnmount() {
            clearInterval(this.timer);
        }

        updateTimeOnPage = () => {
            this.setState(prevState => ({
                timeOnPage: prevState.timeOnPage + 1,    //жана таймпэйдж 0 деп бергенге +1 берып кослп отрады
            }));
        };

        render() {
            return <WrappedComponent {...this.props} timeOnPage={this.state.timeOnPage} />;
        }
    };
}

export default withTimeTracking;
