import Image from "next/image";
import styles from "./page.module.css";
import QuizPage from "./quiz/page";

export default function Home() {
  return (
    <div>
      <QuizPage />
    </div>
  );
}
