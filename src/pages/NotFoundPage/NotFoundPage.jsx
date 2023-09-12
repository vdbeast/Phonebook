import React from 'react'
import style from './NotFoundPage.module.css'
import errorLogo from '../../images/404_error.png'

const NotFoundPage = () => {
  return (
    <div className={style.container}>
      <img src={errorLogo} alt="logo" />
      <h2 className={style.title}>Error 404 <br />Oops, page not found</h2>
    </div>
  )
}

export default NotFoundPage