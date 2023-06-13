import React from "react";
import { useTranslation } from "react-i18next";
import { MapWrapper } from "./Map.style";

const Map = () => {
  const { t } = useTranslation();

  return (
    <MapWrapper>
      <h3 className="title" data-aos={"fade-up"}>
        {t("map.title")}
      </h3>
      <div className="map" data-aos={"fade-up"}>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d39165.626024318066!2d69.26212628071524!3d41.32405818589875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1683543069525!5m2!1sru!2s"
          width="100%"
          height="500px"
          style={{ border: 0, borderRadius:50 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <Maps/> */}
        {/* <YMaps>
          <Map
            defaultState={{
              center: [55.751574, 37.573856],
              zoom: 10,
            }}
          >
            <ObjectManager
              options={{
                clusterize: true,
                gridSize: 32,
              }}
              objects={{
                openBalloonOnClick: true,
                preset: "islands#greenDotIcon",
              }}
              clusters={{
                preset: "islands#redClusterIcons",
              }}
              filter={(object) => object.id % 2 === 0}
              defaultFeatures={features}
              modules={[
                "objectManager.addon.objectsBalloon",
                "objectManager.addon.objectsHint",
              ]}
            />
          </Map>
        </YMaps> */}
      </div>
    </MapWrapper>
  );
};

export default Map;
