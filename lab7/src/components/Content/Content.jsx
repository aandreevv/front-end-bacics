import React, {Component} from "react";

class Content extends Component {

    getRandomColor = () => {
        return Math.floor(Math.random() * 255);
    }

    getRGB = () => {
        return 'rgb(' + this.getRandomColor() + ',' + this.getRandomColor() + ',' + this.getRandomColor() + ')';
    }

    handleClick = (event) => {
        event.target.style.backgroundColor = this.getRGB();
        event.target.style.color = this.getRGB();
    }

    render() {
        return (
            <>
                <p>Місце народження: 12 вересня, 2002 р., м. Миколаїв</p>
                <p>Освіта: Економічний ліцей №2, м. Миколаїв; НТУУ "КПІ", м. Київ</p>
                <p>Хоббі:</p>
                <ul>
                    <li>Програмування;</li>
                    <li>Комп'ютерні ігри;</li>
                    <li>Баскетбол;</li>
                    <li id="task1" onClick={this.handleClick}>Теніс;</li>
                    <li className="task1" onClick={this.handleClick}>Дизайн.</li>
                </ul>
                <p>Улюблені фільми:</p>
                <ol>
                    <li>"Втеча із Шоушенка", 1994;</li>
                    <li>"Мовчання ягнят", 1991</li>
                    <li>"Матриця", 1999</li>
                </ol>
                <p>
                    Анталія - п'яте за чисельністю населення місто в Туреччині, столиця провінції Анталія. Розташована на
                    південно-західному узбережжі Анатолії, біля гір Тавр.<br/>
                    Анталія заснована в 159 році до н. е. грецьким царем Пергама Атталом II. У 133 році до н. е. місто було завойовано
                    римлянами. Пізніше Анталія стала зимовою резиденцією імператора Адріана. Довгий час Анталія була власністю Риму,
                    після — Візантії.<br/>
                    Економічний спад регіону настав у VIII столітті, після значного землетрусу, набігів арабів (VII–VIII ст.ст.) та
                    морських піратів. У 1080-х роках у регіоні почав поширюватись іслам (після вторгнення сельджуків).<br/>
                    У 1118 році, на початку правління візантійського імператора Іоанна II Комніна місто було анклавом імперії,
                    знаходячись на значному віддаленні від земель імперії. У безпосередній близькості від міста розміщувались володіння
                    сельджуків, так що можливо було дістатися тільки морем до іншої частини країни. У 1119 році Іоанн II здійснив ряд
                    походів проти турків і в результаті пробив по суші шлях в Атталію.<br/>
                    На початку XIII століття сельджуки у 1207 році завойовують Анталію та навколишні території. У 1321–1423 роках
                    Анталія була центром незалежного бейліку Хамід. У 1423 р. Анталію завойовують турки-османи.
                    Після Першої світової війни, у 1919–1921 роках, місто було тимчасово окуповано італійцями.
                </p>
                <a href="https://uk.wikipedia.org/wiki/%D0%90%D0%BD%D1%82%D0%B0%D0%BB%D1%96%D1%8F">
                    <img src={this.props.imgSrc} alt="Водоспад Нижній Дюден в Анталії"/>
                </a>
            </>
        )
    }
}

export default Content;
