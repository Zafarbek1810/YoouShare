import { useEffect, useRef, useState } from "react";
import { Wrapper, PlaceStyle } from "./style";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Clusterer, Map, Placemark, YMaps } from "react-yandex-maps";
import { Tooltip } from "antd";

const Maps2 = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  const fetchNearbyBranches = async () => {
    try {
      const response = await axios.get(
        "https://yoou.stwpower.com/power_bank/api/branches/nearby",
        {
          params: {
            lat: 22.716701711615894,
            lng: 114.03084644777901,
            radius: 10000,
            appKey: "gdCRh4XplLWrAAbdpVpMIGFM8BFtm8t0",
          },
        }
      );

      const nearbyBranches = response.data.data;
      console.log(response.data.data);

      nearbyBranches.forEach(async (branch) => {
        const udId = branch.ud_id;
        console.log(udId);

        const detailResponse = await axios.get(
          `https://yoou.stwpower.com/power_bank/api/branches/detail/${udId}`
        );
        const detailData = detailResponse.data;
        setData(detailResponse.data);

        console.log(detailData);
      });
    } catch (error) {
      console.error("Error fetching nearby branches:", error);
    }
  };

  //   fetchNearbyBranches();
  //   console.log(data);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=gdCRh4XplLWrAAbdpVpMIGFM8BFtm8t0&lang=en_US`;
    script.async = true;
    document.head.appendChild(script);

    script.addEventListener("load", () => {
      ymaps.ready(() => {
        const place = [
          {
            ud_id: "01acce0ebbe640fbaf5f7b60bdc0c44b",
            location: {
              lng: 69.94230859999999,
              lat: 41.4867618,
            },
            status: 2,
          },
          {
            ud_id: "0a1455ef22ed43b0b7fd4f55d6f78ee4",
            location: {
              lng: 69.2727149,
              lat: 41.2920078,
            },
            status: 1,
          },
          {
            ud_id: "0c42f28efaeb4525bb57c3b6cd8b1e18",
            location: {
              lng: 69.292182,
              lat: 41.306813,
            },
            status: 2,
          },
          {
            ud_id: "10d4b4f6837945d4a25ff5f2285a9f4d",
            location: {
              lng: 69.2825525,
              lat: 41.3280189,
            },
            status: 1,
          },
          {
            ud_id: "13332b9cf92a43bdb7026e8bbff03e7b",
            location: {
              lng: 69.2855076,
              lat: 41.3221682,
            },
            status: 2,
          },
          {
            ud_id: "133ccb0ae38e41f8bf5fc9ab99bbc94b",
            location: {
              lng: 114.420182899,
              lat: 30.480714799,
            },
            status: 1,
          },
          {
            ud_id: "137dff63b6154a1fba769cf4b3335779",
            location: {
              lng: 69.27131709999999,
              lat: 41.2945801,
            },
            status: 1,
          },
          {
            ud_id: "13d7b0964e854dddbd2f98669b3fb656",
            location: {
              lng: 69.2581247,
              lat: 41.325215,
            },
            status: 1,
          },
          {
            ud_id: "140abd1613f840b0a5a037986c8c1849",
            location: {
              lng: 69.2626649,
              lat: 41.2929471,
            },
            status: 1,
          },
          {
            ud_id: "16d1d2ae9fba46f89a968c4cec26a60d",
            location: {
              lng: 69.2709416,
              lat: 41.3068719,
            },
            status: 2,
          },
          {
            ud_id: "180f655d23624352915c674886188d9e",
            location: {
              lng: 69.2854864,
              lat: 41.3373617,
            },
            status: 2,
          },
          {
            ud_id: "18bdf6b32f2d4799b4bc556d4c115dd3",
            location: {
              lng: 69.9496873,
              lat: 41.5152321,
            },
            status: 2,
          },
          {
            ud_id: "1b140c7f6acd487a886fe5ac2ac1d279",
            location: {
              lng: 69.2697463,
              lat: 41.304215,
            },
            status: 2,
          },
          {
            ud_id: "1c97f9b65b9d46e3a9a85d2588b6d12e",
            location: {
              lng: 69.2305873,
              lat: 41.3166975,
            },
            status: 2,
          },
          {
            ud_id: "1d40c7b83105415bba3cc3ebe442753f",
            location: {
              lng: 69.2853501,
              lat: 41.3120226,
            },
            status: 1,
          },
          {
            ud_id: "1db32da9c4944698b87f2ac2daa1acde",
            location: {
              lng: 69.2259634,
              lat: 41.293429,
            },
            status: 2,
          },
          {
            ud_id: "1fbc932dd07f4a97ad6c1b7d46349510",
            location: {
              lng: 66.94642499999999,
              lat: 39.6606953,
            },
            status: 1,
          },
          {
            ud_id: "2105ad8dfe92478896c738eca064e390",
            location: {
              lng: 69.2849974,
              lat: 41.3105544,
            },
            status: 1,
          },
          {
            ud_id: "2165f2a483cb44998f44c83898d52df8",
            location: {
              lng: 69.2684847,
              lat: 41.2979983,
            },
            status: 1,
          },
          {
            ud_id: "2359830dcbcf4a69a29440fbddf83240",
            location: {
              lng: 69.296266,
              lat: 41.31881299999999,
            },
            status: 1,
          },
          {
            ud_id: "25003dff17904b75a51b98cae0afd250",
            location: {
              lng: 69.2810633,
              lat: 41.29311939999999,
            },
            status: 1,
          },
          {
            ud_id: "262d310132d64465847212b7a786c49b",
            location: {
              lng: 69.30027849999999,
              lat: 41.2740763,
            },
            status: 1,
          },
          {
            ud_id: "26489cb1bb2c4855966d97adf8c64af5",
            location: {
              lng: 69.2354344,
              lat: 41.2637359,
            },
            status: 2,
          },
          {
            ud_id: "2854284e591c40708af41124dc4d750e",
            location: {
              lng: 69.2850756,
              lat: 41.3336507,
            },
            status: 1,
          },
          {
            ud_id: "293e72a8cce94353bb5f8734e1414eec",
            location: {
              lng: 69.280159,
              lat: 41.2974557,
            },
            status: 1,
          },
          {
            ud_id: "2b7a0bed1883482c868930b418a61f9c",
            location: {
              lng: 69.285859,
              lat: 41.3120977,
            },
            status: 1,
          },
          {
            ud_id: "2ba8f620d05b4e3d83c7237004792a4a",
            location: {
              lng: 69.33453,
              lat: 41.338525,
            },
            status: 1,
          },
          {
            ud_id: "2bca63dd2ed24a40b0815f23c60d8cc5",
            location: {
              lng: 69.2909827,
              lat: 41.3120312,
            },
            status: 1,
          },
          {
            ud_id: "2bf37823ae34442fab52cbc0026f54f0",
            location: {
              lng: 114.044617052,
              lat: 22.69655307,
            },
            status: 1,
          },
          {
            ud_id: "2cab4c97827745d0824b1f5502320ddc",
            location: {
              lng: 69.2824454,
              lat: 41.3078267,
            },
            status: 2,
          },
          {
            ud_id: "31451a7dd8ea42b9a1dce3ce6a95ac87",
            location: {
              lng: 69.2630934,
              lat: 41.2692479,
            },
            status: 2,
          },
          {
            ud_id: "34c9787c408b4750b781e029a6c84afb",
            location: {
              lng: 66.98214879999999,
              lat: 39.666182,
            },
            status: 1,
          },
          {
            ud_id: "351c35d66ab944649f5746d5929a8bc5",
            location: {
              lng: 67.85005559999999,
              lat: 40.1157891,
            },
            status: 1,
          },
          {
            ud_id: "37eb07a78a804972942843b6c4390000",
            location: {
              lng: 69.30668390998227,
              lat: 41.30423109152699,
            },
            status: 2,
          },
          {
            ud_id: "392fa76a034a417cbd7cd825079c3dce",
            location: {
              lng: 69.26942799999999,
              lat: 41.294139,
            },
            status: 1,
          },
          {
            ud_id: "3ba0abac8ac843fb950506aa87a9066d",
            location: {
              lng: 69.28,
              lat: 41.3027778,
            },
            status: 1,
          },
          {
            ud_id: "3c6b114e91e443ccb41c42f2f1f7b7c9",
            location: {
              lng: 69.2600944,
              lat: 41.2916831,
            },
            status: 1,
          },
          {
            ud_id: "3cffba16055847d38f02c3c4abc9b467",
            location: {
              lng: 69.24591520000001,
              lat: 41.298566,
            },
            status: 1,
          },
          {
            ud_id: "3faf4832ec4e499ca9b53208d9744261",
            location: {
              lng: 69.263448,
              lat: 41.3011063,
            },
            status: 1,
          },
          {
            ud_id: "409d3fbeae8247589a80b4865efbaddf",
            location: {
              lng: 69.29267759999999,
              lat: 41.3146704,
            },
            status: 1,
          },
          {
            ud_id: "417f0db41fab4f9bbd2c35d5c8836833",
            location: {
              lng: 114.03111,
              lat: 22.71661,
            },
            status: 2,
          },
          {
            ud_id: "4280fac76def4a1db43e28d80f8c08b4",
            location: {
              lng: 69.2915654,
              lat: 41.2746343,
            },
            status: 1,
          },
          {
            ud_id: "43605213a65f4108854cff4b5b6c32d5",
            location: {
              lng: 69.2603877,
              lat: 41.3295334,
            },
            status: 2,
          },
          {
            ud_id: "4372d527995948688f65edb26eb9fcdd",
            location: {
              lng: 69.261063,
              lat: 41.2977316,
            },
            status: 2,
          },
          {
            ud_id: "442adb8c945c4fadb0790c0d18e047c0",
            location: {
              lng: 69.2718758,
              lat: 41.2928813,
            },
            status: 2,
          },
          {
            ud_id: "45077fc724e441098e3976458e27c297",
            location: {
              lng: 69.2768806,
              lat: 41.2945983,
            },
            status: 1,
          },
          {
            ud_id: "452638a491f44c6eb2d29f2a33098e51",
            location: {
              lng: 69.280906,
              lat: 41.296159,
            },
            status: 1,
          },
          {
            ud_id: "4695c6702a47429f9e2d005e9275e1db",
            location: {
              lng: 69.2831671,
              lat: 41.3290531,
            },
            status: 1,
          },
          {
            ud_id: "491627d6ffa94b5bb7d6b75e7f8ef053",
            location: {
              lng: 69.23199439999999,
              lat: 41.271864,
            },
            status: 1,
          },
          {
            ud_id: "49edcabf11cf44c3b46eb9472b6f80cb",
            location: {
              lng: 67.83145859999999,
              lat: 40.11321239999999,
            },
            status: 1,
          },
          {
            ud_id: "4a80a55b7c51458f90a63396fe879ab7",
            location: {
              lng: 69.28196299999999,
              lat: 41.3312012,
            },
            status: 1,
          },
          {
            ud_id: "4ac905cff23e4b2eb534268fe258b26c",
            location: {
              lng: 69.2132062,
              lat: 41.2374236,
            },
            status: 2,
          },
          {
            ud_id: "4c377b7fc62f45039ae84182950587e1",
            location: {
              lng: 69.259584,
              lat: 41.2902836,
            },
            status: 1,
          },
          {
            ud_id: "4c3a75eebf664ed8acff63891540132f",
            location: {
              lng: 69.28273659999999,
              lat: 41.3036583,
            },
            status: 1,
          },
          {
            ud_id: "4cb23562a4444675a6339092757341c5",
            location: {
              lng: 69.2224342,
              lat: 41.2830084,
            },
            status: 1,
          },
          {
            ud_id: "51750f63555b4584b5b14ddff56e55bf",
            location: {
              lng: 69.2811249,
              lat: 41.2962602,
            },
            status: 1,
          },
          {
            ud_id: "5664ac4e94c9497faa4a37064f4d8f82",
            location: {
              lng: 69.2832829,
              lat: 41.3053993,
            },
            status: 2,
          },
          {
            ud_id: "56f210c7b1ea4a7f96134d31f7bff409",
            location: {
              lng: 69.2767506,
              lat: 41.3104612,
            },
            status: 1,
          },
          {
            ud_id: "57e084ab1a9944e88f387f5275ad4608",
            location: {
              lng: 69.2766077,
              lat: 41.3109352,
            },
            status: 1,
          },
          {
            ud_id: "57ffbf2d63284aff938087937c06c74a",
            location: {
              lng: 69.2828469,
              lat: 41.2910394,
            },
            status: 2,
          },
          {
            ud_id: "5912378fc6dd425e8acbf6877bae11d9",
            location: {
              lng: 69.2639891,
              lat: 41.2962756,
            },
            status: 1,
          },
          {
            ud_id: "597527f6d224434f8dbffcf4fd9be603",
            location: {
              lng: 69.2644761,
              lat: 41.2938137,
            },
            status: 2,
          },
          {
            ud_id: "5b536a5d56144b28af3431cc717d9678",
            location: {
              lng: 69.2248694,
              lat: 41.2924709,
            },
            status: 2,
          },
          {
            ud_id: "5c5605bfe0c54774863e21398a30c4d7",
            location: {
              lng: 69.2713404,
              lat: 41.2920856,
            },
            status: 1,
          },
          {
            ud_id: "5ce2101110c349c78b4b45646a446562",
            location: {
              lng: 69.2734968,
              lat: 41.29176580000001,
            },
            status: 1,
          },
          {
            ud_id: "5d4cedbff93848d8b6462512aa9d5402",
            location: {
              lng: 114.057588,
              lat: 22.518353,
            },
            status: 2,
          },
          {
            ud_id: "5e1687dce89648cb80c40a2adb7f58b4",
            location: {
              lng: 67.8467883,
              lat: 40.1095522,
            },
            status: 1,
          },
          {
            ud_id: "5e22bb5234ff45eb8c19a6045c016b00",
            location: {
              lng: 69.2736262,
              lat: 41.3284594,
            },
            status: 1,
          },
          {
            ud_id: "5e2fed9ea4684993bc7edb00745296d4",
            location: {
              lng: 69.2089927,
              lat: 41.256119,
            },
            status: 2,
          },
          {
            ud_id: "5f38737e4ebf4bdcab298e593f0609a7",
            location: {
              lng: 69.2171789,
              lat: 41.33209,
            },
            status: 2,
          },
          {
            ud_id: "604ef3e2b4634858aba79b117705d6d8",
            location: {
              lng: 69.27846029999999,
              lat: 41.31273729999999,
            },
            status: 2,
          },
          {
            ud_id: "62cdeedb50a64656abff40ec0117bf9b",
            location: {
              lng: 69.2805625,
              lat: 41.3280625,
            },
            status: 1,
          },
          {
            ud_id: "6632783626ed465eacf867ecb9678641",
            location: {
              lng: 69.2829063,
              lat: 41.3075331,
            },
            status: 1,
          },
          {
            ud_id: "666b63584138431f87d2a3e80f3f584e",
            location: {
              lng: 69.1930556,
              lat: 41.2815278,
            },
            status: 2,
          },
          {
            ud_id: "6cb5f1a9a7dc490b805cfd627e7a3427",
            location: {
              lng: 69.2873791,
              lat: 41.3103774,
            },
            status: 1,
          },
          {
            ud_id: "6e4bbca03ca64c95a4a795a28abfecea",
            location: {
              lng: 114.033801,
              lat: 22.717155,
            },
            status: 2,
          },
          {
            ud_id: "6f410c3fcaf34dd3baf9f44c9c043c10",
            location: {
              lng: 69.2998257,
              lat: 41.341052,
            },
            status: 1,
          },
          {
            ud_id: "6fbc1cdfb6754545912ce28de011f6ee",
            location: {
              lng: 114.03601,
              lat: 22.7529899,
            },
            status: 2,
          },
          {
            ud_id: "7061f53f55f24af7bfb074475d80a366",
            location: {
              lng: 69.297759,
              lat: 41.32531600000001,
            },
            status: 1,
          },
          {
            ud_id: "733d4346f9af49019d0121d331b38eac",
            location: {
              lng: 114.076133,
              lat: 22.737228,
            },
            status: 1,
          },
          {
            ud_id: "73872bda6d274087b9edc29beb385d9a",
            location: {
              lng: 69.287506,
              lat: 41.3109601,
            },
            status: 2,
          },
          {
            ud_id: "776c99bb1bdd451399f9248b23799b87",
            location: {
              lng: 69.2291679,
              lat: 41.2624655,
            },
            status: 2,
          },
          {
            ud_id: "77a7a1097c864b45b32634676898695e",
            location: {
              lng: 69.2514747,
              lat: 41.2912138,
            },
            status: 2,
          },
          {
            ud_id: "7837b400e9274dc099e1598dbc2a5fc9",
            location: {
              lng: 69.192709,
              lat: 41.25686,
            },
            status: 1,
          },
          {
            ud_id: "7942416f43b2419082c84bf868155a54",
            location: {
              lng: 114.4152175,
              lat: 30.48514519999999,
            },
            status: 2,
          },
          {
            ud_id: "7bde8d9cd6b34ea1bea83d834d02cdc1",
            location: {
              lng: 69.34181029999999,
              lat: 41.3276211,
            },
            status: 1,
          },
          {
            ud_id: "7eeb6aac32334c5aa4f70b147532d6fa",
            location: {
              lng: 69.2910588,
              lat: 41.3120371,
            },
            status: 2,
          },
          {
            ud_id: "7f245360625240049ddb3c56311f65a0",
            location: {
              lng: 69.2791452,
              lat: 41.3607942,
            },
            status: 2,
          },
          {
            ud_id: "7f3982533a6f46088c30c108a400b9f7",
            location: {
              lng: 69.28155149999999,
              lat: 41.3281575,
            },
            status: 1,
          },
          {
            ud_id: "7fc6c8710ff2419184cdc63a6ce40997",
            location: {
              lng: 69.28829569999999,
              lat: 41.3033054,
            },
            status: 2,
          },
          {
            ud_id: "843ff32f64294c35824eca23c6d2918f",
            location: {
              lng: 69.2808141,
              lat: 41.3097871,
            },
            status: 1,
          },
          {
            ud_id: "85f057d2e3034c8d8c8bb032bee57f86",
            location: {
              lng: 69.28167359999999,
              lat: 41.2970857,
            },
            status: 1,
          },
          {
            ud_id: "873bccfc85f64bfbbaa18d4edb285b95",
            location: {
              lng: 69.2649512,
              lat: 41.267711,
            },
            status: 2,
          },
          {
            ud_id: "8932a163b9b34acfbb67d84448a28a48",
            location: {
              lng: 69.2936756,
              lat: 41.3181515,
            },
            status: 1,
          },
          {
            ud_id: "896310899cf7441e83ee3f758419b1a0",
            location: {
              lng: 69.2720369,
              lat: 41.29578559999999,
            },
            status: 2,
          },
          {
            ud_id: "8a39b43d976247b982c553aad483e5d2",
            location: {
              lng: 69.29536089999999,
              lat: 41.3781476,
            },
            status: 1,
          },
          {
            ud_id: "8de1de132b5d44e685dc8b77a2d109c2",
            location: {
              lng: 69.2833301,
              lat: 41.3315435,
            },
            status: 2,
          },
          {
            ud_id: "8f447aa0c69041089aed57a1dd47f9da",
            location: {
              lng: 69.2827416,
              lat: 41.3226428,
            },
            status: 1,
          },
          {
            ud_id: "8f609f0c3d2343d4ac6d43f469f42b9a",
            location: {
              lng: 69.28240199999999,
              lat: 41.3079529,
            },
            status: 1,
          },
          {
            ud_id: "916ab7b80edb44238433cc3130819844",
            location: {
              lng: 69.21304599999999,
              lat: 41.2419277,
            },
            status: 1,
          },
          {
            ud_id: "917907de1afd47949aad6f8e40e96144",
            location: {
              lng: 69.2873211,
              lat: 41.3101598,
            },
            status: 1,
          },
          {
            ud_id: "950ea1ae3aab4f23b79d8c12f062c95b",
            location: {
              lng: 69.3166912,
              lat: 41.3144877,
            },
            status: 1,
          },
          {
            ud_id: "96ded4db92e240568e0261d1ac60b64b",
            location: {
              lng: 69.2287499,
              lat: 41.24441340000001,
            },
            status: 1,
          },
          {
            ud_id: "9721fbd36d5b44369516b6c367001168",
            location: {
              lng: 69.2811363,
              lat: 41.3292347,
            },
            status: 2,
          },
          {
            ud_id: "97ee20adf27a4c8687e154a4032f1922",
            location: {
              lng: 69.2767506,
              lat: 41.3104612,
            },
            status: 1,
          },
          {
            ud_id: "98647d01e2ef41e4a84a9af5d510f7be",
            location: {
              lng: 69.2740177,
              lat: 41.2923813,
            },
            status: 1,
          },
          {
            ud_id: "9a33e80303dd4655b46a3fa1e399a74d",
            location: {
              lng: 69.94345783176011,
              lat: 41.48632889811209,
            },
            status: 2,
          },
          {
            ud_id: "9b61a7abe5384c078ed15b36dc0bacdc",
            location: {
              lng: 69.2451962,
              lat: 41.2722583,
            },
            status: 1,
          },
          {
            ud_id: "9b6f3e54e756458aa859720866fcdeab",
            location: {
              lng: 69.2863107,
              lat: 41.3148088,
            },
            status: 1,
          },
          {
            ud_id: "9bdbfd1323e242e894f4f1aa0e76b0d9",
            location: {
              lng: 69.2640739,
              lat: 41.3007661,
            },
            status: 2,
          },
          {
            ud_id: "a02886870b1b44d4b8fbe6ed74268329",
            location: {
              lng: 69.29975619999999,
              lat: 41.2903779,
            },
            status: 1,
          },
          {
            ud_id: "a23b494efaaf42b89cf1b4595a6ff553",
            location: {
              lng: 69.24933949999999,
              lat: 41.30503119999999,
            },
            status: 2,
          },
          {
            ud_id: "a44c9533cc1b49c9a57b86a44846059a",
            location: {
              lng: 69.3105558,
              lat: 41.3090771,
            },
            status: 1,
          },
          {
            ud_id: "a4fa2b151bde4281bb8b6c8817eed47e",
            location: {
              lng: 69.3126003,
              lat: 41.3346109,
            },
            status: 1,
          },
          {
            ud_id: "a5a053687a654cf9a7d95f62e8fc5212",
            location: {
              lng: 69.2973584,
              lat: 41.284494,
            },
            status: 1,
          },
          {
            ud_id: "aacc888ac7774a49876f3c7031cac1dc",
            location: {
              lng: 67.8261634,
              lat: 40.1328516,
            },
            status: 2,
          },
          {
            ud_id: "b3524b3b6f454e498f4d9702fdf1fb60",
            location: {
              lng: 69.2626089,
              lat: 41.3294283,
            },
            status: 1,
          },
          {
            ud_id: "b4fd8623a89c4a30b3840a24b504b85a",
            location: {
              lng: 69.2399567,
              lat: 41.2818456,
            },
            status: 1,
          },
          {
            ud_id: "b5248973feb742efac44a49ddd1d95da",
            location: {
              lng: 69.3000854,
              lat: 41.2902608,
            },
            status: 2,
          },
          {
            ud_id: "b539ab5bdbec4b4f9774d7de1df20d77",
            location: {
              lng: 69.3389236,
              lat: 41.277925,
            },
            status: 1,
          },
          {
            ud_id: "b614487cbc874f05aa4660e11e6b8851",
            location: {
              lng: 69.2781917,
              lat: 41.2991848,
            },
            status: 1,
          },
          {
            ud_id: "b6b3a307ce4f4da586ec3416eb381658",
            location: {
              lng: 69.32246959999999,
              lat: 41.335637,
            },
            status: 1,
          },
          {
            ud_id: "b9cda6090f564434a3a70fe9c59be968",
            location: {
              lng: 69.3625806,
              lat: 41.343882,
            },
            status: 2,
          },
          {
            ud_id: "baa5255d19b84127964dfc05077305d8",
            location: {
              lng: 69.2734968,
              lat: 41.29176580000001,
            },
            status: 2,
          },
          {
            ud_id: "bafd45fe69d54374849aa074f693175c",
            location: {
              lng: 69.2982675,
              lat: 41.3244678,
            },
            status: 1,
          },
          {
            ud_id: "bb247d95211043af8da9b7171976922c",
            location: {
              lng: 69.28951959999999,
              lat: 41.3812883,
            },
            status: 1,
          },
          {
            ud_id: "bb5d347ae5c64ea8af6b7e58c6e07908",
            location: {
              lng: 69.332343,
              lat: 41.25592899999999,
            },
            status: 2,
          },
          {
            ud_id: "bf98b325e491454483c826a064458d1e",
            location: {
              lng: 67.8254741,
              lat: 40.1297202,
            },
            status: 1,
          },
          {
            ud_id: "c33d5c611ba840f08d53793c101358fd",
            location: {
              lng: 69.25676046520095,
              lat: 41.25941766563587,
            },
            status: 2,
          },
          {
            ud_id: "c3adb89733bc4acab375595fdefb2801",
            location: {
              lng: 69.27301179999999,
              lat: 41.29158229999999,
            },
            status: 1,
          },
          {
            ud_id: "c3ea3ba8b8c24890a22a94f3abb76706",
            location: {
              lng: 69.291549,
              lat: 41.3202392,
            },
            status: 1,
          },
          {
            ud_id: "c48227c65d464605b88bbe90f0c8ba3d",
            location: {
              lng: 69.3157428,
              lat: 41.3149741,
            },
            status: 1,
          },
          {
            ud_id: "c4b47ee4931c425996136591b3cd9bd8",
            location: {
              lng: 69.3230243,
              lat: 41.3245187,
            },
            status: 1,
          },
          {
            ud_id: "c57bc1adece443afbe2dded2b6cc3ed8",
            location: {
              lng: 69.2973962,
              lat: 41.2943678,
            },
            status: 1,
          },
          {
            ud_id: "c77256dc0dd4496bbebc8386acc4ca2b",
            location: {
              lng: 69.2277563,
              lat: 41.220237,
            },
            status: 1,
          },
          {
            ud_id: "c864d0d0405b4888a4433415146587c2",
            location: {
              lng: 69.2699228,
              lat: 41.2945565,
            },
            status: 1,
          },
          {
            ud_id: "cb999e0c0c344dcf926f71e86fc9b928",
            location: {
              lng: 69.2863101,
              lat: 41.30513250000001,
            },
            status: 1,
          },
          {
            ud_id: "cd0448a3b17840b29f859d8284150f12",
            location: {
              lng: 69.3216383,
              lat: 41.336877,
            },
            status: 2,
          },
          {
            ud_id: "d0d029c550924e8c9a546d7ce85b7a02",
            location: {
              lng: 66.9544595,
              lat: 39.6448591,
            },
            status: 1,
          },
          {
            ud_id: "d2bced6ee5ea43e2ac7f805217016a22",
            location: {
              lng: 67.82719790000002,
              lat: 40.1273684,
            },
            status: 1,
          },
          {
            ud_id: "d541acc9ff5046c18b4f8902703ea8fb",
            location: {
              lng: 69.28878270000001,
              lat: 41.3114772,
            },
            status: 1,
          },
          {
            ud_id: "d550d2269abd411e9d95e24da0a523c0",
            location: {
              lng: 69.340518,
              lat: 41.3273941,
            },
            status: 1,
          },
          {
            ud_id: "d68f2216bf9c460c839260621b3e9ad6",
            location: {
              lng: 69.2424371,
              lat: 41.2804092,
            },
            status: 1,
          },
          {
            ud_id: "d7d32337019e4662aa00a33f9450c57c",
            location: {
              lng: 67.8387512,
              lat: 40.1191364,
            },
            status: 2,
          },
          {
            ud_id: "d994a49a2dd84ebd838975c6307ad8b3",
            location: {
              lng: 69.2545755,
              lat: 41.3392649,
            },
            status: 2,
          },
          {
            ud_id: "db78bb8f9ec94e66b955b6ffe84b3c9c",
            location: {
              lng: 67.8327337178823,
              lat: 40.14307511915739,
            },
            status: 1,
          },
          {
            ud_id: "dbf50965d6924dd4a4e51c630b50ca2e",
            location: {
              lng: 69.94230859999999,
              lat: 41.4867618,
            },
            status: 1,
          },
          {
            ud_id: "e1d8560c8aa149d8ad1511e647b69d59",
            location: {
              lng: 69.2927759,
              lat: 41.3121551,
            },
            status: 1,
          },
          {
            ud_id: "e37b4a63ba114027a9c94a718ff5a43d",
            location: {
              lng: 69.2861954,
              lat: 41.31019089999999,
            },
            status: 2,
          },
          {
            ud_id: "e441bd4ca8c34f6e9c570183e15c5046",
            location: {
              lng: 69.26602129999999,
              lat: 41.2946567,
            },
            status: 1,
          },
          {
            ud_id: "e8c7ca8917be4eda8e1be549b7925de7",
            location: {
              lng: 69.2898483,
              lat: 41.3115806,
            },
            status: 1,
          },
          {
            ud_id: "e945faed037042c68fd404fdd68730a5",
            location: {
              lng: 114.430175,
              lat: 30.477439,
            },
            status: 2,
          },
          {
            ud_id: "e9fcc0cfa0b14f4998be7880f700f7fe",
            location: {
              lng: 69.2399567,
              lat: 41.2818456,
            },
            status: 1,
          },
          {
            ud_id: "eaf4d5716d5440d9ba7d4e0e529409ad",
            location: {
              lng: 69.2917112,
              lat: 41.3085496,
            },
            status: 1,
          },
          {
            ud_id: "eb0d09834ad5458287a730f4d69958d0",
            location: {
              lng: 69.20263709999999,
              lat: 41.2722914,
            },
            status: 2,
          },
          {
            ud_id: "eded82f4683841f48fe479a58e805b7a",
            location: {
              lng: 66.9288936,
              lat: 39.6852791,
            },
            status: 2,
          },
          {
            ud_id: "edfd0ab654f94823915ef6621ca4101f",
            location: {
              lng: 69.2492972,
              lat: 41.3185826,
            },
            status: 1,
          },
          {
            ud_id: "ef6cce9b3acf41e0b0f1862b341a81ba",
            location: {
              lng: 69.2856216,
              lat: 41.31186719999999,
            },
            status: 1,
          },
          {
            ud_id: "f240086f77514a60bf7cbc1855c26506",
            location: {
              lng: 69.298313,
              lat: 41.324301,
            },
            status: 1,
          },
          {
            ud_id: "f30563ae4dd14292a339ae77b6e891fc",
            location: {
              lng: 114.01205,
              lat: 22.644665,
            },
            status: 2,
          },
          {
            ud_id: "f617d690e7a745779d02364f8adcaf95",
            location: {
              lng: 69.2960287,
              lat: 41.2679598,
            },
            status: 1,
          },
          {
            ud_id: "f706a3c46927410a9252d0ccaaf0470d",
            location: {
              lng: 69.2494578,
              lat: 41.2978698,
            },
            status: 2,
          },
          {
            ud_id: "f9fadf3f48334537812d7453bb266929",
            location: {
              lng: 69.2833301,
              lat: 41.325159,
            },
            status: 2,
          },
          {
            ud_id: "fad1671708fe4007a2a75afabd7acb2b",
            location: {
              lng: 69.280035,
              lat: 41.303194,
            },
            status: 1,
          },
          {
            ud_id: "ff1dab4f0b474fc5abe2a0c1005bad65",
            location: {
              lng: 69.3356452,
              lat: 41.3100014,
            },
            status: 1,
          },
        ];

        const myMap = new ymaps.Map("map", {
          center: [41.3223361, 69.2844921],
          zoom: 14,
          type: "yandex#map",
        });

        place.forEach((item) => {
          const placemark = new ymaps.Placemark(
            [item.location.lat, item.location.lng]
            // {
            //   hintContent: `<div style='font-size:14px;'><h2 style='font-weight: 500; font-size:14px;'>${item.name}</h2></div>`,
            //   balloonContent: `<div style='font-size:14px;'><div><h2 style='font-weight: 500; font-size:14px;'>${item.name}</h2><p style= 'margin: 0px; max-width: 250px; overflow-x: auto;'>${item.address}</p><span>${item.contact}</span></div><hr style='margin-top: .5rem; margin-bottom: .5rem;'/><div class='link_div'><a href='${item.link}' target='_blank' class='link-information-description'><svg xmlns='http://www.w3.org/2000/svg' class='svg-class' width='20' height='20'><path d='M11.016 8.277l4.63-4.63a.5.5 0 0 1 .708.707l-4.63 4.63a2 2 0 1 1-.707-.707zm3.794-5.885a2.016 2.016 0 0 0-.224.194L13.33 3.84a7 7 0 1 0 2.828 2.828l1.256-1.255c.071-.07.136-.146.194-.224a9 9 0 1 1-2.798-2.798zm-2.983 2.952l-.79.791A4.005 4.005 0 0 0 6 10a4 4 0 1 0 7.865-1.036l.79-.791a5 5 0 1 1-2.828-2.828z'></path></svg><span>Дополнительная информация</span></a></div></div>`,
            // }
          );
          myMap.geoObjects.add(placemark);

          placemark.options.set("iconLayout", "default#image");
          placemark.options.set(
            "iconImageHref",
            item.status === 1 ? "/images/map.png" : "/images/map_offline.png"
          );
          placemark.options.set("iconImageSize", [32, 32]); // Adjust the size as needed
          placemark.options.set("iconImageOffset", [-16, -32]);
        });

        myMap.controls.add("zoomControl", { top: 75, left: 5 });
        myMap.controls.add(
          new ymaps.control.TypeSelector([
            "yandex#hybrid",
            "yandex#map",
            "yandex#satellite",
          ])
        );
      });
    });

    return () => {
      script.removeEventListener("load", () => {});
    };
  }, []);

  return (
    <Wrapper id="karta">
      <h3 className="title" data-aos={"fade-up"}>
        {t("map.title")}
      </h3>
      <div className="map" data-aos={"fade-up"}>
        <div
          id="map"
          style={{ width: "100%", height: "500px", borderRadius: 50 }}
        ></div>
      </div>
    </Wrapper>
  );
};

