import { useDispatch, useSelector } from 'react-redux'
import { rootState } from '../../types';
import { addQuizz } from '../../Redux/Actions';
import styles from './option.module.css';
import stylesQuestion from './question.module.css';
import { useNavigate } from 'react-router-dom';

const Questions = () => {
  const {data, currentQuestion} = useSelector((state: rootState) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleNextQuestions = () => {
    dispatch(addQuizz())
    if(currentQuestion === data.length -1 ){
      console.log('entrei aqui');
      navigate('/end')
      
    }
  }
  return (
    <div>
      <p>Oi Question</p>
      {/* <p>{rootState.data[rootState.currentQuestion]}</p> */}
      <p className={stylesQuestion.title}>{data[currentQuestion].question}</p>
      <div className={styles.optionsContainer}>
      {data[currentQuestion].options.map((option) => {
        return  <button onClick={handleNextQuestions} className={styles.button}>      <p key={option} className={styles.option}> {option}</p>
        </button>
      })}

      </div>
      <button onClick={handleNextQuestions}>Próxima</button>
    </div>
  )
}

export default Questions
