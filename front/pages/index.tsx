import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.scss'
import {useSelector} from "react-redux";
import {RootState} from "../store/store";

export default function Home() {
    const count = useSelector((state: RootState) => state.counter.value)
    console.log(count)
  return (
          <div className={styles.container}>
              <div> Hello world!</div>
          </div>
  )
}
