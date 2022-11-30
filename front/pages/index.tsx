import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.scss'
import {Provider, useSelector} from "react-redux";
import {RootState, store} from "../store/store";

export default function Home() {
    const count = useSelector((state: RootState) => state.counter.value)
    console.log(count)
  return (
      <Provider store={store}>
          <div className={styles.container}>
              <div> Hello world</div>
          </div>
      </Provider>
  )
}
