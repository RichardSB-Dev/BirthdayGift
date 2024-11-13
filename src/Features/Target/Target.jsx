import { ContentTarget } from '../ContentTarget/ContentTarget'
import { Navbar } from '../Navbar/Navbar'
import './Target.css';

export const Target = () => {
  return (
    <div className="target">
      <Navbar />
      <div className="targetContainer">
        <ContentTarget />
        <div className="contentImage">
          <img src="src/assets/Images/contentRightImage.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}
