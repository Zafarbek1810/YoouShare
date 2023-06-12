import React from "react";
import ModalStyle from "./modal.style";
import { useEffect } from "react";
import { useState } from "react";

const Modal = ({ setIsSuccess }) => {
  const [countdown, setCountdown] = useState(5);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          console.log('Modal closed');
          clearInterval(timer);
          return prevCountdown;
        }
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ModalStyle>
      <div className="box" >
        <div className="top">
          <button
            onClick={() => {
              setIsSuccess(false);
            }}
          >
            <img src="/images/x-icon.svg" alt="Exit button image" />
          </button>
          <div className="circle">
            <img src="/images/confirm-icon.svg" alt="Confirm image for coupon" />
          </div>
        </div>
        <div className="bottom">
          <h3 className="title">Поздравляем!</h3>
          <p className="desc">
            Вы получили купон на бесплатную аренду на сутки! Чтобы
            воспользоваться им, отправляем вас в маркет для скачивания
            приложения
          </p>
          <p className="number">{countdown}</p>
        </div>
      </div>
    </ModalStyle>
  );
};

export default Modal;
