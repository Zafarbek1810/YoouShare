import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BrandsWrapper } from "./Brands.style";
import Container from "../../../Common/Container";

const dataImg = [
  {
    img: "/brands/1.jpg",
    alt: "1. Logo brands of our partners",
  },
  {
    img: "/brands/2.jpg",
    alt: "2. Logo brands of our partners",
  },
  {
    img: "/brands/3.jpg",
    alt: "3. Logo brands of our partners",
  },
  {
    img: "/brands/4.jpg",
    alt: "4. Logo brands of our partners",
  },
  {
    img: "/brands/5.jpg",
    alt: "5. Logo brands of our partners",
  },
  {
    img: "/brands/6.jpg",
    alt: "6. Logo brands of our partners",
  },
  {
    img: "/brands/7.jpg",
    alt: "7. Logo brands of our partners",
  },
  {
    img: "/brands/8.jpg",
    alt: "8. Logo brands of our partners",
  },
  {
    img: "/brands/9.jpg",
    alt: "9. Logo brands of our partners",
  },
  {
    img: "/brands/10.jpg",
    alt: "10. Logo brands of our partners",
  },
  {
    img: "/brands/11.jpg",
    alt: "11. Logo brands of our partners",
  },
  {
    img: "/brands/12.jpg",
    alt: "12. Logo brands of our partners",
  },
];

