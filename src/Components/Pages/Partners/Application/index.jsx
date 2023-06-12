import React, { useEffect } from "react";
import ApplicationStyle from "./Application.style";
import Container from "../../../Common/Container";
import { useTranslation } from "react-i18next";

const Application = () => {
  const  {i18n:{language  }  }  = useTranslation();
  const { t } = useTranslation();

  useEffect(() => {
    const loadAmoFormsScript = () => {
      const script = document.createElement('script');
      script.id = 'amoforms_script_1150574';
      script.async = true;
      script.charset = 'utf-8';
      script.src = 'https://forms.amocrm.ru/forms/assets/js/amoforms.js?1686208459';
      console.log('style', script)
      const formDiv = document.getElementById('amoCRMform')
      formDiv.appendChild(script);
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
        locale: language,
      }),
      (window[o + m] =
        window[o + m] ||
        function(f, k) {
          window[o + m].f = (window[o + m].f || []).concat([[f, k]]);
        }))
    }
    (window, "amo_forms_", "params", "load", "loaded");
   
    console.log("rener", document.getElementById('amoforms_iframe_1150574'))
    return loadAmoFormsScript();
    
  }, []);


  return (
    <ApplicationStyle>
      <Container>
        <div className="wrap">
          <div className="left" id={'amoCRMform'} data-aos={"fade-right"}>
            
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

