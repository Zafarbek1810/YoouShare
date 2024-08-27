import Head from "next/head";
import LoginPage from "../components/login/LoginPage";

export default function Dashboard() {
  return (
    <div style={{ height: "100vh", color: 'black' }}>
      <Head>
        <title>Yoou Power</title>
      </Head>

      <div style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <LoginPage />
      </div>
    </div>
  );
}
