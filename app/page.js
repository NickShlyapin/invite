"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import Img1 from "../assets/photo_2023-07-07_00-18-40.jpg";
import Img2 from "../assets/2023-07-06 02.30.00.jpg";
import Img3 from "../assets/2023-07-06 02.30.06.jpg";
import Img4 from "../assets/2023-07-06 02.30.10.jpg";
import Img5 from "../assets/2023-07-06 02.30.14.jpg";
import Img6 from "../assets/2023-07-06 02.30.20.jpg";
import Img7 from "../assets/leaf.png";
import Img8 from "../assets/2772374.png";
import Img9 from "../assets/977192.png";
import Img10 from "../assets/fl.jpeg";
import Music from "../assets/di.mp3";

import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  const audioRef = useRef();

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
    } else {
      // Throw error
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    } else {
      // Throw error
    }
  };

  const [set, setSet] = useState(true);

  function handleClickOne() {
    play;
    setSet(false);
  }

  function handleClickTwo() {
    pause;
    setSet(true);
  }

  const THREE_DAYS_IN_MS = 25 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <main className={styles.main}>
      <div className={styles.btnCont}>
        {set ? (
          <button
            onClick={() => {
              handleClickOne();
              play();
            }}
          >
            Нам срочно нужна музыка! Нажми
          </button>
        ) : (
          <button
            onClick={() => {
              handleClickTwo();
              pause();
            }}
          >
            Пауза
          </button>
        )}
      </div>

      <audio ref={audioRef} src={Music} />

      <div className={styles.imgCont}>
        <Image className={styles.img} src={Img1} />
      </div>
      <div className={styles.info}>
        <p>
          Мы будем очень рады видеть вас рядом в этот особенный для нас день!
        </p>
        <div className={styles.dateCont}>
          <h2>31 июля 2023 года</h2>
          <div className={styles.imgCont}>
            <Image className={styles.img} src={Img7} objectFit="cover" />
          </div>
        </div>
      </div>
      <div className={styles.whoCont}>
        <div className={styles.info}>
          <h3>Кто</h3>
          <p>Самые дорогие друзья и близкие</p>
          <h3>Где</h3>
          <p>Ресторан «Париж» по адресу — Якоби 35</p>
          <h3>Когда</h3>
          <p>31 июля 2023 года</p>
        </div>
      </div>
      <div className={styles.gallery}>
        <div className={styles.row}>
          <div className={styles.imgCont}>
            <Image className={styles.img} src={Img2} objectFit="cover" />
          </div>

          <div className={styles.imgCont}>
            <Image className={styles.img} src={Img3} objectFit="cover" />
          </div>

          <div className={styles.imgCont}>
            <Image className={styles.img} src={Img4} objectFit="cover" />
          </div>
        </div>

        <div className={styles.imgCont}>
          <Image className={styles.img} src={Img5} objectFit="cover" />
        </div>
      </div>
      <div className={styles.iventMap}>
        <h2>Программа свадьбы</h2>
        <br />
        <div className={styles.info}>
          <div className={styles.title}>
            <span>
              <p>15:00</p>
            </span>
          </div>
          <h3>Выкуп невесты</h3>
          <br />
          <p>
            <mark>Адрес:</mark> Пискунова 138/1
          </p>
          <br />
          <p>
            Для вашего комфорта мы предусмотрели трансфер с ул. Пискунова 138/1
            в ресторан «Париж» по адресу — Якоби 35
          </p>
          <div className={styles.title}>
            <span>
              <p>17:00</p>
            </span>
          </div>
          <h3>Свадебная церемония</h3>
          <br />
          <p>
            Самый трогательный и торжественный момент нашей свадьбы пройдет на
            территории ресторанного комплекса.
          </p>
          <div className={styles.title}>
            <span>
              <p>18:00</p>
            </span>
          </div>
          <h3>Свадебный ужин</h3>
          <br />
          <p>Нас ждет самое веселое и душевное празднование!</p>
          <br />
          <p>
            Банкет, песни, развлечения, танцы, насыщенная и интересная
            программа, поэтому рекомендуем взять с собой удобную обувь
          </p>
        </div>
      </div>

      <div className={styles.dresscode}>
        <h2>Dresscode</h2>
        <br />
        <div className={styles.info}>
          <h3>
            Официальный дресс-код – строгие однотонные наряды без ярких
            акцентов.
          </h3>
          <br />
          <p>
            Для мужчин подойдет черный костюм или смокинг,либо черное поло или
            черная рубашка с черными брюками(главное черные тона!)
            <br /> <br />
            Просим отнестись серьезно к дресс-коду,хотим выдержать единую
            стилистику.
          </p>
          <br />
          <div className={styles.imgCont}>
            <Image className={styles.img} src={Img8} objectFit="cover" />
          </div>

          <br />
          <p>
            Женщинам необходимо подобрать черный красивый наряд!(главное черные
            тона!) Обратить внимание на обувь и сумки,чтоб они были не кричащих
            тонов!
            <br /> <br /> Просим отнестись серьезно к дресс-коду,хотим выдержать
            единую стилистику.
          </p>
          <br />
          <div className={styles.imgCont}>
            <Image className={styles.img} src={Img9} objectFit="cover" />
          </div>
        </div>
      </div>
      <div className={styles.gift}>
        <div>
          <hr />
          <h2>Цветы</h2>
          <p>
            Сразу после окончания торжества мы уедем в свадебное путешествие и
            не успеем насладиться красотой подаренных букетов, поэтому вместо
            цветов просим подарить нам бутылочку вашего любимого вина или любого
            другого напитка
          </p>
        </div>
        <div>
          <hr />
          <h2>Поздравления</h2>
          <p>
            Мы будем очень рады услышать все важные слова от самых дорогих людей
            в этот важный для нас день.
          </p>
        </div>
      </div>
      <div className={styles.timer}>
        <h2>До свадьбы осталось</h2>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </div>
      <div className={styles.final}>
        <h2>С любовью, Николай и Анна!</h2>
        <div className={styles.imgCont}>
          <Image className={styles.img} src={Img6} objectFit="cover" />
        </div>
      </div>
    </main>
  );
}
