import React from 'react';
import './PageComponent.css'; // стильдер файлын қостым

class PageComponent extends React.Component {
    render() {
        const { timeOnPage } = this.props;
        const hours = Math.floor(timeOnPage / 3600);  //мазфлур аркылы жолдын жалпы санын 3600 секундка болып аламыз
        const minutes = Math.floor((timeOnPage % 3600) / 60); //Содан кейін ол осы қалдықты 60-қа (минуттағы секундтар санына) болем
        const seconds = timeOnPage % 60;  //Бұл жол Беттің қалған уақытын 60-қа бөлу арқылы есептейді, бұл толық минуттарға қосылмаған секундтар санын береді.

        return (
            <div className="page-container">
                <h1 className="page-title">пятница, 1 марта</h1>
                <div className="time-info">
                    <p>Текущее время: {new Date().toLocaleTimeString()}</p>
                    <p>Время на странице: {hours} часов, {minutes} минут, {seconds} секунд</p>
                </div>
            </div>
        );
    }
}

export default PageComponent;   //по умолчанию, басқа бөліктеріне оны импорттауға және пайдалануға рұқсат береді.
