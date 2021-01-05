import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./page1.module.scss";

import Component1 from "../../components/comp1/Component1";
import Component2 from "../../components/comp2/Component2";

const page1 = () => {
  const [text, setText] = useState<string>("hi");
  const [num, setNum] = useState<number>(1337);

  useEffect(() => {
    setText("hi, i m local state");
    setNum(420);
  });
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Index Page" />
        <title>Page 1</title>
      </Head>
      <h1>i m page 1</h1>
      <p>{text}</p>
      <p>{num}</p>
      <Component1 msg="Hello component 1" int={2} />
      <Component2 msg="Hello component 2" int={3} />
    </div>
  );
};

export default page1;
