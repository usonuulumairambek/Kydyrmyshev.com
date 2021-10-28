import React from "react";
import img1 from "./images/img3.jpg"
import "./personal.css"

function PersonaPhotos() {
  return (
    <div className="kelechek">
    <div className="news__item">
      <span className="news__date">26.12.2020</span>
      <p className="news__title">
        Ждут новогоднего чуда дети-сироты .Надеются и верят, что к ним
        обязательно придёт Дед Мороз и подарит долгожданные подарки.🎅🎅🎅
      </p>
      <div className="news__line news__line-1" />
      <span className="news__info">
        <div className="news__pic-one">
          <img src={img1} alt="firstmark" />
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
          <img src={img1} alt="firstmark" />
        </div>
      </span>
      <div className="news__line news__line-2" />
    </div>
  </div>
  );
}

export default PersonaPhotos;
