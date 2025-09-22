import Image from "next/image";
import styles from "./page.module.css";
import EventFunction from "@/components/EventFunction";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>My First Next App</h1>
        <h1>My First Next App</h1>
        <EventFunction />
      </main>
    </div>
  );
}
