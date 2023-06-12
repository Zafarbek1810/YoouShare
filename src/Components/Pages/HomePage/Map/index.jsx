import React from "react";
import { useTranslation } from "react-i18next";
import { MapWrapper } from "./Map.style";
import { ObjectManager, YMaps } from "react-yandex-maps";

const Map = () => {
  const { t } = useTranslation();

  const features = [
  {
    id: 1,
    name: "Location A",
    coordinates: [55.751574, 37.573856],
    // other properties specific to Location A
  },
  {
    id: 2,
    name: "Location B",
    coordinates: [55.754422, 37.582327],
    // other properties specific to Location B
  },
  {
    id: 3,
    name: "Location C",
    coordinates: [55.759865, 37.584874],
    // other properties specific to Location C
  },
  // more feature objects...
];

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
