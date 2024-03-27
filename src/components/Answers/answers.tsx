import styles from './awnswers.module.css';

const Answers = () => {
  return (
    <div>
      <p>Parabéns por completar nosso quiz</p>
      <p>Com base nas suas preferências, o seu estilo ideal é</p>
      <img src="https://buenacasaplanejados.com/wp-content/uploads/2022/01/cozinha1.jpg" />
      <div className={styles.btnRedirect}>Quero conhecer a KAROLPLANEJADOS</div>
    </div>
  )
}

export default Answers
