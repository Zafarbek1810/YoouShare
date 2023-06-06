import React from "react";
import ApplicationStyle from "./Application.style";
import Container from "../../../Common/Container";
import { useTranslation } from "react-i18next";
import { Select } from "antd";
import { Controller, useForm } from "react-hook-form";

const Application = () => {

  const { t } = useTranslation();

  const {
    register,
    reset,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const options = [
    { label: t("aplication.select-ph"), value: null },
    { label: t(`aplication.toshkent`), value: `tash` },
    { label: t(`aplication.andijon`), value: `and` },
    { label: t(`aplication.buxoro`), value: `bux` },
    { label: t(`aplication.fargona`), value: `far` },
    { label: t(`aplication.jizzax`), value: `jiz` },
    { label: t(`aplication.navoiy`), value: `nav` },
    { label: t(`aplication.namangan`), value: `nam` },
    { label: t(`aplication.nukus`), value: `nuk` },
    { label: t(`aplication.samarqand`), value: `sam` },
    { label: t(`aplication.xorezm`), value: `xor` },
    { label: t(`aplication.surhondaryo`), value: `sur` },
    { label: t(`aplication.qashqadaryo`), value: `qash` },
  ];

  return (
    <ApplicationStyle>
      <Container>
        <div className="wrap">
          <div className="left" data-aos={"fade-right"}>
            <h2>{t("aplication.title")}</h2>
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
                    placeholder={t("aplication.select-ph")}
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
                  placeholder={t("aplication.name")}
                  style={{
                      width: "100%",
                    }}
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="err-text">
                    {t("aplication.error")}
                  </span>
                )}
              </label>
              <label className="label">
                <input
                  className="phone"
                  // type="number"
                  placeholder={t("aplication.phNumber")}
                  style={{
                      width: "100%",
                    }}
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <span className="err-text">
                    {t("aplication.error")}
                  </span>
                )}
              </label>
              <label className="label">
              <textarea
                rows={5}
                style={{
                    width: "100%",
                  }}
                placeholder={t("aplication.message")}
                className="messageInput"
                {...register("message", { required: false })}
              />
            </label>
              <button type="submit">{t("aplication.btn")}</button>
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
