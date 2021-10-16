import React from "react";
import img10 from "./images/img10.jpg";
import img11 from "./images/img11.jpg";

function News() {
  return (
    <div className="kelechek">
      <div className="news__item">
        <span className="news__date">12.10.2021</span>
        <p className="news__title">wef global</p>
        <div className="news__line news__line-1" />
        <span className="news__info">
          <div className="news__pic-one">
            <img src={img10} alt="firstmark" />
          </div>
        </span>
        <div className="news__line news__line-2" />
      </div>
      <div className="news__item">
        <span className="news__date">26.12.2020</span>
        <p className="news__title">Бакубат келечек</p>
        <div className="news__line news__line-1" />
        <p>
          С праздником дорогие наши Мамы! Пусть ваши самоотверженность,
          терпение, самоотдача, труд вернутся заботой и благодарностью ваших
          детей и всего общества! Мы вас очень любим и ценим💐💐💐 Сегодня нашим
          фондом «Бакубат келечек» была оказана помошь более 20 многодетным
          матерям, которые оказались в сложной ситуации.
        </p>
        <span className="news__info">
          <div className="news__pic-one">
            <img src={img11} alt="firstmark" />
          </div>
        </span>
        <div className="news__line news__line-2" />
      </div>
    </div>
  );
}

export default News;
