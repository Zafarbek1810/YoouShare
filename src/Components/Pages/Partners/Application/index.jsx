import React, { useEffect } from "react";
import ApplicationStyle from "./Application.style";
import Container from "../../../Common/Container";
import { useTranslation } from "react-i18next";
import { Select } from "antd";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";

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
    { label: t(`aplication.toshkent`), value: `Tashkent` },
    { label: t(`aplication.andijon`), value: `Andijan` },
    { label: t(`aplication.buxoro`), value: `Buxoro` },
    { label: t(`aplication.fargona`), value: `Farg'ona` },
    { label: t(`aplication.jizzax`), value: `Jizzax` },
    { label: t(`aplication.navoiy`), value: `Navoiy` },
    { label: t(`aplication.namangan`), value: `Namangan` },
    { label: t(`aplication.nukus`), value: `Nukus` },
    { label: t(`aplication.samarqand`), value: `Samarqand` },
    { label: t(`aplication.xorezm`), value: `Xorazm` },
    { label: t(`aplication.surhondaryo`), value: `Surhondaryo` },
    { label: t(`aplication.qashqadaryo`), value: `Qashqadaryo` },
  ];

  useEffect(() => {
    const loadAmoFormsScript = () => {
      const script = document.createElement('script');
      script.id = 'amoforms_script_1150574';
      script.async = true;
      script.charset = 'utf-8';
      script.src = 'https://forms.amocrm.ru/forms/assets/js/amoforms.js?1686208459';
      document.body.appendChild(script);
    };

    !function(window, o, c, r, m) {
      ((window[o + c] = window[o + c] || {
        setMeta: function(p) {
          this.params = (this.params || []).concat([p]);
        },
      }),
      (window[o + r] =
        window[o + r] ||
        function(f) {
          window[o + r].f = (window[o + r].f || []).concat([f]);
        }),
      window[o + r]({
        id: "1150574",
        hash: "188bcf9c2baf39fd65d0feb8c8e00cd2",
        locale: "ru",
      }),
      (window[o + m] =
        window[o + m] ||
        function(f, k) {
          window[o + m].f = (window[o + m].f || []).concat([[f, k]]);
        }))
    }
    (window, "amo_forms_", "params", "load", "loaded");

    loadAmoFormsScript();
    
  }, []);

  const blob = new Blob([JSON.stringify({"datetime":"Thu Jun 08 2023 16:48:47 GMT+0500 (Uzbekistan Standard Time)","referer":""})], { type: 'application/json' });

  const submit = (values) => {
    const formdata = new FormData();
    formdata.append("fields[name_1]", values.name);
    formdata.append("fields[258653_1][136097]", values.email);
    formdata.append("fields[258651_1][136085]", values.phone);
    formdata.append("fields[name_2]", values.message);
    formdata.append("fields[note_2]", values.test);
    formdata.append("form_id", 1150574);
    formdata.append("hash", "188bcf9c2baf39fd65d0feb8c8e00cd2");
    formdata.append("visitor_uid", "59df397f-339e-44a6-a66c-d7cc7b1bc184");
    formdata.append("gso_session_uid", "3ce423de-1d32-44e8-b5ed-a285915dc97f");
    formdata.append("form_request_id", "RXYlwWjb91");
    formdata.append("user_origin", JSON.stringify({"datetime":"Thu Jun 08 2023 16:48:47 GMT+0500 (Uzbekistan Standard Time)","referer":""}));
    
    console.log(formdata);
    axios
      .post("https://forms.amocrm.ru/queue/add", formdata)
      .then((response) => {
        console.log(response.data);
        alert.success("Qo'shildi");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ApplicationStyle>
      <Container>
        <div className="wrap">
          <div className="left" data-aos={"fade-right"}>
            <h2>{t("aplication.title")}</h2>
            <form onSubmit={handleSubmit(submit)}>
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
                  <span className="err-text">{t("aplication.error")}</span>
                )}
              </label>
              <label className="label">
                <input
                  className="name"
                  type="email"
                  placeholder={t("aplication.email")}
                  style={{
                    width: "100%",
                  }}
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="err-text">{t("aplication.error")}</span>
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
                  <span className="err-text">{t("aplication.error")}</span>
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
