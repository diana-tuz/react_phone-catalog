import { IoIosArrowBack } from '@react-icons/all-files/io/IoIosArrowBack';
import './BackButton.scss';

export const BackButton = () => (
  <button
    type="button"
    className="back-button small-text-12"
    onClick={() => window.history.back()}
  >
    <IoIosArrowBack />
    Back
  </button>
);
