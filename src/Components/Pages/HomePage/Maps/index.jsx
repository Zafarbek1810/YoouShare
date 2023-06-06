import { useEffect } from 'react';
import { Wrapper } from './style';

const Maps = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://api-maps.yandex.ru/2.1/?apikey=gdCRh4XplLWrAAbdpVpMIGFM8BFtm8t0&lang=en_US`;
        script.async = true;
        document.head.appendChild(script);
    
        script.addEventListener('load', () => {
          ymaps.ready(() => {
            const linkInformation = [
                {
                    name: "7 пятниц",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Tashkent, Узбекистан",
                    landmarks: "",
                    latitude: 41.3223361,
                    longitude: 69.2844921,
                    link: "http://maps.google.com/?cid=10588078637557501902"
                },
                {
                    name: "April",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "г. Ташкент, ул. Чинобод 63, Узбекистан",
                    landmarks: "",
                    latitude: 41.3554001,
                    longitude: 69.3050079,
                    link: "http://maps.google.com/?cid=12915159283027110017"
                },
                {
                    name: "BarDuck",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "9-17 Matbuotchilar ko'chasi, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.3119857,
                    longitude: 69.2731643,
                    link: "http://maps.google.com/?cid=13865618871816655849"
                },
                {
                    name: "Beruniy restoran",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Unnamed Road, Узбекистан",
                    landmarks: "",
                    latitude: 41.3582015,
                    longitude: 69.1930261,
                    link: "http://maps.google.com/?cid=6833838634361249204"
                },
                {
                    name: "Black Star Burger",
                    state: "В ожидании ответа",
                    typeStation: "6 слотов",
                    contact: "+998 97 7242525",
                    nameContact: "Джурат, управляющий",
                    note: "",
                    workingHours: "",
                    address: "Tashkent, Узбекистан",
                    landmarks: "Divan by Demir, школа Успенского",
                    latitude: 41.307287,
                    longitude: 69.2914112,
                    link: "http://maps.google.com/?cid=12577153872075532447"
                },
                {
                    name: "Bon! S. Azimov Str.",
                    state: "В ожидании ответа",
                    typeStation: "6 слотов",
                    contact: "+998 99 4636331",
                    nameContact: "Арслан, управляющий",
                    note: "",
                    workingHours: "",
                    address: "44 Sodiq Azimov ko'chasi, Тошкент, Узбекистан",
                    landmarks: "Ц1",
                    latitude: 41.3094338,
                    longitude: 69.2916181,
                    link: "http://maps.google.com/?cid=7051654834567930287"
                },
                {
                    name: "BURSA FAMILY RESTAURANT",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Beruniy shoh ko'chasi, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.3343922,
                    longitude: 69.2162889,
                    link: "http://maps.google.com/?cid=13325074298367494046"
                },
                {
                    name: "Cloud Premium Hookah",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "3 Parkent ko'chasi, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.3165368,
                    longitude: 69.3187779,
                    link: "http://maps.google.com/?cid=1535674721459217522"
                },
                {
                    name: "Cowboy Jack",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "ул. Инжобод, 32, Узбекистан",
                    landmarks: "",  
                    latitude: 41.3360267,
                    longitude: 69.29291190000001,
                    link: "http://maps.google.com/?cid=5200466853691737845"
                },
                {
                    name: "Divan by Demir",
                    state: "Договорились",
                    typeStation: "36 слотов",
                    contact: "+998 90 9629100",
                    nameContact: "Бекзод, финдир",
                    note: "",
                    workingHours: "",
                    address: "49 А Sodiq Azimov ko'chasi, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.306813,
                    longitude: 69.292182,
                    link: "http://maps.google.com/?cid=16855141060367201787"
                },
                {
                    name: "DUBAI",
                    state: "",      
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Tashkent, Узбекистан",
                    landmarks: "",
                    latitude: 41.2590167,
                    longitude: 69.1634004,
                    link: "http://maps.google.com/?cid=17200534062626583525"
                },
                {
                    name: "Dudek Restaurant & Bar",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Ташкент Ulitsa Mukimiy 42, Узбекистан",
                    landmarks: "",
                    latitude: 41.2807655,
                    longitude: 69.2420357,
                    link: "http://maps.google.com/?cid=14345924282507981868"
                },
                {
                    name: "FM Bar",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "17 Matbuotchilar ko'chasi, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.3123912,
                    longitude: 69.2740234,
                    link: "http://maps.google.com/?cid=17831756709422051106"
                },
                {
                    name: "G’IJDUVON RESTORAN",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Tashkent, Узбекистан",
                    landmarks: "",
                    latitude: 41.3522941,
                    longitude: 69.3298016,
                    link: "http://maps.google.com/?cid=3883345403558213683"
                },
                {
                    name: "Gentlemen's Bar GQ",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "22 Shota Rustaveli ko'chasi, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.2926413,
                    longitude: 69.2618707,
                    link: "http://maps.google.com/?cid=14916972145795603284"
                },
                {
                    name: "GOROD",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "129 Амир Темур шоҳ кўчаси, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.3555836,
                    longitude: 69.2878295,
                    link: "http://maps.google.com/?cid=10615957613542013866"
                },
                {
                    name: "Izumrudniy restaurant",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Tashkent, Узбекистан",
                    landmarks: "",
                    latitude: 41.3110069,
                    longitude: 69.3209992,
                    link: "http://maps.google.com/?cid=16178554728441272913"
                },
                {
                    name: "Le Voyage",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "35 Asaka St, Tashkent, Узбекистан",
                    landmarks: "",
                    latitude: 41.3145641,
                    longitude: 69.3074534,
                    link: "http://maps.google.com/?cid=16889335018563760381"
                },
                {
                    name: "LOWBRO",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "55 Beshyogoch ko'chasi, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.3050923,
                    longitude: 69.249369,
                    link: "http://maps.google.com/?cid=17395595170017669102"
                },
                {
                    name: "Madbrick Lounge",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "13 O'zbekiston shoh ko'chasi, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.3077977,
                    longitude: 69.275362,
                    link: "http://maps.google.com/?cid=9197511859929047556"
                },
                {
                    name: "Meduza Hookah Bar",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Tashkent 100097, Узбекистан",
                    landmarks: "",
                    latitude: 41.2852503,
                    longitude: 69.2050923,
                    link: "http://maps.google.com/?cid=18287457506223533908"
                },
                {
                    name: "Navvat",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "9 Matbuotchilar ko'chasi, Тошкент 100012, Узбекистан",
                    landmarks: "",
                    latitude: 41.3117317,
                    longitude: 69.2747214,
                    link: "http://maps.google.com/?cid=4663409513881727420"
                },
                {
                    name: "NOBILE Mediterranean Restaurant",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "ул. Гафура Гуляма, д. 2А, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.3309033,
                    longitude: 69.2483151,
                    link: "http://maps.google.com/?cid=13427106537802069340"
                },
                {
                    name: "Noir Hookah",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "43 ул. Бадамзар, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.3358282,
                    longitude: 69.2923335,
                    link: "http://maps.google.com/?cid=3280611717431653978"
                },
                {
                    name: "OFARIN RESTAURANT",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Алмазарский район улица камарнимо 15 А дом, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.363889,
                    longitude: 69.187037,
                    link: "http://maps.google.com/?cid=17349873250811015086"
                },
                {
                    name: "Panda Hookah bar",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Beshyogoch, 6a Bunyodkor shoh ko'chasi, Тошкент 100002, Узбекистан",
                    landmarks: "",
                    latitude: 41.3086746,
                    longitude: 69.2378506,
                    link: "http://maps.google.com/?cid=9733409272079421375"
                },
                {
                    name: "Prestige",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Tashkent, Узбекистан",
                    landmarks: "",
                    latitude: 41.2718291,
                    longitude: 69.2077974,
                    link: "http://maps.google.com/?cid=13343151954503763635"
                },
                {
                    name: "QUADRO",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "24 Zulfiya xonim ko'chasi, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.329428300000004,
                    longitude: 69.2626089,
                    link: "http://maps.google.com/?cid=1840432321731769630"
                },
                {
                    name: "RESTARAN Sazanchik",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "116, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.3363114,
                    longitude: 69.2662353,
                    link: "http://maps.google.com/?cid=18420952435996106498"
                },
                {
                    name: "Shohsaroy Restaurant",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "дом 60 Ahmad Donish ko'chasi, Тошкент 100093, Узбекистан",
                    landmarks: "",
                    latitude: 41.360746,
                    longitude: 69.2782949,
                    link: "http://maps.google.com/?cid=17616022071826379471"
                },
                {
                    name: "Shosh Restaurant & Terrace",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "2 Islam Karimov Street Floor 1, Tashkent 100027, Узбекистан",
                    landmarks: "",
                    latitude: 41.3138425,
                    longitude: 69.2494462,
                    link: "http://maps.google.com/?cid=10110927206781465357"
                },
                {
                    name: "SoloPlayHookah",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Tashkent 100096, Узбекистан",
                    landmarks: "",
                    latitude: 41.2964143,
                    longitude: 69.2158785,
                    link: "http://maps.google.com/?cid=7091222973985322188"
                },
                {
                    name: "Space Club Tashkent",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "B-1 2, Beruni Ave, Tashkent, Узбекистан",
                    landmarks: "",
                    latitude: 41.3321226,
                    longitude: 69.2204889,
                    link: "http://maps.google.com/?cid=5373154394117130547"
                },
                {
                    name: "Tamanno Restaurant",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "9 улица Кичик Бешагач, Tashkent, Узбекистан",
                    landmarks: "",
                    latitude: 41.3056489,
                    longitude: 69.2511672,
                    link: "http://maps.google.com/?cid=9912934689101343365"
                },
                {
                    name: "The Barton Hookah lounge",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "7 Arnasay ko'chasi, Тошкент 100115, Узбекистан",
                    landmarks: "",
                    latitude: 41.2850632,
                    longitude: 69.2331257,
                    link: "http://maps.google.com/?cid=8445791118528589210"
                },
                {
                    name: "The Bowler",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Samarqand Darvoza, 5a Samarqand Darvoza ko'chasi, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.3162019,
                    longitude: 69.2308181,
                    link: "http://maps.google.com/?cid=9474649651300121748"
                },
                {
                    name: "The ROOMs",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Tashkent, Узбекистан",
                    landmarks: "",
                    latitude: 41.3042339,
                    longitude: 69.3066223,
                    link: "http://maps.google.com/?cid=11620631410703701841"
                },
                {
                    name: "VELVET restaurant",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "35 Abdulla Qodiriy ko'chasi, Тошкент 100128, Узбекистан",
                    landmarks: "",
                    latitude: 41.325215,
                    longitude: 69.2581247,
                    link: "http://maps.google.com/?cid=12935155009098774250"
                },
                {
                    name: "Yaponamama",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "69А Shota Rustaveli ko'chasi, Tashkent, Узбекистан",
                    landmarks: "",
                    latitude: 41.2736758,
                    longitude: 69.2409776,
                    link: "http://maps.google.com/?cid=16499600375780646632"
                },
                {
                    name: "Yaponamama Botkina",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "ул. Бойкургон, 6, Tashkent, Узбекистан",
                    landmarks: "",
                    latitude: 41.31094,
                    longitude: 69.3132189,
                    link: "http://maps.google.com/?cid=8238461361303838547"
                },
                {
                    name: "Алтын",
                    state: "Договорились",
                    typeStation: "6 слотов",
                    contact: "+998 90 3197318",
                    nameContact: "Андрей, замдира",
                    note: "Бывший Манас",
                    workingHours: "",
                    address: "43 M. Yakubova ko'chasi, Тошкент, Узбекистан",
                    landmarks: "Grandsomsa",
                    latitude: 41.2943726,
                    longitude: 69.2644424,
                    link: "http://maps.google.com/?cid=934717400476741256"
                },
                {
                    name: "Белый журавль",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Юнусабад 11, ул, 146 Амир Темур шоҳ кўчаси, Тошкент 100037, Узбекистан",
                    landmarks: "",
                    latitude: 41.3661898,
                    longitude: 69.2869563,
                    link: "http://maps.google.com/?cid=5196658251231248306"
                },
                {
                    name: "Великий Гэтсби Караоке Бар",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "7, 9 Navoi Avenue, Tashkent, Узбекистан",
                    landmarks: "",
                    latitude: 41.3196434,
                    longitude: 69.2631655,
                    link: "http://maps.google.com/?cid=2787231312381989083"
                },
                {
                    name: "Джой Боулинг Клаб",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "24 Oybek ko'chasi, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.2945105,
                    longitude: 69.2771657,
                    link: "http://maps.google.com/?cid=17021851740244362693"
                },
                {
                    name: "ЖИГУЛИ БАР",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Sultonali Mashxadiy ko'chasi, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.3118538,
                    longitude: 69.3169945,
                    link: "http://maps.google.com/?cid=6061375663406418201"
                },
                {
                    name: "Кафе «Файз»",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Tashkent, Узбекистан",
                    landmarks: "",
                    latitude: 41.2448444,
                    longitude: 69.2756549,
                    link: "http://maps.google.com/?cid=2466679414261873157"
                },
                {
                    name: "Киш-миш",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Tashkent, Узбекистан",
                    landmarks: "",
                    latitude: 41.3331188,
                    longitude: 69.3018355,
                    link: "http://maps.google.com/?cid=15786275992074454036"
                },
                {
                    name: "Кофейня «Чайкоф»",
                    state: "В ожидании ответа",
                    typeStation: "6 слотов",
                    contact: "+998 90 9506074",
                    nameContact: "Алишер, управляющий",
                    note: "",
                    workingHours: "",
                    address: "16 б Said Baraka ko'chasi, Тошкент 100060, Узбекистан",
                    landmarks: "Perfectum",
                    latitude: 41.296159,
                    longitude: 69.280906,
                    link: "http://maps.google.com/?cid=3927250540209533833"
                },
                {
                    name: "Магазин аксессуаров для мобильных телефонов",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Tashkent, Узбекистан",
                    landmarks: "",
                    latitude: 41.2385494,
                    longitude: 69.3294318,
                    link: "http://maps.google.com/?cid=18155905940416025377"
                },
                {
                    name: "На Небе",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "57 Xurshid ko'chasi, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.32796,
                    longitude: 69.2781058,
                    link: "http://maps.google.com/?cid=9839968339344415503"
                },
                {
                    name: "Пенная Борода",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Чиланзарский район, Улица Катартал Ц квартал 1/1, Тошкент 100185, Узбекистан",
                    landmarks: "",
                    latitude: 41.284485,
                    longitude: 69.204612,
                    link: "http://maps.google.com/?cid=3964778964873348073"
                },
                {
                    name: "Ресторан «Huvaydo»",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Beruniy shoh ko'chasi, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.3405784,
                    longitude: 69.2058045,
                    link: "http://maps.google.com/?cid=3151342065402718452"
                },
                {
                    name: "Ресторан «Салом»",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "160 Buyuk Ipak Yo'li, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.3278687,
                    longitude: 69.3440463,
                    link: "http://maps.google.com/?cid=6103820063932277448"
                },
                {
                    name: "Ресторан DODON",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "buyuk ipak yo'li street 265-267, Тошкент 100187, Узбекистан",
                    landmarks: "",
                    latitude: 41.3380016,
                    longitude: 69.3558975,
                    link: "http://maps.google.com/?cid=6590838541529966687"
                },
                {
                    name: "Ресторан Олмос",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Katta Xirmontepa ko'chasi, Тошкент 100157, Узбекистан",
                    landmarks: "",
                    latitude: 41.2796609,
                    longitude: 69.1712737,
                    link: "http://maps.google.com/?cid=2383683148782732799"
                },
                {
                    name: "Сазанчик",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Tashkent, Узбекистан",
                    landmarks: "",
                    latitude: 41.3428556,
                    longitude: 69.3356204,
                    link: "http://maps.google.com/?cid=3213005146195654707"
                },
                {
                    name: "Сазанчик Эксклюзив Каракамыш",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Tashkent, Узбекистан",
                    landmarks: "",
                    latitude: 41.3599855,
                    longitude: 69.2224265,
                    link: "http://maps.google.com/?cid=5517996287803625161"
                },
                {
                    name: "Ташкент ШИШКА Lounge Bar",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Улица Кичик Миробод, 26, Узбекистан",
                    landmarks: "",
                    latitude: 41.2904309,
                    longitude: 69.264499,
                    link: "http://maps.google.com/?cid=3954204702620308285"
                },
                {
                    name: "УзБоулинг",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "8 O'zbekiston shoh ko'chasi, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.3108983,
                    longitude: 69.245584,
                    link: "http://maps.google.com/?cid=12479173274706101326"
                },
                {
                    name: "Чердак Lounge",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Aviasozlar ko'chasi, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.2824505,
                    longitude: 69.349713,
                    link: "http://maps.google.com/?cid=4020565121761714650"
                },
                {
                    name: "Эль Гаучо",
                    state: "",
                    typeStation: "",
                    contact: "",
                    nameContact: "",
                    note: "",
                    workingHours: "",
                    address: "Ориентир: Напротив ресторана Flamingo, справа от клиники Diamed, 98/2 Muqimiy ko'chasi, Тошкент, Узбекистан",
                    landmarks: "",
                    latitude: 41.2854658,
                    longitude: 69.2345256,
                    link: "http://maps.google.com/?cid=17114407787712041022"
                },
            ]
    
            const myMap = new ymaps.Map("map", {
              center: [41.3223361, 69.2844921],
              zoom: 14,
              type: "yandex#map",
            });
    
            linkInformation.forEach((item) => {
              const placemark = new ymaps.Placemark(
                [item.latitude, item.longitude],
                {
                  hintContent: `<div style='font-size:14px;'><h2 style='font-weight: 500; font-size:14px;'>${item.name}</h2></div>`,
                  balloonContent: `<div style='font-size:14px;'><div><h2 style='font-weight: 500; font-size:14px;'>${item.name}</h2><p style= 'margin: 0px; max-width: 250px; overflow-x: auto;'>${item.address}</p><span>${item.contact}</span></div><hr style='margin-top: .5rem; margin-bottom: .5rem;'/><div class='link_div'><a href='${item.link}' target='_blank' class='link-information-description'><svg xmlns='http://www.w3.org/2000/svg' class='svg-class' width='20' height='20'><path d='M11.016 8.277l4.63-4.63a.5.5 0 0 1 .708.707l-4.63 4.63a2 2 0 1 1-.707-.707zm3.794-5.885a2.016 2.016 0 0 0-.224.194L13.33 3.84a7 7 0 1 0 2.828 2.828l1.256-1.255c.071-.07.136-.146.194-.224a9 9 0 1 1-2.798-2.798zm-2.983 2.952l-.79.791A4.005 4.005 0 0 0 6 10a4 4 0 1 0 7.865-1.036l.79-.791a5 5 0 1 1-2.828-2.828z'></path></svg><span>Дополнительная информация</span></a></div></div>`,
                }
              );
              myMap.geoObjects.add(placemark);
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
          script.removeEventListener('load', () => {});
        };
      }, []);
//     ymaps.ready(() => {

//       ymaps.load().then((maps) => {
//         const myMap = new maps.Map("map", {
//           center: [41.3223361, 69.2844921],
//           zoom: 14,
//           type: "yandex#map",
//         });

//         for (let i = 0; i < linkInformation.length; i++) {
//           const myPlacemark = new maps.Placemark(
//             [linkInformation[i].latitude, linkInformation[i].longitude],
//             {
//               hintContent: `<div style='font-size:14px;'><h2 style='font-weight: 500; font-size:14px;'>${linkInformation[i].name}</h2></div>`,
//               balloonContent: `<div style='font-size:14px;'><div><h2 style='font-weight: 500; font-size:14px;'>${linkInformation[i].name}</h2><p style= 'margin: 0px; max-width: 250px; overflow-x: auto;'>${linkInformation[i].address}</p><span>${linkInformation[i].contact}</span></div><hr style='margin-top: .5rem; margin-bottom: .5rem;'/><div class='link_div'><a href='${linkInformation[i].link}' target='_blank' class='link-information-description'><svg xmlns='http://www.w3.org/2000/svg' class='svg-class' width='20' height='20'><path d='M11.016 8.277l4.63-4.63a.5.5 0 0 1 .708.707l-4.63 4.63a2 2 0 1 1-.707-.707zm3.794-5.885a2.016 2.016 0 0 0-.224.194L13.33 3.84a7 7 0 1 0 2.828 2.828l1.256-1.255c.071-.07.136-.146.194-.224a9 9 0 1 1-2.798-2.798zm-2.983 2.952l-.79.791A4.005 4.005 0 0 0 6 10a4 4 0 1 0 7.865-1.036l.79-.791a5 5 0 1 1-2.828-2.828z'></path></svg><span>Дополнительная информация</span></a></div></div>`,
//             }
//           );
//           myMap.geoObjects.add(myPlacemark);
//         }

//         myMap.controls.add("zoomControl", { top: 75, left: 5 });
//         myMap.controls.add(
//           new maps.control.TypeSelector([
//             "yandex#hybrid",
//             "yandex#map",
//             "yandex#satellite",
//           ])
//         );
//       });
//     });
//   }, []);

  return (
     <div id="map" style={{ width: '100%', height: '500px', borderRadius:50 }}></div>
  );
};

export default Maps;
