import React from 'react'
import ModalStyle from './modal.style';

const Modal = () => {
  return (
    <ModalStyle>
        <div className='box'>
            <div className='top'>
                <a href='#
                '><img src="/images/x-icon.svg" alt="" /></a>
                <div className='circle'>
                    <img src="/images/confirm-icon.svg" alt="Confirm Image" />
                </div>
            </div>
            <div className='bottom'>
                <h3 className='title'>Поздравляем!</h3>
                <p className='desc'>Вы получили купон на бесплатную аренду на сутки! Чтобы воспользоваться им, отправляем вас в маркет для скачивания приложения</p>
                <p className='number'>10</p>
            </div>
        </div>
    </ModalStyle>
  )
}

export default Modal;