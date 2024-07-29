import { useState } from 'react';
import PropTypes from 'prop-types';

import NextButton from "./nextButton";
import BackButton from "./backButton";
import list from "../assets/list.svg";

function Modal({ isOpen }) {

    const [step, setStep] = useState(1);
    const [value, setValue] = useState(3); 

    if (!isOpen) return null;

    const handleNext = () => {
        if (step < 3) {
          setStep(step + 1);
        }
      };
    
      const handleBack = () => {
        if (step > 1) {
          setStep(step - 1);
        }
      };

      const handleChange = (event) => {
          setValue(event.target.value);
      };
    
      const renderInputContent = () => {
        switch (step) {
          case 1:
            return (
              <>
              <p>Сколько человек работает в вашем отделе продаж?</p>
              <form className='form-range'>
                <label>
                  <input 
                      type="range" 
                      min="1" 
                      max="15" 
                      value={value} 
                      onChange={handleChange} 
                      className="input-range" 
                  />
                  <div 
                      className="range-label" 
                      style={{
                        left: `${(value - 1) / 14 * 100}%`,
                        display: value == 1 || value == 15 ? 'none' : 'block'
                      }}
                  >
                      {value}
                  </div>
                </label>
                <div className="range-min-max">
                  <span>1</span>
                  <span>15</span>
                </div>
              </form>
              </>
            );
          case 2:
            return (
              <>
              <p>Сфера деятельности вашей компании?</p>
              <form className='form-list'>
                <label>
                    <input className='input-list' list="list" type='text' value="Оптовая и розничная торговля"/>
                    <datalist id="list">
                        <option value="Оптовая и розничная торговля" />
                        <option value="Оптовая и розничная торговля" />
                        <option value="Оптовая и розничная торговля" />
                        <option value="Оптовая и розничная торговля" />
                        <option value="Оптовая и розничная торговля" />
                    </datalist>
                </label>
              </form>
              </>
            );
          case 3:
            return (
              <>
              <p>Из каких источников вам приходят заявки?</p>
              <form className='form-check'>
                <label>
                    <input className='input-check' type="checkbox" />
                    <p>
                        Телефон
                    </p>
                </label>
                <label>
                    <input className='input-check' type="checkbox" />
                    <p>
                        Сайт
                    </p>
                </label>
                <label>
                    <input className='input-check' type="checkbox" />
                    <p>
                        Вконтакте
                    </p>
                </label>
                <label>
                    <input className='input-check' type="checkbox" />
                    <p>
                        WhatsApp
                    </p>
                </label>
                <label>
                    <input className='input-check' type="checkbox" />
                    <p>
                        Telegram
                    </p>
                </label>
                <label>
                    <input className='input-check' type="checkbox" />
                    <p>
                        Avito
                    </p>
                </label>
                <label>
                    <input className='input-check' type="checkbox" />
                    <p>
                        Instagram
                    </p>
                </label>
                <label>
                    <input className='input-check' type="checkbox" />
                    <p>
                        Партнеры
                    </p>
                </label>
                <label>
                    <input className='input-check' type="checkbox" />
                    <p>
                        Сарафан
                    </p>
                </label>
              </form>
              </>
            );
          default:
            return null;
        }
      };
    
      return (
        <div className="modal">
          <div className="modal__title">
            <img src={list} alt="List" />
            <h2>Пройдите тест и получите расчёт стоимости построения отдела продаж в вашей компании</h2>
            <p>{step}/3</p>
          </div>
          <div className="modal__input">
            {renderInputContent()}
          </div>
          <div className="modal__buttons">
            <BackButton onClick={handleBack} />
            <NextButton onClick={handleNext} />
          </div>
        </div>
      );
    }
  
    Modal.propTypes = {
      isOpen: PropTypes.bool.isRequired,
    };

  export default Modal