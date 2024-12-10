
import './LoadingSpinner.css'
import loadingSpinnerGif from '../../assets/loading.gif'


function LoadingSpinner(){
    return(
      <div className='d-flex al-center jc-center loading-overlay-container'>
        <img src={loadingSpinnerGif} alt="loagind" height='80px' />
      </div>
    )
}

export default LoadingSpinner