const dataImg2 = [
  {
    img: "/brands/13.jpg",
    alt: "13. Logo brands of our partners",
  },
  {
    img: "/brands/14.jpg",
    alt: "14. Logo brands of our partners",
  },
  {
    img: "/brands/15.jpg",
    alt: "15. Logo brands of our partners",
  },
  {
    img: "/brands/16.jpg",
    alt: "16. Logo brands of our partners",
  },
  {
    img: "/brands/17.jpg",
    alt: "17. Logo brands of our partners",
  },
  {
    img: "/brands/18.jpg",
    alt: "18. Logo brands of our partners",
  },
  {
    img: "/brands/19.jpg",
    alt: "19. Logo brands of our partners",
  },
  {
    img: "/brands/20.jpg",
    alt: "20. Logo brands of our partners",
  },
  {
    img: "/brands/21.jpg",
    alt: "21. Logo brands of our partners",
  },
  {
    img: "/brands/22.jpg",
    alt: "22. Logo brands of our partners",
  },
  {
    img: "/brands/23.jpg",
    alt: "23. Logo brands of our partners",
  },
  {
    img: "/brands/24.jpg",
    alt: "24. Logo brands of our partners",
  },
  {
    img: "/brands/25.jpg",
    alt: "25. Logo brands of our partners",
  },
  {
    img: "/brands/26.jpg",
    alt: "26. Logo brands of our partners",
  },
  {
    img: "/brands/27.jpg",
    alt: "27. Logo brands of our partners",
  },
  {
    img: "/brands/28.jpg",
    alt: "28. Logo brands of our partners",
  },
  {
    img: "/brands/29.jpg",
    alt: "29. Logo brands of our partners",
  },
  {
    img: "/brands/30.jpg",
    alt: "30. Logo brands of our partners",
  },
  {
    img: "/brands/31.jpg",
    alt: "31. Logo brands of our partners",
  },

  {
    img: "/brands/32.jpg",
    alt: "32. Logo brands of our partners",
  },
  {
    img: "/brands/33.jpg",
    alt: "33. Logo brands of our partners",
  },
  {
    img: "/brands/34.jpg",
    alt: "34. Logo brands of our partners",
  },
  {
    img: "/brands/35.jpg",
    alt: "35. Logo brands of our partners",
  },
  {
    img: "/brands/36.jpg",
    alt: "36. Logo brands of our partners",
  },
  {
    img: "/brands/37.jpg",
    alt: "37. Logo brands of our partners",
  },
  {
    img: "/brands/38.jpg",
    alt: "38. Logo brands of our partners",
  },
  {
    img: "/brands/39.jpg",
    alt: "39. Logo brands of our partners",
  },
  {
    img: "/brands/40.jpg",
    alt: "40. Logo brands of our partners",
  },
  {
    img: "/brands/41.jpg",
    alt: "41. Logo brands of our partners",
  },
  {
    img: "/brands/42.jpg",
    alt: "42. Logo brands of our partners",
  },
  {
    img: "/brands/43.jpg",
    alt: "43. Logo brands of our partners",
  },
  {
    img: "/brands/44.jpg",
    alt: "44. Logo brands of our partners",
  },
  {
    img: "/brands/45.jpg",
    alt: "45. Logo brands of our partners",
  },
  {
    img: "/brands/46.jpg",
    alt: "46. Logo brands of our partners",
  },
  {
    img: "/brands/47.jpg",
    alt: "47. Logo brands of our partners",
  },
  {
    img: "/brands/48.jpg",
    alt: "48. Logo brands of our partners",
  },
  {
    img: "/brands/49.jpg",
    alt: "49. Logo brands of our partners",
  },
  {
    img: "/brands/50.jpg",
    alt: "50. Logo brands of our partners",
  },
  {
    img: "/brands/51.jpg",
    alt: "51. Logo brands of our partners",
  },
  {
    img: "/brands/52.jpg",
    alt: "52. Logo brands of our partners",
  },
  {
    img: "/brands/53.jpg",
    alt: "53. Logo brands of our partners",
  },
  {
    img: "/brands/54.jpg",
    alt: "54. Logo brands of our partners",
  },
  {
    img: "/brands/55.jpg",
    alt: "55. Logo brands of our partners",
  },
  {
    img: "/brands/56.jpg",
    alt: "56. Logo brands of our partners",
  },
  {
    img: "/brands/57.jpg",

    alt: "57. Logo brands of our partners",
  },
  {
    img: "/brands/58.jpg",
    alt: "58. Logo brands of our partners",
  },
  {
    img: "/brands/59.jpg",
    alt: "59. Logo brands of our partners",
  },
  {
    img: "/brands/60.jpg",
    alt: "60. Logo brands of our partners",
  },
  {
    img: "/brands/61.jpg",
    alt: "61. Logo brands of our partners",
  },

  {
    img: "/brands/62.jpg",
    alt: "62. Logo brands of our partners",
  },
  {
    img: "/brands/63.jpg",
    alt: "63. Logo brands of our partners",
  },
  {
    img: "/brands/64.jpg",
    alt: "64. Logo brands of our partners",
  },
  {
    img: "/brands/65.jpg",
    alt: "65. Logo brands of our partners",
  },
  {
    img: "/brands/66.jpg",
    alt: "66. Logo brands of our partners",
  },
  {
    img: "/brands/67.jpg",
    alt: "67. Logo brands of our partners",
  },
  {
    img: "/brands/68.jpg",
    alt: "68. Logo brands of our partners",
  },
  {
    img: "/brands/69.jpg",
    alt: "69. Logo brands of our partners",
  },
  {
    img: "/brands/70.jpg",
    alt: "70. Logo brands of our partners",
  },
  {
    img: "/brands/71.jpg",
    alt: "71. Logo brands of our partners",
  },
  {
    img: "/brands/72.jpg",
    alt: "72. Logo brands of our partners",
  },
  {
    img: "/brands/73.jpg",
    alt: "73. Logo brands of our partners",
  },
  {
    img: "/brands/74.jpg",
    alt: "74. Logo brands of our partners",
  },
  {
    img: "/brands/75.jpg",
    alt: "75. Logo brands of our partners",
  },
  {
    img: "/brands/76.jpg",
    alt: "76. Logo brands of our partners",
  },
  {
    img: "/brands/77.jpg",
    alt: "77. Logo brands of our partners",
  },
  {
    img: "/brands/78.jpg",
    alt: "78. Logo brands of our partners",
  },
  {
    img: "/brands/79.jpg",
    alt: "79. Logo brands of our partners",
  },
  {
    img: "/brands/80.jpg",
    alt: "80. Logo brands of our partners",
  },
  {
    img: "/brands/81.jpg",
    alt: "81. Logo brands of our partners",
  },
  {
    img: "/brands/82.jpg",
    alt: "82. Logo brands of our partners",
  },
  {
    img: "/brands/83.jpg",
    alt: "83. Logo brands of our partners",
  },
  {
    img: "/brands/84.jpg",
    alt: "84. Logo brands of our partners",
  },
  {
    img: "/brands/85.jpg",
    alt: "85. Logo brands of our partners",
  },
  {
    img: "/brands/86.jpg",
    alt: "86. Logo brands of our partners",
  },
  {
    img: "/brands/87.jpg",
    alt: "87. Logo brands of our partners",
  },
  {
    img: "/brands/88.jpg",
    alt: "88. Logo brands of our partners",
  },
  {
    img: "/brands/89.jpg",
    alt: "89. Logo brands of our partners",
  },
  {
    img: "/brands/90.jpg",
    alt: "90. Logo brands of our partners",
  },
  {
    img: "/brands/91.jpg",
    alt: "91. Logo brands of our partners",
  },
  {
    img: "/brands/92.jpg",
    alt: "92. Logo brands of our partners",
  },
  {
    img: "/brands/93.jpg",
    alt: "93. Logo brands of our partners",
  },
  {
    img: "/brands/94.jpg",
    alt: "94. Logo brands of our partners",
  },
  {
    img: "/brands/95.jpg",
    alt: "95. Logo brands of our partners",
  },
  {
    img: "/brands/96.jpg",
    alt: "96. Logo brands of our partners",
  },
  {
    img: "/brands/97.jpg",
    alt: "97. Logo brands of our partners",
  },
  {
    img: "/brands/98.jpg",
    alt: "98. Logo brands of our partners",
  },
  {
    img: "/brands/99.jpg",
    alt: "99. Logo brands of our partners",
  },
  {
    img: "/brands/100.jpg",
    alt: "100. Logo brands of our partners",
  },
  {
    img: "/brands/101.jpg",
    alt: "101. Logo brands of our partners",
  },
  {
    img: "/brands/102.jpg",
    alt: "102. Logo brands of our partners",
  },
  {
    img: "/brands/103.jpg",
    alt: "103. Logo brands of our partners",
  },
  {
    img: "/brands/104.jpg",
    alt: "104. Logo brands of our partners",
  },
  {
    img: "/brands/105.jpg",
    alt: "105. Logo brands of our partners",
  },
  {
    img: "/brands/106.jpg",
    alt: "106. Logo brands of our partners",
  },
  {
    img: "/brands/107.jpg",
    alt: "107. Logo brands of our partners",
  },
  {
    img: "/brands/108.jpg",
    alt: "108. Logo brands of our partners",
  },
  {
    img: "/brands/109.jpg",
    alt: "109. Logo brands of our partners",
  },
  {
    img: "/brands/110.jpg",
    alt: "110. Logo brands of our partners",
  },
  {
    img: "/brands/111.jpg",
    alt: "111. Logo brands of our partners",
  },
  {
    img: "/brands/112.jpg",
    alt: "112. Logo brands of our partners",
  },
  {
    img: "/brands/113.jpg",
    alt: "113. Logo brands of our partners",
  },
  {
    img: "/brands/114.jpg",
    alt: "114. Logo brands of our partners",
  },
  {
    img: "/brands/115.jpg",
    alt: "115. Logo brands of our partners",
  },
  {
    img: "/brands/116.jpg",
    alt: "116. Logo brands of our partners",
  },
  {
    img: "/brands/117.jpg",
    alt: "117. Logo brands of our partners",
  },
  {
    img: "/brands/118.jpg",
    alt: "118. Logo brands of our partners",
  },
  {
    img: "/brands/119.jpg",
    alt: "119. Logo brands of our partners",
  },
  {
    img: "/brands/120.jpg",
    alt: "120. Logo brands of our partners",
  },
  {
    img: "/brands/121.jpg",
    alt: "121. Logo brands of our partners",
  },
  {
    img: "/brands/122.jpg",
    alt: "122. Logo brands of our partners",
  },
  {
    img: "/brands/123.jpg",
    alt: "123. Logo brands of our partners",
  },
  {
    img: "/brands/124.jpg",
    alt: "124. Logo brands of our partners",
  },
  {
    img: "/brands/125.jpg",
    alt: "125. Logo brands of our partners",
  },
  {
    img: "/brands/126.jpg",
    alt: "126. Logo brands of our partners",
  },
  {
    img: "/brands/127.jpg",
    alt: "127. Logo brands of our partners",
  },
  {
    img: "/brands/128.jpg",
    alt: "128. Logo brands of our partners",
  },
  {
    img: "/brands/129.jpg",
    alt: "129. Logo brands of our partners",
  },
  {
    img: "/brands/130.jpg",
    alt: "130. Logo brands of our partners",
  },
  {
    img: "/brands/131.jpg",
    alt: "131. Logo brands of our partners",
  },
  {
    img: "/brands/132.jpg",
    alt: "132. Logo brands of our partners",
  },
  {
    img: "/brands/133.jpg",
    alt: "133. Logo brands of our partners",
  },
  {
    img: "/brands/134.jpg",
    alt: "134. Logo brands of our partners",
  },
  {
    img: "/brands/135.jpg",
    alt: "135. Logo brands of our partners",
  },
  {
    img: "/brands/136.jpg",
    alt: "136. Logo brands of our partners",
  },
  {
    img: "/brands/137.jpg",
    alt: "137. Logo brands of our partners",
  },
  {
    img: "/brands/138.jpg",
    alt: "138. Logo brands of our partners",
  },
  {
    img: "/brands/139.jpg",
    alt: "139. Logo brands of our partners",
  },
  {
    img: "/brands/140.jpg",
    alt: "140. Logo brands of our partners",
  },
  {
    img: "/brands/141.jpg",
    alt: "141. Logo brands of our partners",
  },
  {
    img: "/brands/142.jpg",
    alt: "142. Logo brands of our partners",
  },
  {
    img: "/brands/143.jpg",
    alt: "143. Logo brands of our partners",
  },
  {
    img: "/brands/144.jpg",
    alt: "144. Logo brands of our partners",
  },
  {
    img: "/brands/145.jpg",
    alt: "145. Logo brands of our partners",
  },
  {
    img: "/brands/146.jpg",
    alt: "146. Logo brands of our partners",
  },
  {
    img: "/brands/147.jpg",
    alt: "147. Logo brands of our partners",
  },
  {
    img: "/brands/148.jpg",
    alt: "148. Logo brands of our partners",
  },
  {
    img: "/brands/149.jpg",
    alt: "149. Logo brands of our partners",
  },
  {
    img: "/brands/150.jpg",
    alt: "150. Logo brands of our partners",
  },
  {
    img: "/brands/151.jpg",
    alt: "151. Logo brands of our partners",
  },
  {
    img: "/brands/152.jpg",
    alt: "152. Logo brands of our partners",
  },
  {
    img: "/brands/153.jpg",
    alt: "153. Logo brands of our partners",
  },
  {
    img: "/brands/154.jpg",
    alt: "154. Logo brands of our partners",
  },
  {
    img: "/brands/155.jpg",
    alt: "155. Logo brands of our partners",
  },
  {
    img: "/brands/156.jpg",
    alt: "156. Logo brands of our partners",
  },
  {
    img: "/brands/157.jpg",
    alt: "157. Logo brands of our partners",
  },
  {
    img: "/brands/158.jpg",
    alt: "158. Logo brands of our partners",
  },
  {
    img: "/brands/159.jpg",
    alt: "159. Logo brands of our partners",
  },
  {
    img: "/brands/160.jpg",
    alt: "160. Logo brands of our partners",
  },
  {
    img: "/brands/161.jpg",
    alt: "161. Logo brands of our partners",
  },
  {
    img: "/brands/162.jpg",
    alt: "162. Logo brands of our partners",
  },
  {
    img: "/brands/163.jpg",
    alt: "163. Logo brands of our partners",
  },
  {
    img: "/brands/164.jpg",
    alt: "164. Logo brands of our partners",
  },
  {
    img: "/brands/165.jpg",
    alt: "165. Logo brands of our partners",
  },
  {
    img: "/brands/166.jpg",
    alt: "166. Logo brands of our partners",
  },
  {
    img: "/brands/167.jpg",
    alt: "167. Logo brands of our partners",
  },
  {
    img: "/brands/168.jpg",
    alt: "168. Logo brands of our partners",
  },
  {
    img: "/brands/169.jpg",
    alt: "169. Logo brands of our partners",
  },
  {
    img: "/brands/170.jpg",
    alt: "170. Logo brands of our partners",
  },
  {
    img: "/brands/171.jpg",
    alt: "171. Logo brands of our partners",
  },
  {
    img: "/brands/172.jpg",
    alt: "172. Logo brands of our partners",
  },
  {
    img: "/brands/173.jpg",
    alt: "173. Logo brands of our partners",
  },
  {
    img: "/brands/174.jpg",
    alt: "174. Logo brands of our partners",
  },
  {
    img: "/brands/175.jpg",
    alt: "175. Logo brands of our partners",
  },
  {
    img: "/brands/176.jpg",
    alt: "176. Logo brands of our partners",
  },
  {
    img: "/brands/177.jpg",
    alt: "177. Logo brands of our partners",
  },
  {
    img: "/brands/178.jpg",
    alt: "178. Logo brands of our partners",
  },
  {
    img: "/brands/179.jpg",
    alt: "179. Logo brands of our partners",
  },
  {
    img: "/brands/180.jpg",
    alt: "180. Logo brands of our partners",
  },
  {
    img: "/brands/181.jpg",
    alt: "181. Logo brands of our partners",
  },
  {
    img: "/brands/182.jpg",
    alt: "182. Logo brands of our partners",
  },
  {
    img: "/brands/183.jpg",
    alt: "183. Logo brands of our partners",
  },
  {
    img: "/brands/184.jpg",
    alt: "184. Logo brands of our partners",
  },
  {
    img: "/brands/185.jpg",
    alt: "185. Logo brands of our partners",
  },
  {
    img: "/brands/186.jpg",
    alt: "186. Logo brands of our partners",
  },
  {
    img: "/brands/187.jpg",
    alt: "187. Logo brands of our partners",
  },
  {
    img: "/brands/188.jpg",
    alt: "188. Logo brands of our partners",
  },
  {
    img: "/brands/189.jpg",
    alt: "189. Logo brands of our partners",
  },
  {
    img: "/brands/190.jpg",
    alt: "190. Logo brands of our partners",
  },
  {
    img: "/brands/191.jpg",
    alt: "191. Logo brands of our partners",
  },
  {
    img: "/brands/192.jpg",
    alt: "192. Logo brands of our partners",
  },
  {
    img: "/brands/193.jpg",
    alt: "193. Logo brands of our partners",
  },
  {
    img: "/brands/194.jpg",
    alt: "194. Logo brands of our partners",
  },
  {
    img: "/brands/195.jpg",
    alt: "195. Logo brands of our partners",
  },
  {
    img: "/brands/196.jpg",
    alt: "196. Logo brands of our partners",
  },
  {
    img: "/brands/197.jpg",
    alt: "197. Logo brands of our partners",
  },
  {
    img: "/brands/198.jpg",
    alt: "198. Logo brands of our partners",
  },
  {
    img: "/brands/199.png",
    alt: "199. Logo brands of our partners",
  },
  {
    img: "/brands/200.png",
    alt: "200. Logo brands of our partners",
  },
  {
    img: "/brands/201.png",
    alt: "201. Logo brands of our partners",
  },
  {
    img: "/brands/202.png",
    alt: "202. Logo brands of our partners",
  },
  {
    img: "/brands/203.png",
    alt: "203. Logo brands of our partners",
  },
  {
    img: "/brands/204.png",
    alt: "204. Logo brands of our partners",
  },
  {
    img: "/brands/205.png",
    alt: "205. Logo brands of our partners",
  },
  {
    img: "/brands/206.PNG",
    alt: "206. Logo brands of our partners",
  },
  {
    img: "/brands/207.jpeg",
    alt: "207. Logo brands of our partners",
  }
];



const Brands = () => {
  const [open, setOpen] = useState(false);
  const opened = () => {
    setOpen(true);
  };

  const closed = () => {
    setOpen(false);
  };

  const { t } = useTranslation();

  return (
    <BrandsWrapper>
      <Container>
        <h3 className="title" data-aos={"fade-up"}>
          {t("brands.title")}
        </h3>
        <div className="brands" data-aos={"fade-up"}>
          {dataImg.map((item, index) => (
            <div className="brands__item" key={index}>
              <img src={item.img} alt={item.alt} />
            </div>
          ))}
          {open
            ? dataImg2.map((item, index) => (
                <div className="brands__item" key={index}>
                  <img src={item.img} alt={item.alt} />
                </div>
              ))
            : null}
        </div>

        <div className="btn">
          {open ? (
            <button className="btn__item" onClick={closed}>
              {t("brands.closed")}
            </button>
          ) : (
            <button className="btn__item" onClick={opened}>
             {t("brands.open")}
            </button>
          )}
        </div>
      </Container>
    </BrandsWrapper>
  );
};

export default Brands;