const Maps = () => {
  const [points, setPoints] = useState([]);
  const ref = useRef({});
  useEffect(() => {
    const handle = (e) => {
      ref.current.clientX = e.clientX;
      ref.current.clientY = e.clientY;
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  useEffect(() => {
    async function fn() {
      const res = await fetch(
        "https://yoou.stwpower.com/power_bank/api/branches/nearby?lat=22.716701711615894&lng=114.03084644777901&radius=10000&appKey=gdCRh4XplLWrAAbdpVpMIGFM8BFtm8t0",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            version: 1.35,
          },
        }
      );
      const data = await res.json();
      console.log(data);
      setPoints(data.data);
    }
    fn();
  }, []);

  return (
    <Wrapper id="karta">
      <YMaps style={{ width: "100%", height: "100%" }}>
        <Map
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 50,
            overflow: "hidden",
          }}
          defaultState={{
            center: [41.29578559999999, 69.2720369],
            zoom: 15,
          }}
        >
          {points.map((point) =>
            point.status === 3 ? null : (
              <PlaceMarkPoint key={point.ud_id} point={point} refObj={ref} />
            )
          )}
        </Map>
      </YMaps>
    </Wrapper>
  );
};

function PlaceMarkPoint({ point, refObj }) {
  const [fullData, setFullData] = useState([]);
  const [loading, setLoading] = useState(false);
  const toolRef = useRef();

  const clickPoint = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://yoou.stwpower.com/power_bank/api/branches/detail/${point.ud_id}`
    );
    setFullData(res.data.data);

    setLoading(false);
  };

  const handleMouseEnter = (e) => {
    toolRef.current.style.top = refObj.current.clientY + "px";
    toolRef.current.style.left = refObj.current.clientX + "px";
    toolRef.current.style.visibility = "visible";
  };

  const handleMouseLeave = () => {
    toolRef.current.style.visibility = "hidden";
  };

  console.log(point);

  return (
    <PlaceStyle>
      <Placemark
        className="place"
        geometry={[point.location.lat, point.location.lng]}
        onHover={clickPoint}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        options={{
          iconLayout: "default#image",
          iconImageHref:
            point.status === 1 ? "/images/map.png" : "/images/map_offline.png",
          iconImageSize: [32, 32], // Adjust the size as needed
        }}
      />
      {
        <div className="tooltip" ref={toolRef}>
          <img src={fullData.logo} alt="logo" /> <br />
          <div className="texts">
            <p>Название заведения: {fullData.title}</p>
            <p>Часы работы: {fullData.openTime}</p>
            <p>Номер заведения: {fullData.landline}</p>
            <p>Доступно повербанков: {fullData.positionAvailableCount}</p>
            <p>Свободных слотов: {fullData.positionEmptyCount}</p>
          </div>
        </div>
      }
    </PlaceStyle>
  );
}

export default Maps;
