import React from "react";
import ApplicationStyle from "./Application.style";
import Container from "../../../Common/Container";
import { Select } from "antd";
import { Controller, useForm } from "react-hook-form";

const Application = () => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const options = [
    { label: " Выберите город...", value: null },
    { label: `Ташкент`, value: `tash` },
  ];

  return (
    <ApplicationStyle>
      <Container>
        <div className="wrap">
          <div className="left" data-aos={"fade-right"}>
            <h2>Оставь заявку и мы позвоним</h2>
            <form action="">
              <Controller
                control={control}
                name="test"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Select
                    placeholder={"Выберите город..."}
                    value={value}
                    defaultValue={options[0].value}
                    options={options}
                    onBlur={onBlur}
                    onChange={onChange}
                    ref={ref}
                    className="select"
                    style={{
                      width: "100%",
                    }}
                  />
                )}
              />
              <label className="label">
                <input
                  className="name"
                  type="text"
                  placeholder="Имя"
                  style={{
                      width: "100%",
                    }}
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="err-text">
                    Должен быть заполнен
                  </span>
                )}
              </label>
              <label className="label">
                <input
                  className="phone"
                  // type="number"
                  placeholder="Ваш номер телефона"
                  style={{
                      width: "100%",
                    }}
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <span className="err-text">
                    Должен быть заполнен
                  </span>
                )}
              </label>
              <label className="label">
              <textarea
                rows={5}
                style={{
                    width: "100%",
                  }}
                placeholder="Запрос (необязательно)"
                className="messageInput"
                {...register("message", { required: false })}
              />
            </label>
              <button type="submit">Отправить запрос</button>
            </form>
          </div>
          <div className="right" data-aos={"fade-left"}>
            <div className="img">
              <img src="/images/application.png" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </ApplicationStyle>
  );
};

export default Application;
