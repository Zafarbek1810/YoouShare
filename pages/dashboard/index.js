import Head from "next/head";
import DashboardLayout from "./layout";
import styles from "./Dashboard.module.css";
import YoouShare from "../../src/Components/Pages/HomePage/YoouShare";
import Tarif from "../../src/Components/Pages/HomePage/Tarif";
import PurchaseByInstallments from "../../src/Components/Pages/Partners/PurchaseByInstallments";
import Invest from "../../src/Components/Pages/Partners/Invest";
import StandartFranchize from "../../src/Components/Pages/Partners/standart-franchize";
import Brands from "../../src/Components/Pages/HomePage/Brands";

export default function DashboardLayoout() {
  return (
    <div style={{ height: "100vh", color: "black" }}>
      <Head>
        <title>Yoou Power</title>
      </Head>

      <DashboardLayout>
        <div className={styles.main}>{<YoouShare isEditBtn={true} />}</div>
        <div className={styles.main}>{<Tarif isEditBtn={true} />}</div>
        <div className={styles.main}>{<Invest isEditBtn={true} />}</div>
        <div className={styles.main}>{<StandartFranchize isEditBtn={true} />}</div>
        <div className={styles.main}>{<PurchaseByInstallments isEditBtn={true} />}</div>
        <div className={styles.main}>{<Brands isEditBtn={true} />}</div>
      </DashboardLayout>
    </div>
  );
}
